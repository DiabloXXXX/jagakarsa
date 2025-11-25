import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PJLPPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const pjlpCategories = [
    {
      id: 1,
      title: 'PPSU (Petugas Pengelola Sarana Umum)',
      description: 'Petugas yang bertugas mengelola, memelihara, dan menjaga sarana umum di wilayah Kelurahan Jagakarsa',
      count: 15,
      countLabel: 'Jumlah Personil',
      mainTasks: [
        'Memelihara dan membersihkan sarana umum (jalan, taman, fasilitas publik)',
        'Melakukan perbaikan dan pemeliharaan rutin sarana umum',
        'Menjaga kebersihan dan keindahan lingkungan kelurahan',
        'Melaporkan kerusakan sarana umum kepada pimpinan'
      ]
    },
    {
      id: 2,
      title: 'PerPetra (Perangkat Perumahan dan Permukiman)',
      description: 'Perangkat yang menangani urusan perumahan, permukiman, dan lingkungan hidup',
      count: 8,
      countLabel: 'Jumlah Personil',
      mainTasks: [
        'Mengawasi dan membina penyelenggaraan perumahan dan permukiman',
        'Melaksanakan program peningkatan kualitas lingkungan hidup',
        'Mengelola data dan informasi perumahan dan permukiman',
        'Melakukan koordinasi dengan instansi terkait di bidang perumahan'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="pjlp" />

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark mb-4 sm:mb-6 md:mb-8">
              PJLP
            </h1>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-black max-w-4xl mx-auto px-2 sm:px-4">
              Petugas Jaga Lingkungan Permukiman
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto">
              Tim profesional yang berkomitmen menjaga kebersihan, keindahan, dan kualitas lingkungan permukiman di Kelurahan Jagakarsa
            </p>
          </div>

          {/* PJLP Categories */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-12 sm:mb-16 md:mb-20">
            {pjlpCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gradient-to-br from-primary-lighter to-primary-light/30 rounded-2xl border-2 border-primary-light overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Header */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark mb-3 sm:mb-4">
                      {category.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-black mb-4 sm:mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Count Box */}
                  <div className="bg-primary-light rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 inline-block">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-white mb-1 sm:mb-2">
                      {category.countLabel}
                    </p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                      {category.count}
                    </p>
                  </div>

                  {/* Main Tasks */}
                  <div className="mt-8 sm:mt-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">
                      Tugas Utama:
                    </h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {category.mainTasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-3 sm:gap-4">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-secondary rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20 border-2 border-primary-light">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark mb-6 sm:mb-8">
              Ringkasan PJLP
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary-dark rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                    Total PJLP: 2 kategori (PPSU & PerPetra)
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary-dark rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                    Total Personil: 23 orang
                  </p>
                </div>
              </div>
              <div className="bg-primary-lighter p-4 sm:p-5 md:p-6 rounded-lg">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-2 sm:mb-3">
                  Visi PJLP
                </p>
                <p className="text-sm sm:text-base md:text-lg text-black">
                  Menciptakan lingkungan permukiman yang bersih, indah, dan sehat untuk meningkatkan kualitas hidup masyarakat Kelurahan Jagakarsa
                </p>
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
