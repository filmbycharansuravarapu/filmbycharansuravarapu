"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  'Wedding',
  'Branding',
  'Product',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwLrIg3eSXuAa42rk7kIoVbAlE1aH82U-XCUrQN8UZ_0Nhk3kaF7vI6S2GzYSptPedm4Q/exec', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

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

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-[#222] p-8 rounded-lg border border-gray-700 shadow-lg flex flex-col gap-6">
            <h2 className="text-3xl font-serif mb-2 text-accent">Contact Us</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded bg-[#181818] border border-gray-600 text-white focus:outline-accent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded bg-[#181818] border border-gray-600 text-white focus:outline-accent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-[#181818] border border-gray-600 text-white focus:outline-accent"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded bg-[#181818] border border-gray-600 text-white focus:outline-accent"
            >
              <option value="">Select Service</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="px-4 py-3 rounded bg-[#181818] border border-gray-600 text-white focus:outline-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md text-lg transition-colors font-semibold"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-400 text-center mt-2">Thank you! Your message has been sent.</div>
            )}
          </form>

          {/* Direct Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Email</h3>
              <a href="mailto:filmbycharansuravarapu@gmail.com" className="text-lg text-gray-200 hover:text-accent transition-colors">filmbycharansuravarapu@gmail.com</a>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Phone</h3>
              <span className="text-lg text-gray-200">+91 84640 05350</span>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Location</h3>
              <span className="text-lg text-gray-200">Vizag,India</span>
            </div>
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/filmby_charan_suravarapu_?igsh=dGNjajQ1dnJtenpt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H5v4h5v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 