import React from 'react'
import { ArrowLeft, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServicesInfoPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="services-info" />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 border-2 border-gray-100">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-primary-dark text-center mb-6 sm:mb-8 md:mb-12">
              INFORMASI PELAYANAN <br /> KELURAHAN JAGAKARSA
            </h1>

            {/* Orange Line */}
            <div className="w-full max-w-2xl mx-auto h-2 bg-secondary rounded-full mb-6 sm:mb-8 md:mb-12"></div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* QR Code Section */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm sm:text-base md:text-2xl font-semibold text-black mb-4 sm:mb-6 md:mb-8 text-center">
                  Scan barcode atau klik link berikut:
                </p>
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-gray-200">
                  <img
                    src="/images/{hero,news,maps,achievements,components}/qr-code.png"
                    alt="QR Code Pelayanan Kelurahan Jagakarsa"
                    className="w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 object-contain"
                  />
                </div>
              </div>

              {/* Information Section */}
              <div className="space-y-6 sm:space-y-8">
                {/* Link */}
                <div>
                  <p className="text-base sm:text-lg md:text-3xl font-semibold text-sky-700 underline break-all">
                    bit.ly/pelayanankelurahanjagakarsa
                  </p>
                </div>

                {/* Operating Hours */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-black flex items-center gap-2 sm:gap-3">
                    <Clock size={24} className="sm:w-8 sm:h-8 text-primary-dark" />
                    Jam Operasional
                  </h3>
                  <div className="space-y-2 sm:space-y-3 ml-8 sm:ml-10 md:ml-12">
                    <div>
                      <p className="text-sm sm:text-base md:text-2xl font-semibold text-black">
                        Senin s.d Kamis:{' '}
                        <span className="text-primary-dark font-bold">7.30 s.d 16.00 WIB</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base md:text-2xl font-semibold text-black">
                        Jumat:{' '}
                        <span className="text-primary-dark font-bold">7.30 s.d 16.30 WIB</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="mt-8 sm:mt-12 md:mt-16 bg-primary-dark rounded-lg p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Hubungi Kami untuk Informasi Lebih Lanjut</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone size={24} className="sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Telepon</p>
                  <p className="text-base sm:text-lg md:text-2xl font-bold">021-7270954</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail size={24} className="sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Email</p>
                  <p className="text-base sm:text-lg md:text-2xl font-bold break-all">kel_jagakarsa@jakarta.go.id</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 md:col-span-2">
                <MapPin size={24} className="sm:w-8 sm:h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Alamat</p>
                  <p className="text-sm sm:text-base md:text-2xl font-bold">
                    Jl. Jagakarsa II No.1, RT.1/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mt-8 sm:mt-10 md:mt-12 bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center gap-2 sm:gap-3 transition-all transform hover:scale-105 text-sm sm:text-base md:text-2xl"
          >
            <ArrowLeft size={20} className="sm:w-7 sm:h-7" />
            Kembali
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
