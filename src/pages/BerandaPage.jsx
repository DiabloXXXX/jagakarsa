import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteStats } from '../config/siteConfig'

export default function BerandaPage({ setCurrentPage, onOpenChatbot }) {

  const boundaries = [
    {
      direction: 'Utara',
      areas: 'Kelurahan Ragunan, Kelurahan Cilandak Timur dan Kelurahan Kebagusan.'
    },
    {
      direction: 'Selatan',
      areas: 'Kelurahan Ciganjur dan Kelurahan Srenseng Sawah.'
    },
    {
      direction: 'Timur',
      areas: 'Kelurahan Lenteng Agung.'
    },
    {
      direction: 'Barat',
      areas: 'Kelurahan Pondok Labu dan Kecamatan Sawangan Kota Depok.'
    }
  ]

  const achievements = [
    {
      type: 'Sertifikat GIA',
      title: 'Inisiator dari Inovasi Pengolahan Sampah Organik',
      date: '8 September 2025',
      image: '/images/{hero,news,maps,achievements,components}/prestasi-1.jpg',
      action: 'Lihat Selengkapnya'
    },
    {
      type: 'Presentasi',
      title: 'Pengolahan Sampah Organik',
      date: '8 September 2025',
      image: '/images/{hero,news,maps,achievements,components}/prestasi-2.png',
      action: 'Lihat Presentasi'
    },
    {
      type: 'Video',
      title: 'Kualitas Inovasi Daerah',
      date: '8 September 2025',
      image: '/images/{hero,news,maps,achievements,components}/prestasi-3.png',
      action: 'Lihat Video'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-[586px] bg-cover bg-center overflow-hidden mt-3.5">
        <img
          src="/images/{hero,news,maps,achievements,components}/hero-beranda.jpg"
          alt="Kelurahan Jagakarsa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl">
              Selamat Datang
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              Website Resmi Kelurahan Jagakarsa
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90 max-w-3xl">
              Sumber informasi terbaru tentang pemerintahan di Kelurahan Jagakarsa
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => {
              const element = document.getElementById('tentang')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-secondary hover:bg-orange-600 text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-3xl flex items-center gap-2 sm:gap-3 transition-all transform hover:scale-105 text-sm sm:text-base md:text-2xl"
          >
            Lihat Beranda
            <ArrowRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

      </section>

      {/* About Content Section */}
      <section id="tentang" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-base sm:text-lg md:text-2xl text-black leading-relaxed space-y-4 sm:space-y-6">
            <p>
              Kelurahan Jagakarsa merupakan salah satu Kelurahan yang berada di Kecamatan Jagakarsa Kota Administrasi Jakarta Selatan yang memiliki{' '}
              <span className="font-bold">luas sebesar : {siteStats.luas}</span> serta mempunyai{' '}
              <span className="font-bold">{siteStats.rw} RW</span> dan <span className="font-bold">{siteStats.rt} RT</span>.
            </p>
            <p>
              Kelurahan Jagakarsa sebagai instansi pemerintah yang melayani masyarakat harus menjalankan fungsi dengan sebaik-baiknya. Karena standar organisasi dan kinerja Kelurahan telah diatur oleh Undang-undang serta peraturan yang ada. Untuk itu, sebagai pertanggungjawaban dari hasil kegiatan dan pelayanan yang dilakukan.
            </p>
          </div>
        </div>
      </section>

      {/* Boundaries Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-dark mb-8 sm:mb-12">Batas Wilayah Kelurahan</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Boundaries List */}
            <div className="space-y-6 sm:space-y-8">
              {boundaries.map((boundary, index) => (
                <div key={index}>
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mb-2">{boundary.direction} :</h3>
                  <p className="text-sm sm:text-base md:text-2xl font-semibold text-black">{boundary.areas}</p>
                </div>
              ))}

              {/* Map Button */}
              <button
                onClick={() => {
                  if (setCurrentPage) {
                    setCurrentPage('map')
                    window.scrollTo(0, 0)
                  }
                }}
                className="mt-6 sm:mt-8 bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center gap-2 sm:gap-3 transition-all transform hover:scale-105 text-sm sm:text-base md:text-2xl"
              >
                <MapPin size={20} className="sm:w-7 sm:h-7" />
                Lihat di Maps
              </button>
            </div>

            {/* Map Image */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-3xl shadow-lg overflow-hidden">
                <img
                  src="/images/{hero,news,maps,achievements,components}/map-kelurahan-jagakarsa.png"
                  alt="Peta Kelurahan Jagakarsa"
                  className="w-full h-48 sm:h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-8 sm:mb-12">Prestasi Kelurahan Jagakarsa</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden border-2 border-black">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base md:text-2xl font-semibold text-black">{achievement.type}</p>
                  <h3 className="text-sm sm:text-base md:text-2xl font-semibold text-black line-clamp-2">
                    {achievement.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xl text-gray-600">{achievement.date}</p>

                  {/* Action Button */}
                  <button 
                    onClick={() => alert(`${achievement.title}\n\n${achievement.description}`)}
                    className="w-full bg-primary-light hover:bg-primary-dark text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all transform hover:scale-105 text-xs sm:text-sm md:text-2xl cursor-pointer"
                  >
                    {achievement.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
