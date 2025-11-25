import React from 'react'
import { ArrowLeft, Users } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CommunityOrganizationsPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const organizations = [
    {
      id: 1,
      title: 'Pengelola RPTRA',
      description: 'Tim yang bertugas mengelola dan merawat RPTRA (Ruang Publik Terpadu Ramah Anak)',
      members: 11,
      color: 'bg-primary-light'
    },
    {
      id: 2,
      title: 'FKDM (Forum Kewaspadaan Dini Masyarakat)',
      description: 'Lembaga ini berperan sebagai mata dan telinga masyarakat untuk mendeteksi secara dini potensi gangguan keamanan, ketertiban, atau konflik sosial di wilayah kelurahan.',
      members: 7,
      color: 'bg-primary-light'
    },
    {
      id: 3,
      title: 'LMK (Lembaga Musyawarah Kelurahan)',
      description: 'Lembaga kemasyarakatan resmi yang berfungsi sebagai wadah aspirasi warga serta mitra Lurah dalam menyusun dan melaksanakan pembangunan di tingkat kelurahan.',
      members: 7,
      color: 'bg-primary-light'
    },
    {
      id: 4,
      title: 'RW (Rukun Warga)',
      description: 'Lembaga kemasyarakatan tingkat kelurahan yang menjadi penghubung antara pemerintah kelurahan dan masyarakat di lingkungan beberapa RT (Rukun Tetangga).',
      members: 7,
      color: 'bg-primary-light'
    },
    {
      id: 5,
      title: 'RT (Rukun Tetangga)',
      description: 'Organisasi masyarakat yang berada di bawah RW (Rukun Warga) dan berfungsi untuk membantu pelaksanaan urusan pemerintahan, pelayanan masyarakat, serta menjaga ketertiban dan kebersamaan di lingkungan kecil (biasanya satu blok atau beberapa rumah).',
      members: 83,
      color: 'bg-primary-light'
    },
    {
      id: 6,
      title: 'PKK Kelurahan',
      description: 'Lembaga kemasyarakatan yang berperan dalam meningkatkan kesejahteraan keluarga melalui berbagai kegiatan sosial, ekonomi, dan pendidikan masyarakat.',
      members: 12,
      color: 'bg-primary-light'
    },
    {
      id: 7,
      title: 'Jumantik (Juru Pemantau Jentik)',
      description: 'Petugas atau kader masyarakat yang bertugas memantau, mencegah, dan mengendalikan jentik nyamuk Aedes aegypti, penyebab penyakit Demam Berdarah Dengue (DBD).',
      members: 89,
      color: 'bg-primary-light'
    },
    {
      id: 8,
      title: 'Dasawisma',
      description: 'Dasawisma berasal dari kata "Dasa" (sepuluh) dan "Wisma" (rumah). Artinya, Dasawisma adalah kelompok kecil dari rumah tangga yang bergotong royong menjalankan kegiatan sosial, ekonomi, dan lingkungan di bawah pembinaan PKK.',
      members: 613,
      color: 'bg-primary-light'
    },
    {
      id: 9,
      title: 'Posyandu Balita',
      description: 'Kegiatan pelayanan kesehatan yang ditujukan bagi anak usia di bawah lima tahun (balita).',
      subtitle: '(Pos Pelayanan Terpadu untuk Balita)',
      count: 36,
      countLabel: 'Total Posyandu',
      color: 'bg-primary-light'
    },
    {
      id: 10,
      title: 'Posyandu Lansia',
      description: 'Pelayanan kesehatan bagi warga lanjut usia (60 tahun ke atas).',
      subtitle: '(Pos Pelayanan Terpadu Lanjut Usia)',
      count: 7,
      countLabel: 'Total Posyandu',
      color: 'bg-primary-light'
    }
  ]

  return (
    <div className="min-h-screen bg-primary-lighter">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-primary-lighter mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-primary-dark mb-8">LEMBAGA KEMASYARAKATAN</h1>
            <p className="text-3xl font-bold text-black max-w-4xl mx-auto">
              Wadah partisipasi masyarakat dalam penyelenggaraan pemerintahan, pembangunan, dan kemasyarakatan di tingkat kelurahan.
            </p>
          </div>

          {/* Organizations Grid */}
          <div className="space-y-8 mb-16">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="bg-white rounded-lg border border-gray-400 overflow-hidden hover:shadow-lg transition-shadow p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-primary-dark mb-4">
                      {org.title}
                    </h3>
                    {org.subtitle && (
                      <p className="text-lg text-gray-600 mb-4">{org.subtitle}</p>
                    )}
                    <p className="text-2xl font-semibold text-black leading-relaxed mb-6">
                      {org.description}
                    </p>

                    {/* Member Count */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users size={28} className="text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary-dark">
                          {org.countLabel || 'Total Anggota'}:
                        </p>
                        <p className="text-4xl font-semibold text-black">
                          {org.members || org.count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg p-12 mb-16 border-2 border-primary-light">
            <h3 className="text-3xl font-bold text-primary-dark mb-8">Ringkasan Lembaga Kemasyarakatan</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-6 bg-primary-dark rounded"></div>
                  <p className="text-xl font-semibold text-black">Lembaga Pemerintahan: 5 (RW, RT, LMK, FKDM, Pengelola RPTRA)</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-6 bg-primary-light rounded"></div>
                  <p className="text-xl font-semibold text-black">Lembaga Sosial & Kesehatan: 5 (PKK, Jumantik, Dasawisma, Posyandu Balita, Posyandu Lansia)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary-lighter p-6 rounded-lg">
                  <p className="text-lg font-semibold text-primary-dark mb-2">Total Organisasi</p>
                  <p className="text-4xl font-bold text-black">10</p>
                </div>
                <div className="bg-primary-light p-6 rounded-lg">
                  <p className="text-lg font-semibold text-white mb-2">Total Anggota Aktif</p>
                  <p className="text-4xl font-bold text-white">1,000+</p>
                </div>
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
