import React from 'react'
import { ArrowLeft, AlertTriangle, MapPin } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FloodProneAreasPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="flood-areas" />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-black mb-8">AREA RAWAN BANJIR</h1>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/{hero,news,maps,achievements,components}/peta-banjir.png"
                alt="Peta Area Rawan Banjir Kelurahan Jagakarsa"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Warning Card */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle size={40} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">Peringatan Banjir</h3>
                  <p className="text-lg font-semibold text-gray-700 leading-relaxed">
                    Kelurahan Jagakarsa memiliki beberapa area yang rawan terhadap banjir, terutama pada musim hujan. Masyarakat diharapkan untuk selalu waspada dan mengikuti instruksi dari pemerintah kelurahan.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Tips Card */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <MapPin size={40} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">Tips Keselamatan</h3>
                  <ul className="space-y-3 text-lg font-semibold text-gray-700">
                    <li>✓ Siapkan tas darurat berisi dokumen penting</li>
                    <li>✓ Ketahui rute evakuasi terdekat</li>
                    <li>✓ Pantau informasi cuaca dan peringatan banjir</li>
                    <li>✓ Hubungi petugas jika ada keadaan darurat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Flood-Prone Areas List */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h3 className="text-3xl font-bold text-primary-dark mb-8">Area Rawan Banjir</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary-light">
                <h4 className="text-2xl font-bold text-primary-dark mb-2">RT 01 - RT 03 (RW 01)</h4>
                <p className="text-lg font-semibold text-gray-700">
                  Area dekat dengan saluran drainase utama, rawan banjir saat curah hujan tinggi
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary-light">
                <h4 className="text-2xl font-bold text-primary-dark mb-2">RT 04 - RT 06 (RW 03)</h4>
                <p className="text-lg font-semibold text-gray-700">
                  Lokasi yang lebih rendah, sering tergenang air pada musim hujan
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary-light">
                <h4 className="text-2xl font-bold text-primary-dark mb-2">RT 07 - RT 09 (RW 05)</h4>
                <p className="text-lg font-semibold text-gray-700">
                  Area pemukiman padat yang memerlukan perhatian khusus dalam penanganan banjir
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-light rounded-lg p-12 text-white mb-16">
            <h3 className="text-3xl font-bold mb-8">Hubungi Kami Saat Darurat</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg font-semibold mb-2">Kantor Kelurahan Jagakarsa</p>
                <p className="text-xl font-bold">021-7270954</p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Email</p>
                <p className="text-xl font-bold">kel_jagakrsa@jakarta.go.id</p>
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
