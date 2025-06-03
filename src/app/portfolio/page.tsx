"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Wedding', value: 'wedding' },
  { label: 'Branding & Identity', value: 'branding_identity' },
  { label: 'Product', value: 'product' },
]

const images = [
  // Wedding Images
  { src: '/assets/images/wedding/DSC01405.JPG', category: 'wedding', alt: 'Wedding Photography 1' },
  { src: '/assets/images/wedding/DSC01140.JPG', category: 'wedding', alt: 'Wedding Photography 2' },
  { src: '/assets/images/wedding/DSC01228.JPG', category: 'wedding', alt: 'Wedding Photography 3' },
  { src: '/assets/images/wedding/DSC01242.JPG', category: 'wedding', alt: 'Wedding Photography 4' },
  { src: '/assets/images/wedding/DSC08338.JPG', category: 'wedding', alt: 'Wedding Photography 5' },
  { src: '/assets/images/wedding/DSC01405.png', category: 'wedding', alt: 'Wedding Photography 6' },

  // Branding & Identity Images
  { src: '/assets/images/branding_identity/DSC02333.JPG', category: 'branding_identity', alt: 'Branding & Identity 1' },
  { src: '/assets/images/branding_identity/DSC01864.JPG', category: 'branding_identity', alt: 'Branding & Identity 2' },
  { src: '/assets/images/branding_identity/DSC01774.JPG', category: 'branding_identity', alt: 'Branding & Identity 3' },
  { src: '/assets/images/branding_identity/DSC01771.JPG', category: 'branding_identity', alt: 'Branding & Identity 4' },
  { src: '/assets/images/branding_identity/DSC01767.JPG', category: 'branding_identity', alt: 'Branding & Identity 5' },

  // Product Images
  { src: '/assets/images/product/IMG_5694.JPG', category: 'product', alt: 'Product Photography 1' },
  { src: '/assets/images/product/IMG_5692.JPG', category: 'product', alt: 'Product Photography 2' },
  { src: '/assets/images/product/IMG_5691.JPG', category: 'product', alt: 'Product Photography 3' },
  { src: '/assets/images/product/IMG_5690.JPG', category: 'product', alt: 'Product Photography 4' },
  { src: '/assets/images/product/IMG_5689.JPG', category: 'product', alt: 'Product Photography 5' },
  { src: '/assets/images/product/IMG_5688 2.JPG', category: 'product', alt: 'Product Photography 6' },
]

export default function Portfolio() {
  const [selected, setSelected] = useState('all')
  const filtered = selected === 'all' ? images : images.filter(img => img.category === selected)

  return (
    <main className="min-h-screen bg-[#181818] text-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#181818]/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/logo/logo.jpg"
                alt="FilmByCharansuravarapu Logo"
                width={40}
                height={40}
                className="rounded-full bg-white object-contain"
              />
              <span className="text-xl font-serif tracking-wide font-bold">FilmByCharansuravarapu</span>
            </div>
            <div className="hidden md:flex gap-8 text-lg font-medium">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
            <div className="flex gap-4">
            <a href="https://www.instagram.com/filmby_charan_suravarapu_?igsh=dGNjajQ1dnJtenpt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H5v4h5v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#181818] z-10" />
        <Image
          src={filtered[0]?.src || '/assets/images/wedding/DSC01405.JPG'}
          alt="Portfolio Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-300">Capturing moments, crafting stories</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelected(cat.value)}
                className={`px-4 py-2 rounded-full border text-base font-medium transition-all duration-300 ${
                  selected === cat.value 
                    ? 'bg-accent border-accent text-white scale-105 shadow-md shadow-accent/20' 
                    : 'border-gray-500 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group break-inside-avoid overflow-hidden rounded-lg bg-[#222] cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-bold mb-2">{img.alt}</h3>
                    <p className="text-sm text-gray-300 capitalize">{img.category.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 