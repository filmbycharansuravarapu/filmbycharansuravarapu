import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'filmbycharansuravarapu - Professional Photography',
  description: 'Professional photography services for weddings, branding, and products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <footer className="w-full text-center py-6 bg-[#181818] text-gray-400 border-t border-gray-700 mt-12">
          © {new Date().getFullYear()} filmbycharansuravarapu. All Rights Reserved.
        </footer>
      </body>
    </html>
  )
} 