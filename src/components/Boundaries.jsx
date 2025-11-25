import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Boundaries({ setCurrentPage }) {
  const boundaries = [
    { direction: 'Utara', area: 'Kelurahan Ragunan, Kelurahan Cilandak Timur dan Kelurahan Kebagusan' },
    { direction: 'Selatan', area: 'Kelurahan Ciganjur dan Kelurahan Srenseng Sawah' },
    { direction: 'Timur', area: 'Kelurahan Lenteng Agung' },
    { direction: 'Barat', area: 'Kelurahan Pondok Labu dan Kecamatan Sawangan Kota Depok' },
  ]

  return (
    <section id="batas-wilayah" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Batas Wilayah Kelurahan
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Boundaries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {boundaries.map((boundary, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-primary-light"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-light text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{boundary.direction}</h3>
                  <p className="text-gray-700">{boundary.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Peta Kelurahan Jagakarsa</h3>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
            <div className="text-center">
              <MapPin size={48} className="text-primary-dark mx-auto mb-4" />
              <p className="text-gray-600">Peta Interaktif Kelurahan Jagakarsa</p>
              <p className="text-sm text-gray-500 mt-2">Klik tombol di bawah untuk melihat peta lengkap</p>
            </div>
          </div>
          <button
            onClick={() => {
              if (setCurrentPage) {
                setCurrentPage('map')
                window.scrollTo(0, 0)
              }
            }}
            className="bg-primary-light hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto transition-all transform hover:scale-105"
          >
            <MapPin size={20} />
            Lihat di Maps
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
