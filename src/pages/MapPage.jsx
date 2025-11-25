import React from 'react'
import { MapPin, ArrowLeft, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mb-12 bg-primary-light hover:bg-primary-dark text-black font-semibold py-3 px-8 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 text-2xl"
          >
            <ArrowLeft size={28} />
            Kembali
          </button>

          {/* Title */}
          <h1 className="text-6xl font-bold text-primary-dark mb-16">
            Peta Kelurahan Jagakarsa
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-3xl shadow-lg overflow-hidden">
                <img
                  src="/images/{hero,news,maps,achievements,components}/map-kelurahan-jagakarsa.png"
                  alt="Peta Kelurahan Jagakarsa"
                  className="w-full h-96 md:h-[499px] object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Statistics */}
              <div className="space-y-6">
                <div>
                  <p className="text-2xl">
                    <span className="font-bold text-primary-dark">Luas Kelurahan :</span>
                    <span className="font-semibold text-black ml-2">4,850,000 m²</span>
                  </p>
                </div>
                <div>
                  <p className="text-2xl">
                    <span className="font-bold text-primary-dark">RW :</span>
                    <span className="font-semibold text-black ml-2">7</span>
                  </p>
                </div>
                <div>
                  <p className="text-2xl">
                    <span className="font-bold text-primary-dark">RT :</span>
                    <span className="font-semibold text-black ml-2">82</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-black">
                  Kunjungi lokasi kami! Klik tombol Google Maps di bawah ini untuk petunjuk arah
                </p>
              </div>

              {/* Google Maps Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary-light hover:bg-primary-dark text-black font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 text-2xl w-fit"
              >
                <MapPin size={28} />
                Lihat di Google Maps
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="flex justify-center mb-8">
        <div className="w-20 h-20 bg-black/50 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-lg animate-pulse"></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
