import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero({ setCurrentPage }) {
  return (
    <section
      id="beranda"
      className="relative h-96 md:h-[586px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url("/images/{hero,news,maps,achievements,components}/hero-beranda.jpg")',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight max-w-4xl">
          Selamat Datang <br /> Di Website Kelurahan Jagakarsa
        </h1>
        <button 
          onClick={() => {
            const element = document.getElementById('tentang')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="bg-secondary hover:bg-orange-600 text-black font-semibold py-3 px-16 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg text-2xl cursor-pointer"
        >
          Lihat Beranda
          <ArrowRight size={24} />
        </button>
      </div>

    </section>
  )
}
