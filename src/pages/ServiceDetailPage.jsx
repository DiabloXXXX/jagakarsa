import React from 'react'
import { Users, ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceDetailPage({ setCurrentPage, serviceType = 'ppsu', onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const services = {
    ppsu: {
      title: 'PPSU',
      subtitle: 'Petugas Penanganan Sarana dan Utilitas',
      description: 'Tenaga yang bertugas membantu menjaga kebersihan, ketertiban, serta memelihara sarana dan prasarana umum di wilayah kelurahan.',
      totalMembers: 84,
      icon: <Users size={40} />
    }
  }

  const service = services[serviceType] || services.ppsu

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="service" />

      {/* Main Content */}
      <section className="flex-1 py-12 sm:py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-4 sm:mb-6 md:mb-8">
              {service.title}
            </h1>

            {/* Orange Line */}
            <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 md:h-2 bg-secondary rounded-full mx-auto mb-6 sm:mb-8 md:mb-10"></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-8 md:mb-10">
              {service.subtitle}
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
              <Users size={32} className="text-white" />
            </div>
            <div>
              <p className="text-base sm:text-lg md:text-2xl font-bold text-primary-dark mb-1 sm:mb-2">Total Anggota:</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">{service.totalMembers}</p>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mt-12 sm:mt-16 md:mt-20 bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center gap-2 sm:gap-3 transition-all transform hover:scale-105 text-sm sm:text-base md:text-xl"
          >
            <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
            Kembali
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
