import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

      {/* About/Quote Section */}
      <section className="py-12 px-4 text-center border-b border-gray-700">
        <blockquote className="text-2xl italic font-light mb-6">“The only way to do great work is to love what you do.” – Steve Jobs</blockquote>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          At FilmByCharansuravarapu, we strive to make a difference in the field of Photography & Cinematography. While best wedding photography and destination couple shoots are our speciality, we are also well versed in the areas of product branding and identity designs, corporate brand advertisements. Our work defines us as much as we define our work.
        </p>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-accent">Portfolio Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Category */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-[#222]">
              <Image
                src="/assets/images/wedding/DSC01405.jpg"
                alt="Wedding Photography"
                width={400}
                height={300}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-serif mb-4">Wedding Photography</h3>
                <p className="text-center mb-6">Capturing your special moments with elegance and style</p>
                <Link 
                  href="/portfolio?category=wedding"
                  className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Branding Category */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-[#222]">
              <Image
                src="/assets/images/branding_identity/DSC01767.jpg"
                alt="Branding & Identity"
                width={400}
                height={300}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-serif mb-4">Branding & Identity</h3>
                <p className="text-center mb-6">Professional imagery that tells your brand's story</p>
                <Link 
                  href="/portfolio?category=branding"
                  className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>

            {/* Product Category */}
            <div className="group relative overflow-hidden rounded-lg border border-gray-700 bg-[#222]">
              <Image
                src="/assets/images/product/IMG_5689.jpg"
                alt="Product Photography"
                width={400}
                height={300}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-serif mb-4">Product Photography</h3>
                <p className="text-center mb-6">Showcase your products in their best light</p>
                <Link 
                  href="/portfolio?category=product"
                  className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 