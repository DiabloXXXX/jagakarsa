import React, { useState } from 'react'
import { AlertTriangle, MapPin, Info, Download } from 'lucide-react'

export default function FloodInfo() {
  const [activeTab, setActiveTab] = useState('overview')

  const floodRisks = [
    {
      level: 'Tinggi',
      color: 'bg-red-500',
      areas: ['Kelurahan Pondok Labu', 'Kelurahan Lenteng Agung', 'Sebagian Kelurahan Jagakarsa'],
      characteristics: 'Area dengan risiko banjir tinggi, sering tergenang air lebih dari 50cm'
    },
    {
      level: 'Sedang',
      color: 'bg-yellow-500',
      areas: ['Kelurahan Ciganjur', 'Kelurahan Srenseng Sawah'],
      characteristics: 'Area dengan risiko banjir sedang, genangan air 20-50cm'
    },
    {
      level: 'Rendah',
      color: 'bg-green-500',
      areas: ['Kelurahan Ragunan', 'Kelurahan Cilandak Timur'],
      characteristics: 'Area dengan risiko banjir rendah, genangan air kurang dari 20cm'
    }
  ]

  const preventionMeasures = [
    {
      title: 'Pembersihan Saluran Air',
      description: 'Pembersihan rutin saluran drainase dan gorong-gorong untuk memastikan aliran air lancar'
    },
    {
      title: 'Normalisasi Sungai',
      description: 'Program normalisasi sungai dan kali untuk meningkatkan kapasitas penampungan air'
    },
    {
      title: 'Sistem Peringatan Dini',
      description: 'Sistem monitoring dan peringatan dini banjir untuk respons cepat'
    },
    {
      title: 'Edukasi Masyarakat',
      description: 'Sosialisasi dan edukasi kepada warga tentang mitigasi banjir'
    },
    {
      title: 'Pemeliharaan Infrastruktur',
      description: 'Pemeliharaan pompa air dan infrastruktur pengendalian banjir'
    },
    {
      title: 'Tata Ruang Berkelanjutan',
      description: 'Perencanaan tata ruang yang mempertimbangkan aspek hidrologi'
    }
  ]

  const emergencyContacts = [
    { name: 'Kantor Kelurahan Jagakarsa', phone: '021-7270954', icon: '🏢' },
    { name: 'Pos Ronda Kelurahan', phone: '021-XXXXXXX', icon: '🚨' },
    { name: 'Dinas Banjir Jakarta', phone: '021-XXXXXXX', icon: '🚒' },
    { name: 'Ambulans Darurat', phone: '118', icon: '🚑' }
  ]

  return (
    <section id="banjir" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle size={32} className="text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
              Area Rawan Banjir
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi penting tentang area rawan banjir di Kelurahan Jagakarsa untuk keselamatan dan kesiapsiagaan masyarakat
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'text-primary-dark border-b-4 border-primary-dark'
                : 'text-gray-600 hover:text-primary-dark'
            }`}
          >
            Peta Risiko
          </button>
          <button
            onClick={() => setActiveTab('prevention')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'prevention'
                ? 'text-primary-dark border-b-4 border-primary-dark'
                : 'text-gray-600 hover:text-primary-dark'
            }`}
          >
            Pencegahan
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'emergency'
                ? 'text-primary-dark border-b-4 border-primary-dark'
                : 'text-gray-600 hover:text-primary-dark'
            }`}
          >
            Darurat
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-gray-100 rounded-lg p-8 border-4 border-yellow-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
                  <MapPin size={28} />
                  PETA RISIKO RAWAN BENCANA
                </h3>
                <button 
                  onClick={() => {
                    // Create a simple download link for the map
                    const link = document.createElement('a')
                    link.href = '/images/{hero,news,maps,achievements,components}/peta-banjir.png'
                    link.download = 'peta-risiko-banjir-jagakarsa.png'
                    link.click()
                  }}
                  className="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={64} className="text-primary-dark mx-auto mb-4 opacity-50" />
                    <p className="text-gray-600 text-lg font-semibold">Peta Kelurahan Jagakarsa</p>
                    <p className="text-gray-500 text-sm mt-2">Peta interaktif menampilkan area rawan banjir</p>
                  </div>
                </div>
              </div>

              {/* Map Legend */}
              <div className="grid md:grid-cols-3 gap-4">
                {floodRisks.map((risk, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-primary-light">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-6 h-6 rounded ${risk.color}`}></div>
                      <h4 className="font-bold text-lg text-primary-dark">Risiko {risk.level}</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{risk.characteristics}</p>
                    <div className="text-xs text-gray-600">
                      <p className="font-semibold mb-2">Area Terdampak:</p>
                      <ul className="space-y-1">
                        {risk.areas.map((area, i) => (
                          <li key={i}>• {area}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                <div className="flex gap-3">
                  <Info size={24} className="text-yellow-600 flex-shrink-0" />
                  <div className="text-sm text-gray-800">
                    <p className="font-semibold mb-2">Informasi Penting:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Luas Area: 4,850,000 m²</li>
                      <li>• Jumlah RT: 82</li>
                      <li>• Jumlah RW: 7</li>
                      <li>• Musim Hujan: Oktober - April (Risiko Tinggi)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prevention' && (
          <div className="space-y-6">
            <div className="bg-primary-lighter p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Program Pencegahan & Mitigasi Banjir
              </h3>
              <p className="text-gray-700">
                Kelurahan Jagakarsa telah mengimplementasikan berbagai program untuk mengurangi risiko banjir dan melindungi masyarakat.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {preventionMeasures.map((measure, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-primary-light rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light text-white p-3 rounded-lg flex-shrink-0">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-dark mb-2">
                        {measure.title}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {measure.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Jadwal Pemeliharaan</h3>
              <div className="space-y-4">
                <TimelineItem
                  season="Musim Kemarau"
                  period="Mei - September"
                  activities="Pembersihan saluran, normalisasi sungai, perbaikan infrastruktur"
                />
                <TimelineItem
                  season="Musim Hujan"
                  period="Oktober - April"
                  activities="Monitoring intensif, siaga darurat, evakuasi jika diperlukan"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div className="space-y-8">
            {/* Emergency Alert */}
            <div className="bg-red-50 border-4 border-red-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <AlertTriangle size={28} />
                Nomor Darurat & Kontak Penting
              </h3>
              <p className="text-gray-700 mb-6">
                Simpan nomor-nomor penting berikut untuk keadaan darurat banjir
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{contact.icon}</span>
                      <div>
                        <p className="font-bold text-primary-dark">{contact.name}</p>
                        <p className="text-red-600 font-semibold text-lg">{contact.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Sebelum Banjir</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Siapkan tas darurat dengan dokumen penting dan barang berharga</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Ketahui rute evakuasi terdekat dari rumah Anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Simpan nomor darurat di ponsel Anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Persiapkan perlengkapan darurat (obat, makanan, air)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-green-600 mb-4">Saat Banjir</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Segera evakuasi ke tempat yang lebih tinggi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Jangan mencoba menyeberangi air yang mengalir deras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hubungi petugas darurat jika memerlukan bantuan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hindari area dengan genangan air dalam</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* After Flood */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-orange-600 mb-4">Setelah Banjir</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Periksa kesehatan keluarga dan minta bantuan medis jika diperlukan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Bersihkan rumah dan cegah penyakit yang mungkin timbul</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Laporkan kerusakan ke kantor kelurahan untuk bantuan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span>Ikuti program pemulihan dan rehabilitasi dari pemerintah</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function TimelineItem({ season, period, activities }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary-dark rounded-full"></div>
        <div className="w-1 h-20 bg-primary-light"></div>
      </div>
      <div className="pb-8">
        <h4 className="font-bold text-primary-dark text-lg">{season}</h4>
        <p className="text-sm text-secondary font-semibold mb-2">{period}</p>
        <p className="text-gray-700">{activities}</p>
      </div>
    </div>
  )
}
