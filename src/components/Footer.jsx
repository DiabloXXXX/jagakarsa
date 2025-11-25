import React from 'react'
import { MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react'
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
                  <SocialLink icon={<TikTokIcon size={24} />} href={socialLinks.tiktok} label="TikTok" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function TikTokIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official TikTok logo from Ionicons */}
      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
    </svg>
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
