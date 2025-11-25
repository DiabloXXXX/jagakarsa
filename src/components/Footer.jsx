import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, TrendingUp } from 'lucide-react'
import { socialLinks, visitorStats } from '../config/siteConfig'

export default function Footer() {
  const [todayVisits, setTodayVisits] = useState(0)
  const [showVisitorStats, setShowVisitorStats] = useState(false)

  // Placeholder visitor statistics data
  const visitorBreakdown = {
    today: 13,
    yesterday: 22,
    thisWeek: 205,
    lastWeek: 246,
    thisMonth: 735,
    lastMonth: 1849,
    total: 13701
  }

  useEffect(() => {
    // Get today's visit count from localStorage
    const today = new Date().toDateString()
    const lastDate = localStorage.getItem('lastVisitDate')
    
    let visits = parseInt(localStorage.getItem('todayVisits') || '0')
    
    // Reset if it's a new day
    if (lastDate !== today) {
      visits = 1
      localStorage.setItem('lastVisitDate', today)
    } else {
      visits += 1
    }
    
    localStorage.setItem('todayVisits', visits.toString())
    setTodayVisits(visits)
  }, [])
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Logo Section */}
            <div>
              <img
                src="/images/{hero,news,maps,achievements,components}/logo.png"
                alt="Kelurahan Jagakarsa Logo"
                className="w-56 h-56 object-contain mb-8"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Kelurahan Jagakarsa</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={28} className="text-white flex-shrink-0 mt-1" />
                  <p className="text-2xl font-semibold text-white leading-relaxed">
                    Jl. Jagakarsa II No.1, RT.1/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Hubungi Kami</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Phone size={28} className="text-white flex-shrink-0" />
                  <p className="text-2xl font-semibold text-white">021-7270954</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={28} className="text-white flex-shrink-0" />
                  <p className="text-2xl font-semibold text-white">kel_jagakrsa@jakarta.go.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Visitor Stats Section */}
          <div className="mt-20 pt-12 border-t border-primary-light">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Ikuti Kami</h3>
                <p className="text-xl font-semibold text-white mb-8">
                  Kenali kami lebih dekat lewat media sosial berikut
                </p>
                <div className="flex gap-6">
                  <SocialLink icon={<Facebook size={32} />} href={socialLinks.facebook} label="Facebook" />
                  <SocialLink icon={<Youtube size={32} />} href={socialLinks.youtube} label="YouTube" />
                  <SocialLink icon={<Instagram size={32} />} href={socialLinks.instagram} label="Instagram" />
                  <SocialLink icon={<TrendingUp size={32} />} href={socialLinks.tiktok} label="TikTok" />
                </div>
              </div>

              {/* Visitor Statistics */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Statistik Pengunjung</h3>
                <div className="space-y-6">
                  {/* Today's Visits - Main Display */}
                  <button 
                    onClick={() => setShowVisitorStats(!showVisitorStats)}
                    className="w-full bg-gradient-to-br from-secondary to-orange-500 rounded-lg p-6 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer group text-left"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <TrendingUp size={28} className="text-white group-hover:scale-110 transition-transform" />
                      <p className="text-lg font-semibold text-white">Kunjungan Hari Ini</p>
                    </div>
                    <p className="text-4xl font-bold text-white">{visitorBreakdown.today}</p>
                    <p className="text-sm text-white/80 mt-2">Klik untuk lihat detail</p>
                  </button>

                  {/* Visitor Stats Modal */}
                  {showVisitorStats && (
                    <div className="bg-gray-900/95 border border-secondary rounded-lg p-6 backdrop-blur-sm space-y-4 animate-fadeIn">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp size={20} className="text-secondary" />
                        Jumlah Kunjungan
                      </h4>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Hari Ini</span>
                          <span className="font-bold text-secondary text-lg">{visitorBreakdown.today}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Kemarin</span>
                          <span className="font-bold text-white text-lg">{visitorBreakdown.yesterday}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Minggu Ini</span>
                          <span className="font-bold text-white text-lg">{visitorBreakdown.thisWeek}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Minggu Lalu</span>
                          <span className="font-bold text-white text-lg">{visitorBreakdown.lastWeek}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Bulan Ini</span>
                          <span className="font-bold text-white text-lg">{visitorBreakdown.thisMonth}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-white">Bulan Lalu</span>
                          <span className="font-bold text-white text-lg">{visitorBreakdown.lastMonth}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 bg-secondary/20 px-3 py-2 rounded">
                          <span className="text-white font-semibold">Total Kunjungan</span>
                          <span className="font-bold text-secondary text-lg">{visitorBreakdown.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      title={label}
      className="w-10 h-10 bg-white text-primary-dark rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-secondary"
    >
      {icon}
    </a>
  )
}
