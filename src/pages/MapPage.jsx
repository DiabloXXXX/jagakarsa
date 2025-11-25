import React from 'react'
import { MapPin, ArrowLeft, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteStats } from '../config/siteConfig'

export default function MapPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const googleMapsUrl = 'https://www.google.com/maps/search/Kelurahan+Jagakarsa,+Jakarta+Selatan/@-6.3667,106.8167,15z'

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mb-8 sm:mb-10 md:mb-12 bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center gap-2 sm:gap-3 transition-all transform hover:scale-105 text-sm sm:text-base md:text-2xl"
          >
            <ArrowLeft size={20} className="sm:w-7 sm:h-7" />
            Kembali
          </button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-8 sm:mb-12 md:mb-16">
            Peta Kelurahan Jagakarsa
          </h1>

          <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 items-start">
            {/* Map Section */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-3xl shadow-lg overflow-hidden">
                <img
                  src="/images/{hero,news,maps,achievements,components}/map-kelurahan-jagakarsa.png"
                  alt="Peta Kelurahan Jagakarsa"
                  className="w-full h-56 sm:h-72 md:h-[499px] object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              {/* Statistics */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-sm sm:text-base md:text-xl">
                    <span className="font-bold text-primary-dark">Luas Kelurahan :</span>
                    <span className="font-semibold text-black ml-1 sm:ml-2">{siteStats.luas}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-xl">
                    <span className="font-bold text-primary-dark">RW :</span>
                    <span className="font-semibold text-black ml-1 sm:ml-2">{siteStats.rw}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-xl">
                    <span className="font-bold text-primary-dark">RT :</span>
                    <span className="font-semibold text-black ml-1 sm:ml-2">{siteStats.rt}</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base md:text-xl font-semibold text-black">
                  Kunjungi lokasi kami! Klik tombol Google Maps di bawah ini untuk petunjuk arah
                </p>
              </div>

              {/* Google Maps Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base md:text-2xl w-full sm:w-fit justify-center sm:justify-start"
              >
                <MapPin size={18} className="sm:w-7 sm:h-7" />
                Lihat di Google Maps
                <ExternalLink size={18} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
