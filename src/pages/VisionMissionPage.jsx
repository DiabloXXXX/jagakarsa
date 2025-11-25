import React from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function VisionMissionPage({ setCurrentPage, onOpenChatbot }) {
  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('home')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-primary-lighter">
      <Header setCurrentPage={setCurrentPage} onOpenChatbot={onOpenChatbot} currentPage="vision-mission" />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-primary-lighter mt-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Vision Section */}
          <div className="mb-12">
            <div className="bg-yellow-100 rounded-3xl shadow-lg p-8 md:p-12 border-4 border-yellow-200">
              <div className="flex items-start gap-8">
                {/* Arrow Icons */}
                <div className="flex gap-2 flex-shrink-0 pt-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <ChevronRight size={20} className="text-white" />
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary-dark mb-6">Visi</h2>
                  <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                    Jakarta baru, Kota Modern yang tertata rapih, menjadi tempat hunian yang dan manusiawi, memiliki masyarakat yang berkebudayaan, dan dengan pemerintahan yang berorientasi pada pelayanan publik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-blue-50 rounded-3xl shadow-lg p-8 md:p-12 border-4 border-blue-200">
              <div className="flex items-start gap-8">
                {/* Arrow Icons */}
                <div className="flex gap-2 flex-shrink-0 pt-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <ChevronRight size={20} className="text-white" />
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary-dark mb-8">Misi</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                        Sebagai kota modern yang tertata rapih serta konsisten dengan rencana tata ruang wilayah.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                        Menjamin ketersediaan hunian dan ruang publik yang layak serta terjangkau bagi warga kota.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                        Membangun budaya masyarakat perkotaan yang toleran, tetapi juga sekaligus memiliki kesadaran dalam memelihara Wilayah/lingkungan.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary-dark rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                        Membangun pemerintahan yang bersih dan transparan serta berorientasi pada pelayanan publik.
                      </p>
                    </div>
                  </div>
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
