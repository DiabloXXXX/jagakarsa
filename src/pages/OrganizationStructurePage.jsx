import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function OrganizationStructurePage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="organization" />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark mb-4 sm:mb-6">STRUKTUR ORGANISASI</h1>
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-black px-4">
              Struktur Organisasi Pemerintahan Kelurahan
            </h2>
          </div>

          {/* Organization Chart */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <svg className="w-full min-w-max" viewBox="0 0 1200 1100" style={{minHeight: '600px'}}>
            {/* Level 1: Lurah */}
            <foreignObject x="450" y="20" width="300" height="60">
              <div className="bg-primary-light border-2 border-black px-8 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="text-center font-bold text-black text-lg">LURAH</p>
              </div>
            </foreignObject>

            {/* Line from Lurah to Sekretaris */}
            <line x1="600" y1="80" x2="600" y2="130" stroke="black" strokeWidth="2"/>

            {/* Level 2: Sekretaris Kelurahan */}
            <foreignObject x="400" y="130" width="400" height="60">
              <div className="bg-primary-light border-2 border-black px-8 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="text-center font-bold text-black text-lg">SEKRETARIS KELURAHAN</p>
              </div>
            </foreignObject>

            {/* Horizontal line from Sekretaris to three sections */}
            <line x1="600" y1="190" x2="600" y2="250" stroke="black" strokeWidth="2"/>
            <line x1="300" y1="250" x2="900" y2="250" stroke="black" strokeWidth="2"/>

            {/* Vertical lines to three sections */}
            <line x1="300" y1="250" x2="300" y2="310" stroke="black" strokeWidth="2"/>
            <line x1="600" y1="250" x2="600" y2="310" stroke="black" strokeWidth="2"/>
            <line x1="900" y1="250" x2="900" y2="310" stroke="black" strokeWidth="2"/>

            {/* Level 3: Three Sections */}
            {/* Left: Seksi Pemerintahan */}
            <foreignObject x="150" y="310" width="300" height="60">
              <div className="bg-primary-light border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-bold text-black text-base text-center">SEKSI PEMERINTAHAN</p>
              </div>
            </foreignObject>

            {/* Center: Seksi Ekonomi & Pembangunan */}
            <foreignObject x="450" y="310" width="300" height="60">
              <div className="bg-primary-light border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-bold text-black text-base text-center">SEKSI EKONOMI & PEMBANGUNAN</p>
              </div>
            </foreignObject>

            {/* Right: Seksi Kesejahteraan Rakyat */}
            <foreignObject x="750" y="310" width="300" height="60">
              <div className="bg-primary-light border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-bold text-black text-base text-center">SEKSI KESEJAHTERAAN RAKYAT</p>
              </div>
            </foreignObject>

            {/* Staff under each section */}
            {/* Left section staff */}
            <line x1="300" y1="370" x2="300" y2="420" stroke="black" strokeWidth="2"/>
            <foreignObject x="150" y="420" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Pengolah Data</p>
              </div>
            </foreignObject>
            <foreignObject x="150" y="490" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Penyusun</p>
              </div>
            </foreignObject>

            {/* Center section staff */}
            <line x1="600" y1="370" x2="600" y2="420" stroke="black" strokeWidth="2"/>
            <foreignObject x="450" y="420" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Pengolah Data</p>
              </div>
            </foreignObject>
            <foreignObject x="450" y="490" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Penyusun</p>
              </div>
            </foreignObject>

            {/* Right section staff */}
            <line x1="900" y1="370" x2="900" y2="420" stroke="black" strokeWidth="2"/>
            <foreignObject x="750" y="420" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Pengolah Data</p>
              </div>
            </foreignObject>
            <foreignObject x="750" y="490" width="300" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Penyusun</p>
              </div>
            </foreignObject>

            {/* Line to Sekretaris Staff */}
            <line x1="600" y1="560" x2="600" y2="620" stroke="black" strokeWidth="2"/>

            {/* Sekretaris Staff */}
            <foreignObject x="350" y="620" width="500" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Bendahara Pengeluaran</p>
              </div>
            </foreignObject>
            <foreignObject x="350" y="690" width="500" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Pengurus Barang Pembantu</p>
              </div>
            </foreignObject>
            <foreignObject x="350" y="760" width="500" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Pengolah Data</p>
              </div>
            </foreignObject>
            <foreignObject x="350" y="830" width="500" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Staf Administrasi</p>
              </div>
            </foreignObject>
            <foreignObject x="350" y="900" width="500" height="50">
              <div className="bg-white border-2 border-black px-6 py-3 rounded-lg h-full flex items-center justify-center">
                <p className="font-semibold text-black text-sm text-center">Caraka</p>
              </div>
            </foreignObject>
            </svg>
          </div>

          {/* Description */}
          <div className="mt-10 sm:mt-12 md:mt-16 bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Penjelasan Struktur</h3>
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
              <p>
                <span className="font-bold text-primary-light">Lurah</span> - Memimpin dan mengoordinasikan seluruh kegiatan pemerintahan kelurahan
              </p>
              <p>
                <span className="font-bold text-primary-light">Sekretaris Kelurahan</span> - Menangani administrasi, keuangan, dan kepegawaian
              </p>
              <p>
                <span className="font-bold text-primary-light">Seksi Pemerintahan</span> - Mengelola urusan pemerintahan dan ketentraman
              </p>
              <p>
                <span className="font-bold text-primary-light">Seksi Ekonomi & Pembangunan</span> - Mengelola urusan ekonomi dan pembangunan
              </p>
              <p>
                <span className="font-bold text-primary-light">Seksi Kesejahteraan Rakyat</span> - Mengelola urusan kesejahteraan dan sosial
              </p>
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
