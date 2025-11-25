import React, { useState } from 'react'
import { ArrowLeft, ChevronDown, X } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TasksPage({ setCurrentPage, onOpenChatbot }) {
  const [expandedTask, setExpandedTask] = useState(null)
  const [fullViewTask, setFullViewTask] = useState(null)

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  const tasks = [
    {
      id: 1,
      title: 'Tugas Seorang Lurah',
      shortDescription: 'Memimpin dan mengoordinasikan pelaksanaan tugas dan fungsi Kelurahan. Melaksanakan kegiatan pemerintahan.....',
      fullDescription: [
        'Memimpin dan mengoordinasikan pelaksanaan tugas dan fungsi Kelurahan.',
        'Melaksanakan kegiatan pemerintahan yang menjadi tanggung jawab Kelurahan.',
        'Membina dan mengawasi pelaksanaan tugas perangkat Kelurahan.',
        'Menjalin hubungan kerja dengan instansi lain dan masyarakat.',
        'Mempertanggungjawabkan pelaksanaan tugas kepada Camat.'
      ]
    },
    {
      id: 2,
      title: 'Tugas Seorang Sekretariat Kelurahan',
      shortDescription: 'Pengoordinasian perumusan proses bisnis, standar, dan prosedur Kelurahan. Pengelolaan program dan anggaran, kepegawaian......',
      fullDescription: [
        'Pengoordinasian perumusan proses bisnis, standar, dan prosedur Kelurahan.',
        'Pengelolaan program dan anggaran Kelurahan.',
        'Pengelolaan kepegawaian dan administrasi.',
        'Pengelolaan barang dan aset Kelurahan.',
        'Pengelolaan arsip dan dokumentasi.',
        'Penyiapan laporan dan pertanggungjawaban Lurah.'
      ]
    },
    {
      id: 3,
      title: 'Tugas Seorang Seksi Pemerintahan',
      shortDescription: 'Melaksanakan pembinaan dan pengoordinasian rukun warga dan rukun tetangga. Melaksanakan pembinaan, pengoordinasian.....',
      fullDescription: [
        'Melaksanakan pembinaan dan pengoordinasian rukun warga dan rukun tetangga.',
        'Melaksanakan pembinaan, pengoordinasian, dan pengawasan penyelenggaraan pemerintahan desa.',
        'Melaksanakan pembinaan dan pengoordinasian lembaga kemasyarakatan.',
        'Melaksanakan pembinaan dan pengawasan ketentraman dan ketertiban.',
        'Melaksanakan pembinaan dan pengawasan penyelenggaraan kegiatan kemasyarakatan.'
      ]
    },
    {
      id: 4,
      title: 'Tugas Seorang Seksi Ekonomi dan Pembangunan',
      shortDescription: 'Melaksanakan pengoordinasian, pemantauan dan evaluasi pelaksanaan urusan bidang perekonomian dan pembangunan.....',
      fullDescription: [
        'Melaksanakan pengoordinasian, pemantauan dan evaluasi pelaksanaan urusan bidang perekonomian.',
        'Melaksanakan pengoordinasian, pemantauan dan evaluasi pelaksanaan urusan bidang pembangunan.',
        'Melaksanakan pembinaan terhadap usaha ekonomi masyarakat.',
        'Melaksanakan pembinaan terhadap kegiatan pembangunan masyarakat.',
        'Melaksanakan pembinaan terhadap kegiatan pertanian, peternakan, dan perikanan.'
      ]
    },
    {
      id: 5,
      title: 'Tugas Seorang Seksi Kesejahteraan Rakyat',
      shortDescription: 'Melaksanakan pengoordinasian, pemantauan dan evaluasi pelaksanaan urusan bidang kesejahteraan....',
      fullDescription: [
        'Melaksanakan pengoordinasian, pemantauan dan evaluasi pelaksanaan urusan bidang kesejahteraan rakyat di wilayah Kelurahan, antara lain pendidikan, kesehatan, pemberdayaan perempuan dan perlindungan anak, pemberdayaan masyarakat dan desa, pengendalian penduduk dan keluarga berencana, kebudayaan, sosial, perpustakaan, kearsipan, kepemudaan dan olahraga.',
        'Melaksanakan pengoordinasian dan pendataan, bidang kesejahteraan rakyat di wilayah Kelurahan, antara lain permasalahan kesejahteraan sosial, permasalahan kesehatan masyarakat, potensi dan/atau terjadi kejadian yang luar biasa.',
        'Memfasilitasi pelaksanaan urusan bidang kesejahteraan rakyat di tingkat Kelurahan.',
        'Melaksanakan pengoordinasian dengan UKPD yang menyelenggarakan urusan bidang kesejahteraan rakyat di wilayah Kelurahan.',
        'Melaksanakan pengoordinasian, pelaksanaan, pengembangan, pemantauan dan evaluasi pelaksanaan kegiatan mental spiritual di wilayah Kelurahan.',
        'Melaksanakan pengoordinasian dan pembinaan lembaga dan/atau organisasi masyarakat bidang Kesejahteraan Rakyat tingkat Kelurahan, seperti Pemberdayaan dan Kesejahteraan Keluarga Kelurahan dan Karang Taruna Kelurahan.',
        'Melaksanakan pengoordinasian penanganan pengaduan masyarakat bidang kesejahteraan rakyat tingkat Kelurahan.',
        'Memfasilitasi pelaksanaan kegiatan awal surveilans/investigasi kasus penyakit menular di wilayah Kelurahan.',
        'Melaksanakan pengoordinasian pelaksanaan pendataan, verifikasi dan validasi data fakir miskin dan orang tidak mampu.',
        'Melaksanakan pelaksanaan kegiatan pemberdayaan masyarakat dalam bentuk kegiatan fisik dan sosial.',
        'Melaksanakan pelaksanaan fasilitasi, bimbingan dan konsultasi pengembangan kegiatan sosial kemasyarakatan, kesetiakawanan sosial, peduli sesama, gotong royong.',
        'Memfasilitasi pelaksanaan pengawasan jam belajar malam pada masyarakat serta Pemantauan Anak Putus Sekolah dan penerima manfaat Kartu Jakarta Pintar.',
        'Memfasilitasi pembinaan penyelenggaraan Pendidikan Anak Usia Dini dan Pusat Kegiatan Belajar Masyarakat.',
        'Memfasilitasi pelaksanaan Gerakan Masyarakat Hidup Sehat, Pos Pelayanan Terpadu dan pemantauan jentik nyamuk.',
        'Memfasilitasi penyelenggaraan pos pembinaan terpadu, Perilaku Hidup Bersih dan Sehat serta Rukun Warga siaga.',
        'Memfasilitasi pencegahan penyebaran kasus penyakit berpotensi wabah dan Kejadian Luar Biasa.',
        'Memfasilitasi pengelolaan Ruang Publik Terpadu Ramah Anak, sesuai lingkup tugasnya.',
        'Melaksanakan pengelolaan data dan informasi sesuai lingkup tugasnya.'
      ]
    }
  ]

  const toggleExpand = (id) => {
    setExpandedTask(expandedTask === id ? null : id)
  }

  const toggleFullView = (id) => {
    setFullViewTask(fullViewTask === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-primary-lighter">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-primary-lighter mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-primary-dark mb-8">TUGAS</h1>
            <h2 className="text-3xl font-bold text-black">
              Peran dari masing-masing unsur perangkat kelurahan
            </h2>
          </div>

          {/* Tasks List */}
          <div className="space-y-6 mb-16">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-lg border border-gray-400 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleExpand(task.id)}
                  className="w-full p-8 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-black mb-4">
                        {task.title}
                      </h3>
                      <p className="text-2xl font-semibold text-black leading-relaxed">
                        {task.shortDescription}
                      </p>
                    </div>
                    <ChevronDown
                      size={32}
                      className={`text-primary-dark flex-shrink-0 transition-transform ${
                        expandedTask === task.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedTask === task.id && (
                  <div className="px-8 pb-8 bg-gray-50 border-t border-gray-200">
                    <div className="space-y-4 mb-6">
                      {task.fullDescription.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <span className="text-primary-dark font-bold text-xl flex-shrink-0">
                            {index + 1}.
                          </span>
                          <p className="text-2xl font-semibold text-black leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    {task.id === 5 && (
                      <button
                        onClick={() => toggleFullView(task.id)}
                        className="text-sky-700 text-2xl font-semibold underline hover:text-sky-900 transition-colors"
                      >
                        Baca Selengkapnya
                      </button>
                    )}
                  </div>
                )}
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

      {/* Full View Modal for Task 5 */}
      {fullViewTask === 5 && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => toggleFullView(null)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-8 flex items-center justify-between">
                <h3 className="text-4xl font-bold text-black">
                  {tasks[4].title}
                </h3>
                <button
                  onClick={() => toggleFullView(null)}
                  className="text-sky-700 text-2xl font-semibold underline hover:text-sky-900 transition-colors"
                >
                  Tutup
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {tasks[4].fullDescription.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-primary-dark font-bold text-xl flex-shrink-0">
                        {index + 1}.
                      </span>
                      <p className="text-2xl font-semibold text-black leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}
