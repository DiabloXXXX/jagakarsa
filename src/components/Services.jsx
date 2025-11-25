import React from 'react'
import { Users, FileText, Heart, Shield } from 'lucide-react'

export default function Services({ setCurrentPage, setSelectedService, onOpenChatbot }) {
  const services = [
    {
      id: 'ppsu',
      icon: <FileText size={32} />,
      title: 'PPSU',
      subtitle: 'Petugas Penanganan Sarana dan Utilitas',
      description: 'Tenaga yang bertugas membantu menjaga kebersihan, ketertiban, serta memelihara sarana dan prasarana umum di wilayah kelurahan.',
      count: '84'
    },
    {
      id: 'kesehatan',
      icon: <Heart size={32} />,
      title: 'Layanan Kesehatan',
      subtitle: 'Posyandu & Klinik Kelurahan',
      description: 'Layanan kesehatan dasar untuk masyarakat termasuk pemeriksaan kesehatan rutin dan program vaksinasi.',
      count: '12'
    },
    {
      id: 'lembaga',
      icon: <Users size={32} />,
      title: 'Lembaga Kemasyarakatan',
      subtitle: 'Organisasi Masyarakat',
      description: 'Berbagai organisasi kemasyarakatan yang aktif dalam pemberdayaan dan pengembangan masyarakat.',
      count: '15'
    },
    {
      id: 'keamanan',
      icon: <Shield size={32} />,
      title: 'Keamanan & Ketertiban',
      subtitle: 'Satuan Keamanan Lingkungan',
      description: 'Menjaga keamanan dan ketertiban lingkungan kelurahan melalui patroli dan pengawasan berkelanjutan.',
      count: '24'
    }
  ]

  const handleServiceClick = (serviceId) => {
    if (setSelectedService && setCurrentPage) {
      setSelectedService(serviceId)
      setCurrentPage('service')
      window.scrollTo(0, 0)
    }
  }

  return (
    <section id="layanan" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Layanan Kelurahan
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-8 border-t-4 border-primary-light cursor-pointer transform hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary-light text-white p-4 rounded-lg flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-dark mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Total Anggota:</span>
                    <span className="text-2xl font-bold text-primary-dark">
                      {service.count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary-light rounded-lg p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Butuh Layanan Kelurahan?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami melalui berbagai saluran komunikasi yang tersedia
          </p>
          <button 
            onClick={() => {
              if (onOpenChatbot) {
                onOpenChatbot()
              }
            }}
            className="bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  )
}
