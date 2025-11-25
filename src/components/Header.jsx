import React, { useState } from 'react'
import { ChevronDown, MapPin, Menu, X } from 'lucide-react'

export default function Header({ setCurrentPage, onOpenChatbot }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page)
      window.scrollTo(0, 0)
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden sm:flex bg-primary-dark text-white h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-end">
          <div className="flex items-center gap-3 text-base sm:text-xl font-semibold cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('home')}>
            <MapPin size={24} />
            <span>Kantor Kelurahan Jagakarsa</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary-light text-white flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-0 sm:h-24">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('home')}>
            <img
              src="/images/{hero,news,maps,achievements,components}/logo.png"
              alt="Kelurahan Jagakarsa Logo"
              className="w-12 sm:w-20 h-12 sm:h-20 object-contain flex-shrink-0"
            />
            <span className="hidden sm:inline text-2xl lg:text-3xl font-bold">Kelurahan Jagakarsa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <button onClick={() => handleNavClick('home')} className="text-xl lg:text-2xl font-bold hover:text-white transition-colors">Beranda</button>
            
            {/* Profil Dropdown */}
            <div className="relative group">
              <button className="text-xl lg:text-2xl font-bold hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                Profil
                <ChevronDown size={20} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-primary-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={() => handleNavClick('about')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold text-base">Tentang Kelurahan</button>
                <button onClick={() => handleNavClick('vision-mission')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold border-t text-base">Visi & Misi</button>
                <button onClick={() => handleNavClick('organization')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold border-t text-base">Struktur Organisasi</button>
                <button onClick={() => handleNavClick('tasks')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold border-t text-base">Tugas & Fungsi</button>
              </div>
            </div>

            <button onClick={() => handleNavClick('community-orgs')} className="text-xl lg:text-2xl font-bold hover:text-white transition-colors">Lembaga</button>
            <button onClick={() => handleNavClick('services-info')} className="text-xl lg:text-2xl font-bold hover:text-white transition-colors">Layanan</button>

            {/* Informasi Dropdown */}
            <div className="relative group">
              <button className="text-xl lg:text-2xl font-bold hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                Informasi
                <ChevronDown size={20} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-primary-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={() => handleNavClick('news')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold text-base">Berita</button>
                <button onClick={() => handleNavClick('flood-areas')} className="w-full text-left px-4 py-3 hover:bg-primary-lighter font-semibold border-t text-base">Area Rawan Banjir</button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-light text-white border-t-2 border-secondary">
          <nav className="flex flex-col p-4 space-y-2">
            <button onClick={() => handleNavClick('home')} className="text-left px-4 py-3 hover:bg-primary-dark rounded-lg font-bold text-xl">Beranda</button>
            
            {/* Mobile Profil Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('profil')}
                className="w-full text-left px-4 py-3 hover:bg-primary-dark rounded-lg font-bold text-xl flex items-center justify-between"
              >
                Profil
                <ChevronDown size={20} className={`transform transition-transform ${openDropdown === 'profil' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'profil' && (
                <div className="bg-primary-dark rounded-lg ml-4 mt-2 space-y-2">
                  <button onClick={() => handleNavClick('about')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Tentang Kelurahan</button>
                  <button onClick={() => handleNavClick('vision-mission')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Visi & Misi</button>
                  <button onClick={() => handleNavClick('organization')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Struktur Organisasi</button>
                  <button onClick={() => handleNavClick('tasks')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Tugas & Fungsi</button>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('community-orgs')} className="text-left px-4 py-3 hover:bg-primary-dark rounded-lg font-bold text-xl">Lembaga Kemasyarakatan</button>
            <button onClick={() => handleNavClick('services-info')} className="text-left px-4 py-3 hover:bg-primary-dark rounded-lg font-bold text-xl">Layanan</button>

            {/* Mobile Informasi Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('informasi')}
                className="w-full text-left px-4 py-3 hover:bg-primary-dark rounded-lg font-bold text-xl flex items-center justify-between"
              >
                Informasi
                <ChevronDown size={20} className={`transform transition-transform ${openDropdown === 'informasi' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'informasi' && (
                <div className="bg-primary-dark rounded-lg ml-4 mt-2 space-y-2">
                  <button onClick={() => handleNavClick('news')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Berita</button>
                  <button onClick={() => handleNavClick('flood-areas')} className="w-full text-left px-4 py-2 hover:bg-primary-lighter rounded font-semibold text-base">Area Rawan Banjir</button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Accent Bar */}
      <div className="h-3.5 bg-secondary"></div>
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-2xl font-semibold hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}
