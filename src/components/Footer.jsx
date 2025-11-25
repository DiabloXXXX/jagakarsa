import React from 'react'
import { MapPin, Phone, Mail, Youtube, Instagram, Music } from 'lucide-react'
import { socialLinks } from '../config/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/{hero,news,maps,achievements,components}/logo.png"
                alt="Kelurahan Jagakarsa Logo"
                className="w-24 sm:w-40 md:w-56 h-24 sm:h-40 md:h-56 object-contain"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Kelurahan Jagakarsa</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-2 sm:gap-4">
                  <MapPin size={20} className="text-white flex-shrink-0 mt-1 sm:mt-1 md:w-7 md:h-7" />
                  <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white leading-relaxed">
                    Jl. Jagakarsa II No.1, RT.1/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Hubungi Kami</h3>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-center gap-2 sm:gap-4">
                  <Phone size={20} className="text-white flex-shrink-0 sm:w-7 sm:h-7 md:w-7 md:h-7" />
                  <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white">021-7270954</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Mail size={20} className="text-white flex-shrink-0 sm:w-7 sm:h-7 md:w-7 md:h-7" />
                  <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white break-all">kel_jagakrsa@jakarta.go.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Visitor Stats Section */}
          <div className="mt-8 sm:mt-16 md:mt-20 pt-6 sm:pt-10 md:pt-12 border-t border-primary-light">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
              {/* Social Media */}
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Ikuti Kami</h3>
                <p className="text-xs sm:text-base md:text-xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
                  Kenali kami lebih dekat lewat media sosial berikut
                </p>
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <SocialLink icon={<Youtube size={24} />} href={socialLinks.youtube} label="YouTube" />
                  <SocialLink icon={<Instagram size={24} />} href={socialLinks.instagram} label="Instagram" />
                  <SocialLink icon={<Music size={24} />} href={socialLinks.tiktok} label="TikTok" />
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
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white text-primary-dark rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:bg-secondary"
    >
      {icon}
    </a>
  )
}
