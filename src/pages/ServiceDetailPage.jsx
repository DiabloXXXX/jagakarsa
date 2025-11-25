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
    },
    kesehatan: {
      title: 'Layanan Kesehatan',
      subtitle: 'Posyandu & Klinik Kelurahan',
      description: 'Layanan kesehatan dasar untuk masyarakat termasuk pemeriksaan kesehatan rutin dan program vaksinasi.',
      totalMembers: 12,
      icon: <Users size={40} />
    },
    lembaga: {
      title: 'Lembaga Kemasyarakatan',
      subtitle: 'Organisasi Masyarakat',
      description: 'Berbagai organisasi kemasyarakatan yang aktif dalam pemberdayaan dan pengembangan masyarakat.',
      totalMembers: 15,
      icon: <Users size={40} />
    },
    keamanan: {
      title: 'Keamanan & Ketertiban',
      subtitle: 'Satuan Keamanan Lingkungan',
      description: 'Menjaga keamanan dan ketertiban lingkungan kelurahan melalui patroli dan pengawasan berkelanjutan.',
      totalMembers: 24,
      icon: <Users size={40} />
    }
  }

  const service = services[serviceType] || services.ppsu

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-extrabold text-primary-dark mb-6">
              {service.title}
            </h1>

            {/* Orange Line */}
            <div className="w-full max-w-3xl mx-auto h-2 bg-secondary rounded-full mb-8"></div>

            <h2 className="text-3xl font-bold text-black mb-8">
              {service.subtitle}
            </h2>

            <p className="text-2xl font-semibold text-black max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-8 mb-16">
            <div className="w-14 h-14 bg-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-dark mb-2">Total Anggota:</p>
              <p className="text-4xl font-semibold text-black">{service.totalMembers}</p>
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
