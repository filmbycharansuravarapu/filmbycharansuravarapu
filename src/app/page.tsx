'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function Home() {
  // Wedding, Product, and Branding images
  const weddingImages = [
    '/assets/images/wedding/DSC01405.png',
    '/assets/images/wedding/DSC01228.JPG',
    '/assets/images/wedding/DSC01242.JPG',
    '/assets/images/wedding/DSC08338.JPG',
    '/assets/images/wedding/DSC01405.JPG',
    '/assets/images/wedding/DSC01140.JPG',
  ];
  const productImages = [
    '/assets/images/product/IMG_5689.JPG',
    '/assets/images/product/IMG_5690.JPG',
    '/assets/images/product/IMG_5691.JPG',
    '/assets/images/product/IMG_5692.JPG',
    '/assets/images/product/IMG_5694.JPG',
    '/assets/images/product/IMG_5688 2.JPG',
  ];
  const brandingImages = [
    '/assets/images/branding_identity/DSC01767.JPG',
    '/assets/images/branding_identity/DSC01771.JPG',
    '/assets/images/branding_identity/DSC01774.JPG',
    '/assets/images/branding_identity/DSC02333.JPG',
    '/assets/images/branding_identity/DSC01864.JPG',
  ];

  // Refs for carousels
  const weddingRef = useRef<HTMLDivElement>(null);
  const brandingRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const refs = [weddingRef, brandingRef, productRef];
    const intervals = refs.map(ref => {
      let isPaused = false;
      let interval = setInterval(() => {
        const el = ref.current;
        if (el && !isPaused) {
          if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1) {
            el.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            el.scrollBy({ left: 1, behavior: 'auto' });
          }
        }
      }, 30);
      // Pause on hover
      const el = ref.current;
      if (el) {
        el.addEventListener('mouseenter', () => { isPaused = true; });
        el.addEventListener('mouseleave', () => { isPaused = false; });
      }
      return interval;
    });
    return () => intervals.forEach(i => clearInterval(i));
  }, []);

  return (
    <main className="min-h-screen bg-[#181818] text-white">
      {/* Cover Section with Transparent Nav */}
      <section className="relative h-[30vh] min-h-[200px] w-full flex items-start justify-end bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/logo/coverimage.jpg')` }}>
        <nav className="absolute top-0 right-0 mt-4 mr-8 flex gap-8 text-lg font-medium bg-black bg-opacity-40 rounded-bl-2xl px-8 py-4 z-10">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
      </section>

      {/* About/Quote Section */}
      <section className="py-12 px-4 text-center border-b border-gray-700">
        <blockquote className="text-2xl italic font-light mb-6">“The only way to do great work is to love what you do.” – Steve Jobs</blockquote>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          At FilmByCharansuravarapu, we strive to make a difference in the field of Photography & Cinematography. While best wedding photography and destination couple shoots are our speciality, we are also well versed in the areas of product branding and identity designs, corporate brand advertisements. Our work defines us as much as we define our work.
        </p>
      </section>

      {/* Wedding Carousel Section */}
      <section className="py-4 px-4">
        <h2 className="text-4xl font-serif mb-8 text-center text-[#df9438] tracking-wide drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Wedding Photography</h2>
        <div ref={weddingRef} className="flex gap-4 pb-4 overflow-x-auto no-scrollbar">
          {weddingImages.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-gray-700 bg-[#222]">
              <Image src={src} alt={`Wedding ${idx+1}`} width={256} height={160} className="w-full h-full object-cover" />
            </div>
          ))}
          <Link href="/portfolio?category=wedding" className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-[#181818] text-white font-bold rounded-lg border-2 border-gray-700 hover:bg-accent hover:text-black transition-colors text-xl">
            View More →
          </Link>
        </div>
      </section>

      {/* Branding & Identity Carousel Section */}
      <section className="py-4 px-4">
        <h2 className="text-4xl font-serif mb-4 text-center text-[#df9438] tracking-wide drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Branding & Identity</h2>
        <div ref={brandingRef} className="flex gap-4 pb-4 overflow-x-auto no-scrollbar">
          {brandingImages.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-gray-700 bg-[#222]">
              <Image src={src} alt={`Branding ${idx+1}`} width={256} height={160} className="w-full h-full object-cover" />
            </div>
          ))}
          <Link href="/portfolio?category=branding_identity" className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-[#181818] text-white font-bold rounded-lg border-2 border-gray-700 hover:bg-accent hover:text-black transition-colors text-xl">
            View More →
          </Link>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-4 px-4">
        <h2 className="text-4xl font-serif mb-4 text-center text-[#df9438] tracking-wide drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Product Photography</h2>
        <div ref={productRef} className="flex gap-4 pb-4 overflow-x-auto no-scrollbar">
          {productImages.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-gray-700 bg-[#222]">
              <Image src={src} alt={`Product ${idx+1}`} width={256} height={160} className="w-full h-full object-cover" />
            </div>
          ))}
          <Link href="/portfolio?category=product" className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-[#181818] text-white font-bold rounded-lg border-2 border-gray-700 hover:bg-accent hover:text-black transition-colors text-xl">
            View More →
          </Link>
        </div>
      </section>
    </main>
  )
} 