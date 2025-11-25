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
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16 border-2 border-gray-100">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary-dark text-center mb-12">
              INFORMASI PELAYANAN <br /> KELURAHAN JAGAKARSA
            </h1>

            {/* Orange Line */}
            <div className="w-full max-w-2xl mx-auto h-2 bg-secondary rounded-full mb-12"></div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* QR Code Section */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold text-black mb-8 text-center">
                  Scan barcode atau klik link berikut:
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <img
                    src="/images/{hero,news,maps,achievements,components}/qr-code.png"
                    alt="QR Code Pelayanan Kelurahan Jagakarsa"
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>

              {/* Information Section */}
              <div className="space-y-8">
                {/* Link */}
                <div>
                  <p className="text-3xl font-semibold text-sky-700 underline break-all">
                    bit.ly/pelayanankelurahanjagakarsa
                  </p>
                </div>

                {/* Operating Hours */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-black flex items-center gap-3">
                    <Clock size={32} className="text-primary-dark" />
                    Jam Operasional
                  </h3>
                  <div className="space-y-3 ml-12">
                    <div>
                      <p className="text-2xl font-semibold text-black">
                        Senin s.d Kamis:{' '}
                        <span className="text-primary-dark font-bold">7.30 s.d 16.00 WIB</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold text-black">
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
          <div className="mt-16 bg-primary-dark rounded-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Hubungi Kami untuk Informasi Lebih Lanjut</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <Phone size={32} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold mb-2">Telepon</p>
                  <p className="text-2xl font-bold">021-7270954</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={32} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold mb-2">Email</p>
                  <p className="text-2xl font-bold">kel_jagakrsa@jakarta.go.id</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <MapPin size={32} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold mb-2">Alamat</p>
                  <p className="text-2xl font-bold">
                    Jl. Jagakarsa II No.1, RT.1/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mt-12 bg-primary-light hover:bg-primary-dark text-black font-semibold py-3 px-8 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 text-2xl"
          >
            <ArrowLeft size={28} />
            Kembali
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
