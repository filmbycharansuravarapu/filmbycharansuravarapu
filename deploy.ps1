# Deployment Script for Film by Charan Suravarapu
# This script automates the deployment process

param(
    [string]$Message = "Update website"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Film by Charan Suravarapu - Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the correct directory
$currentDir = Get-Location
$projectRoot = "c:\project\charanphtography\filmbycharansuravarapu"

if ($currentDir.Path -ne $projectRoot) {
    Write-Host "Changing to project directory..." -ForegroundColor Yellow
    Set-Location $projectRoot
}

# Step 1: Copy files from temp-repo to root (production files)
Write-Host "Step 1: Syncing production files from temp-repo..." -ForegroundColor Green

# Files to copy
$filesToCopy = @(
    "contact.html",
    "index.html",
    "wedding.html",
    "brand-identity.html",
    "product.html",
    "event.html",
    "styles.css",
    "vercel.json"
)

foreach ($file in $filesToCopy) {
    $sourcePath = Join-Path "temp-repo" $file
    $destPath = $file
    
    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Force
        Write-Host "  ✓ Copied $file" -ForegroundColor Gray
    } else {
        Write-Host "  ⚠ $file not found in temp-repo" -ForegroundColor Yellow
    }
}

# Copy assets folder
Write-Host "  Copying assets folder..." -ForegroundColor Gray
if (Test-Path "temp-repo\assets") {
    Copy-Item -Path "temp-repo\assets" -Destination "." -Recurse -Force
    Write-Host "  ✓ Copied assets/" -ForegroundColor Gray
}

Write-Host ""

# Step 2: Git operations
Write-Host "Step 2: Preparing Git commit..." -ForegroundColor Green

# Check git status
$gitStatus = git status --porcelain
if ([string]::IsNullOrEmpty($gitStatus)) {
    Write-Host "  ℹ No changes to commit" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Deployment cancelled - no changes detected" -ForegroundColor Yellow
    exit 0
}

Write-Host "  Changes detected:" -ForegroundColor Gray
git status --short

Write-Host ""

# Add all changes
Write-Host "  Adding files to git..." -ForegroundColor Gray
git add .

# Commit changes
Write-Host "  Creating commit..." -ForegroundColor Gray
git commit -m $Message

if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ Git commit failed" -ForegroundColor Red
    exit 1
}

Write-Host "  ✓ Commit created" -ForegroundColor Gray
Write-Host ""

# Step 3: Push to GitHub
Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Green
Write-Host "  (You may be prompted for authentication)" -ForegroundColor Yellow
Write-Host ""

git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "✗ Push failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "  1. Check your internet connection"
    Write-Host "  2. Verify Git credentials are configured"
    Write-Host "  3. Try: git pull origin main --rebase"
    Write-Host "  4. Then run this script again"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "✓ Deployment Successful!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Vercel will auto-deploy in 1-2 minutes"
Write-Host "  2. Check status: https://vercel.com/dashboard"
Write-Host "  3. View live site: https://filmbycharansuravarapu.vercel.app"
Write-Host ""
