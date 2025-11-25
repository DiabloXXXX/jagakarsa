import React from 'react'
import { ArrowLeft, Calendar, Globe } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NewsPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const news = [
    {
      id: 1,
      title: 'Atasi Persoalan Sampah, Lurah Jagakarsa Galakkan Budi Daya Maggot kepada Warga',
      description: 'Budi daya maggot sangat penting ditingkat Kelurahan agar dapat dicontohkan kepada warga untuk mengurangi sampah organik.',
      source: 'WahanaNews Jakarta.co',
      sourceUrl: 'jakarta.wahananews.co',
      date: '13 Februari 2025',
      image: '/images/{hero,news,maps,achievements,components}/news-maggot-01.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Kelurahan Jagakarsa Beri Contoh Positif Lewat Budi Daya Maggot',
      description: 'Pihak Kelurahan Jagakarsa, Kecamatan Jagakarsa, Jakarta Selatan melakukan budi daya maggot di kantor Kelurahan sebagai contoh nyata.',
      source: 'BeritaJakarta.id',
      sourceUrl: 'beritajakarta.id',
      date: '13 Februari 2025',
      image: '/images/{hero,news,maps,achievements,components}/news-maggot-02.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Kelurahan Jagakarsa Ajak Warga Melakukan Budi Daya Maggot Upaya Mengurangi Sampah',
      description: 'RadarOnline.id, JAKARTA – Budi daya maggot sangat penting ditingkat Kelurahan agar dapat dicontohkan dilingkungan masing-masing.',
      source: 'RadarOnline.id',
      sourceUrl: 'radaronline.id',
      date: '14 Februari 2025',
      image: '/images/{hero,news,maps,achievements,components}/news-maggot-03.jpg',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-black mb-6">BERITA KELURAHAN</h1>
            <p className="text-3xl font-bold text-black max-w-4xl mx-auto">
              Pusat berita dan informasi terbaru dari Kelurahan Jagakarsa untuk masyarakat
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-8 h-60 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark mb-4 line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="text-base font-semibold text-black line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-dark rounded"></div>
                      <p className="text-sm font-semibold text-black">{item.sourceUrl}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary-dark" />
                      <p className="text-sm font-semibold text-primary-dark">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
