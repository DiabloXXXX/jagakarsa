import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Boundaries from './components/Boundaries'
import Achievements from './components/Achievements'
import Services from './components/Services'
import FloodInfo from './components/FloodInfo'
import Chatbot from './components/Chatbot'
import VisitorStats from './components/VisitorStats'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import MapPage from './pages/MapPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import VisionMissionPage from './pages/VisionMissionPage'
import TasksPage from './pages/TasksPage'
import OrganizationStructurePage from './pages/OrganizationStructurePage'
import CommunityOrganizationsPage from './pages/CommunityOrganizationsPage'
import NewsPage from './pages/NewsPage'
import FloodProneAreasPage from './pages/FloodProneAreasPage'
import ServicesInfoPage from './pages/ServicesInfoPage'
import BerandaPage from './pages/BerandaPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import PJLPPage from './pages/PJLPPage'

function App() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedService, setSelectedService] = useState('ppsu')
  const [isAdmin, setIsAdmin] = useState(false)

  // Handle URL routes
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/admin') {
      setCurrentPage('admin-login')
    }
  }, [])

  const handleOpenChatbot = () => {
    setShowChatbot(true)
  }

  const renderPage = () => {
    // Admin pages
    if (currentPage === 'admin-login' || currentPage === 'admin') {
      if (isAdmin) {
        return <AdminDashboardPage setCurrentPage={setCurrentPage} setIsAdmin={setIsAdmin} />
      }
      return <AdminLoginPage setCurrentPage={setCurrentPage} setIsAdmin={setIsAdmin} />
    }
    if (currentPage === 'admin-dashboard') {
      if (!isAdmin) {
        return <AdminLoginPage setCurrentPage={setCurrentPage} setIsAdmin={setIsAdmin} />
      }
      return <AdminDashboardPage setCurrentPage={setCurrentPage} setIsAdmin={setIsAdmin} />
    }

    // Regular pages
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'map':
        return <MapPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'vision-mission':
        return <VisionMissionPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'tasks':
        return <TasksPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'organization':
        return <OrganizationStructurePage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'pjlp':
        return <PJLPPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'community-orgs':
        return <CommunityOrganizationsPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'news':
        return <NewsPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'flood-areas':
        return <FloodProneAreasPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'services-info':
        return <ServicesInfoPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
      case 'service':
        return <ServiceDetailPage setCurrentPage={setCurrentPage} serviceType={selectedService} onOpenChatbot={handleOpenChatbot} />
      case 'home':
      default:
        return <BerandaPage setCurrentPage={setCurrentPage} onOpenChatbot={handleOpenChatbot} />
    }
  }

  const isAdminPage = currentPage === 'admin-login' || currentPage === 'admin-dashboard' || currentPage === 'admin'

  return (
    <div>
      {renderPage()}

      {/* Hanya tampilkan chatbot & statistik di halaman publik */}
      {!isAdminPage && (
        <>
          <Chatbot isOpen={showChatbot} setIsOpen={setShowChatbot} />
          <VisitorStats />

          {/* Floating Chatbot Button */}
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-6 right-6 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full shadow-lg flex items-center justify-center hover:opacity-80 transition-all z-40"
            title="Buka Chatbot"
          >
            <img
              src="/images/{hero,news,maps,achievements,components}/FAQ.png"
              alt="Buka Chatbot"
              className="w-full h-full object-contain"
            />
          </button>
        </>
      )}
    </div>
  )
}

export default App
