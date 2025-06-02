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
  { src: '/assets/images/wedding/DSC01405.jpg', category: 'wedding', alt: 'Wedding 1' },
  { src: '/assets/images/wedding/DSC08338.jpg', category: 'wedding', alt: 'Wedding 2' },
  { src: '/assets/images/branding_identity/DSC01767.jpg', category: 'branding_identity', alt: 'Branding 1' },
  { src: '/assets/images/branding_identity/DSC01771.jpg', category: 'branding_identity', alt: 'Branding 2' },
  { src: '/assets/images/product/IMG_5689.jpg', category: 'product', alt: 'Product 1' },
  { src: '/assets/images/product/IMG_5690.jpg', category: 'product', alt: 'Product 2' },
]

export default function Portfolio() {
  const [selected, setSelected] = useState('all')
  const filtered = selected === 'all' ? images : images.filter(img => img.category === selected)

  return (
    <main className="min-h-screen bg-[#181818] text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/logo/logo.jpg"
            alt="FilmByCharansuravarapu Logo"
            width={48}
            height={48}
            className="rounded-full bg-white object-contain"
          />
          <span className="text-2xl font-serif tracking-wide font-bold">FilmByCharansuravarapu</span>
        </div>
        <div className="flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H5v4h5v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </nav>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`px-6 py-2 rounded-full border-2 text-lg font-medium transition-colors ${selected === cat.value ? 'bg-accent border-accent text-white' : 'border-gray-500 text-gray-300 hover:bg-gray-700'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg border border-gray-700 bg-[#222] cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                <span className="text-lg font-serif opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 