import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, TrendingUp } from 'lucide-react'
import { socialLinks, visitorStats } from '../config/siteConfig'

export default function Footer() {
  const [deviceVisits, setDeviceVisits] = useState(0)

  useEffect(() => {
    // Get visit count from localStorage
    const visits = parseInt(localStorage.getItem('deviceVisits') || '0') + 1
    localStorage.setItem('deviceVisits', visits.toString())
    setDeviceVisits(visits)
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
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <TrendingUp size={28} className="text-secondary" />
                      <p className="text-lg font-semibold text-white">Total Pengunjung</p>
                    </div>
                    <p className="text-3xl font-bold text-secondary">{visitorStats.totalVisitors}</p>
                    <p className="text-sm text-white/70 mt-2">Update: {visitorStats.lastUpdate}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-lg font-semibold text-white mb-2">Kunjungan Perangkat Anda</p>
                    <p className="text-3xl font-bold text-secondary">{deviceVisits}</p>
                    <p className="text-sm text-white/70 mt-2">Disimpan di perangkat ini</p>
                  </div>
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
