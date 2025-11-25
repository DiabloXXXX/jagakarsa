import React from 'react'
import { Award, FileText, Video } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: <FileText size={32} />,
      title: 'Inisiator dari Inovasi Pengolahan Sampah Organik',
      date: '8 September 2025',
      description: 'Program inovatif pengolahan sampah organik untuk keberlanjutan lingkungan',
      link: 'Lihat Selengkapnya'
    },
    {
      icon: <Award size={32} />,
      title: 'Pengalahan Sampah Organik',
      date: '8 September 2025',
      description: 'Prestasi dalam pengelolaan sampah organik dan program keberlanjutan',
      link: 'Lihat Presentasi'
    },
    {
      icon: <Video size={32} />,
      title: 'Kualitas Inovasi Daerah',
      date: '8 September 2025',
      description: 'Video dokumentasi inovasi dan pencapaian kelurahan',
      link: 'Lihat Video'
    }
  ]

  return (
    <section id="prestasi" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Prestasi Kelurahan Jagakarsa
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-lighter to-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden border border-primary-light hover:border-primary-dark"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="bg-primary-light text-white p-4 rounded-lg w-fit mb-6">
                  {achievement.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-4">
                  {achievement.date}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {achievement.description}
                </p>

                {/* Link */}
                <button className="text-primary-dark font-semibold hover:text-primary-light transition-colors flex items-center gap-2 cursor-pointer">
                  {achievement.link}
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
