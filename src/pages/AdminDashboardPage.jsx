import React, { useState } from 'react'
import { LogOut, Edit, Trash2, Plus, Search, TrendingUp, Settings } from 'lucide-react'
import { visitorStats, headerConfig } from '../config/siteConfig'

export default function AdminDashboardPage({ setCurrentPage, setIsAdmin }) {
  const [activeSection, setActiveSection] = useState('pages')
  const [searchQuery, setSearchQuery] = useState('')
  const [pages, setPages] = useState([
    { id: 1, name: 'Beranda', section: 'Hero & About', lastUpdated: '1 minggu yang lalu', status: 'published' },
    { id: 2, name: 'Tentang Kelurahan', section: 'About & Boundaries', lastUpdated: '2 minggu yang lalu', status: 'published' },
    { id: 3, name: 'Visi & Misi', section: 'Vision & Mission', lastUpdated: '1 bulan yang lalu', status: 'published' },
    { id: 4, name: 'Struktur Organisasi', section: 'Organization Chart', lastUpdated: '3 minggu yang lalu', status: 'published' },
    { id: 5, name: 'Layanan', section: 'Services', lastUpdated: '1 minggu yang lalu', status: 'published' },
    { id: 6, name: 'Area Rawan Banjir', section: 'Flood Info', lastUpdated: '5 hari yang lalu', status: 'published' },
  ])
  const [berita, setBerita] = useState([
    { id: 1, title: 'Pelatihan Kesehatan Masyarakat', date: '20 November 2025', author: 'Admin', status: 'published' },
    { id: 2, title: 'Program Pembersihan Lingkungan', date: '15 November 2025', author: 'Admin', status: 'published' },
    { id: 3, title: 'Rapat Koordinasi Kelurahan', date: '10 November 2025', author: 'Admin', status: 'draft' },
  ])
  const [showAddBerita, setShowAddBerita] = useState(false)
  const [newBerita, setNewBerita] = useState({ title: '', content: '' })
  const [editingPage, setEditingPage] = useState(null)
  const [editContent, setEditContent] = useState({
    isi: '',
    utara: '',
    selatan: '',
    timur: '',
    barat: ''
  })
  const [headerEdit, setHeaderEdit] = useState(headerConfig)
  const [visitorEdit, setVisitorEdit] = useState(visitorStats)

  const handleLogout = () => {
    setIsAdmin(false)
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  const handleEditPage = (pageId) => {
    const page = pages.find(p => p.id === pageId)
    if (page) {
      setEditingPage(page)
      setEditContent({
        isi: 'Konten halaman ' + page.name,
        utara: 'Kelurahan Ragunan, Kelurahan Cilandak Timur dan Kelurahan Kebagusan.',
        selatan: 'Kelurahan Ciganjur dan Kelurahan Srenseng Sawah.',
        timur: 'Kelurahan Cilandak Barat dan Kelurahan Gandaria Utara.',
        barat: 'Kelurahan Mampang Prapatan dan Kelurahan Pancoran.'
      })
    }
  }

  const handleSaveEdit = () => {
    alert('Perubahan disimpan!')
    setEditingPage(null)
  }

  const handleDeletePage = (pageId) => {
    setPages(pages.filter(p => p.id !== pageId))
  }

  const handleAddBerita = () => {
    if (newBerita.title.trim() === '') {
      alert('Judul berita tidak boleh kosong')
      return
    }
    const beritaBaru = {
      id: Math.max(...berita.map(b => b.id), 0) + 1,
      title: newBerita.title,
      date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
      author: 'Admin',
      status: 'published'
    }
    setBerita([beritaBaru, ...berita])
    setNewBerita({ title: '', content: '' })
    setShowAddBerita(false)
  }

  const handleDeleteBerita = (beritaId) => {
    setBerita(berita.filter(b => b.id !== beritaId))
  }

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sidebarMenus = [
    { id: 'pages', label: 'Kelola Halaman', icon: '📄' },
    { id: 'berita', label: 'Kelola Berita', icon: '📰' },
    { id: 'settings', label: 'Pengaturan', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-primary-light text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/images/{hero,news,maps,achievements,components}/logo.png"
              alt="Kelurahan Jagakarsa Logo"
              className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold leading-tight">Admin Dashboard</h1>
              <p className="text-white text-xs sm:text-sm">Kelurahan Jagakarsa</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-white shadow-md md:shadow-lg border-b md:border-b-0 md:border-r border-gray-300">
          <nav className="px-3 py-3 md:p-6 flex md:block gap-2 md:gap-4 overflow-x-auto md:overflow-visible">
            {sidebarMenus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveSection(menu.id)}
                className={`flex-1 md:w-full whitespace-nowrap px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all ${
                  activeSection === menu.id
                    ? 'bg-primary-light text-white shadow-lg'
                    : 'bg-white text-primary-dark hover:bg-gray-100'
                }`}
              >
                <span className="mr-2 md:mr-3">{menu.icon}</span>
                {menu.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-4 md:p-8 bg-gray-100 overflow-y-auto">
          {activeSection === 'pages' && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-2">📄 Kelola Halaman</h2>
                <p className="text-sm md:text-base text-gray-600">Edit dan kelola halaman website Kelurahan Jagakarsa</p>
              </div>

              {/* Search Bar */}
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-4 text-gray-400" size={24} />
                  <input
                    type="text"
                    placeholder="Cari halaman..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                  />
                </div>
              </div>

              {/* Pages Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredPages.map((page) => (
                  <div
                    key={page.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-2 border-gray-200"
                  >
                    {/* Page Header */}
                    <div className="h-32 bg-gradient-to-r from-primary-light to-primary-dark"></div>

                    {/* Page Info */}
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-primary-dark mb-2">{page.name}</h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-2">{page.section}</p>
                      <p className="text-gray-500 text-[11px] md:text-xs mb-4">
                        Update: {page.lastUpdated}
                      </p>

                      {/* Status Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            page.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {page.status === 'published' ? '✓ Dipublikasikan' : '⚠ Draft'}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => handleEditPage(page.id)}
                          className="flex-1 bg-primary-light hover:bg-primary-dark text-white font-semibold py-2 px-3 md:px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Edit size={16} />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePage(page.id)}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 md:px-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Trash2 size={16} />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPages.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border-2 border-gray-200">
                  <p className="text-gray-600 text-xl">Tidak ada halaman yang sesuai dengan pencarian</p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'berita' && (
            <div className="space-y-6 md:space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-2">📰 Kelola Berita</h2>
                <p className="text-sm md:text-base text-gray-600">Tambah, edit, dan hapus berita Kelurahan Jagakarsa</p>
              </div>

              {/* Add Berita Button */}
              <button
                onClick={() => setShowAddBerita(!showAddBerita)}
                className="flex items-center gap-2 bg-primary-light hover:bg-primary-dark text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base"
              >
                <Plus size={24} />
                Tambah Berita Baru
              </button>

              {/* Add Berita Form */}
              {showAddBerita && (
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-2 border-primary-light">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-4 md:mb-6">Tambah Berita Baru</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-base md:text-lg font-semibold text-primary-dark mb-2">Judul Berita</label>
                      <input
                        type="text"
                        value={newBerita.title}
                        onChange={(e) => setNewBerita({ ...newBerita, title: e.target.value })}
                        placeholder="Masukkan judul berita..."
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-sm md:text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-base md:text-lg font-semibold text-primary-dark mb-2">Konten Berita</label>
                      <textarea
                        value={newBerita.content}
                        onChange={(e) => setNewBerita({ ...newBerita, content: e.target.value })}
                        placeholder="Masukkan konten berita..."
                        rows="5"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-sm md:text-lg"
                      />
                    </div>
                    <div className="flex gap-2 md:gap-3">
                      <button
                        onClick={handleAddBerita}
                        className="flex-1 bg-primary-light hover:bg-primary-dark text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base"
                      >
                        Simpan Berita
                      </button>
                      <button
                        onClick={() => setShowAddBerita(false)}
                        className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all text-sm md:text-base"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Berita List */}
              <div className="space-y-3 md:space-y-4">
                {berita.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 md:p-6 border-2 border-gray-200 hover:border-primary-light transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-primary-dark mb-2">{item.title}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                          <span>📅 {item.date}</span>
                          <span>✍️ {item.author}</span>
                          <span className={`px-3 py-1 rounded-full font-semibold ${
                            item.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status === 'published' ? '✓ Dipublikasikan' : '⚠ Draft'}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => alert('Edit berita - Coming soon')}
                          className="bg-primary-light hover:bg-primary-dark text-white font-semibold py-2 px-3 md:px-4 rounded-lg transition-all text-sm md:text-base"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteBerita(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 md:px-4 rounded-lg transition-all text-sm md:text-base"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {berita.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border-2 border-gray-200">
                  <p className="text-gray-600 text-xl">Belum ada berita. Tambahkan berita baru!</p>
                </div>
              )}
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary-dark mb-2">⚙️ Pengaturan</h2>
                <p className="text-gray-600">Atur konfigurasi website Kelurahan Jagakarsa</p>
              </div>

              {/* Header Settings */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Settings size={28} className="text-primary-dark" />
                  <h3 className="text-2xl font-bold text-primary-dark">Pengaturan Header Beranda</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Judul Header</label>
                    <input
                      type="text"
                      value={headerEdit.title}
                      onChange={(e) => setHeaderEdit({ ...headerEdit, title: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Subjudul</label>
                    <textarea
                      value={headerEdit.subtitle}
                      onChange={(e) => setHeaderEdit({ ...headerEdit, subtitle: e.target.value })}
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Teks Tombol CTA</label>
                    <input
                      type="text"
                      value={headerEdit.ctaText}
                      onChange={(e) => setHeaderEdit({ ...headerEdit, ctaText: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                  </div>
                  <button
                    onClick={() => alert('Perubahan header disimpan! (Placeholder - butuh backend untuk persistent)')}
                    className="w-full bg-primary-light hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all text-lg"
                  >
                    Simpan Pengaturan Header
                  </button>
                </div>
              </div>

              {/* Visitor Statistics Settings */}
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp size={28} className="text-secondary" />
                  <h3 className="text-2xl font-bold text-primary-dark">Statistik Pengunjung</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Total Pengunjung (Manual)</label>
                    <input
                      type="text"
                      value={visitorEdit.totalVisitors}
                      onChange={(e) => setVisitorEdit({ ...visitorEdit, totalVisitors: e.target.value })}
                      placeholder="Contoh: 12,345"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">Angka ini ditampilkan di footer sebagai total pengunjung keseluruhan</p>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Pengunjung Bulanan</label>
                    <input
                      type="text"
                      value={visitorEdit.monthlyVisitors}
                      onChange={(e) => setVisitorEdit({ ...visitorEdit, monthlyVisitors: e.target.value })}
                      placeholder="Contoh: 2,150"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-primary-dark mb-3">Tanggal Update Terakhir</label>
                    <input
                      type="text"
                      value={visitorEdit.lastUpdate}
                      onChange={(e) => setVisitorEdit({ ...visitorEdit, lastUpdate: e.target.value })}
                      placeholder="Contoh: November 2025"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                    />
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      <strong>Catatan:</strong> Statistik pengunjung per-perangkat dihitung otomatis dari localStorage dan tidak dapat diubah di sini.
                    </p>
                    <p className="text-sm text-gray-600">
                      Untuk integrasi dengan backend atau Google Analytics yang sebenarnya, hubungi developer.
                    </p>
                  </div>
                  <button
                    onClick={() => alert('Statistik pengunjung diperbarui! (Placeholder - butuh backend untuk persistent)')}
                    className="w-full bg-secondary hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-all text-lg"
                  >
                    Perbarui Statistik
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Edit Page Modal */}
      {editingPage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 flex items-center gap-4">
              <button
                onClick={() => setEditingPage(null)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg transition-colors"
              >
                ← Kembali
              </button>
              <h2 className="text-2xl font-bold text-primary-dark">Edit: {editingPage.name}</h2>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Isi Field */}
              <div>
                <label className="block text-lg font-semibold text-primary-dark mb-3">Isi:</label>
                <textarea
                  value={editContent.isi}
                  onChange={(e) => setEditContent({ ...editContent, isi: e.target.value })}
                  placeholder="Silahkan tambahkan editan terbaru disini....."
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                />
              </div>

              {/* Utara Field */}
              <div>
                <label className="block text-lg font-semibold text-primary-dark mb-3">Utara:</label>
                <textarea
                  value={editContent.utara}
                  onChange={(e) => setEditContent({ ...editContent, utara: e.target.value })}
                  placeholder="Silahkan tambahkan editan terbaru disini....."
                  rows="2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                />
              </div>

              {/* Selatan Field */}
              <div>
                <label className="block text-lg font-semibold text-primary-dark mb-3">Selatan:</label>
                <textarea
                  value={editContent.selatan}
                  onChange={(e) => setEditContent({ ...editContent, selatan: e.target.value })}
                  placeholder="Silahkan tambahkan editan terbaru disini....."
                  rows="2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                />
              </div>

              {/* Timur Field */}
              <div>
                <label className="block text-lg font-semibold text-primary-dark mb-3">Timur:</label>
                <textarea
                  value={editContent.timur}
                  onChange={(e) => setEditContent({ ...editContent, timur: e.target.value })}
                  placeholder="Silahkan tambahkan editan terbaru disini....."
                  rows="2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                />
              </div>

              {/* Barat Field */}
              <div>
                <label className="block text-lg font-semibold text-primary-dark mb-3">Barat:</label>
                <textarea
                  value={editContent.barat}
                  onChange={(e) => setEditContent({ ...editContent, barat: e.target.value })}
                  placeholder="Silahkan tambahkan editan terbaru disini....."
                  rows="2"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-light text-lg"
                />
              </div>

              {/* Foto Peta Section */}
              <div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">Foto Peta Kelurahan Jagakarsa</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-gray-500 text-lg">Drag and drop file or browse your file</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end pt-6 border-t-2 border-gray-200">
                <button
                  onClick={() => setEditingPage(null)}
                  className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-6 py-3 bg-primary-light hover:bg-primary-dark text-white font-bold rounded-lg transition-colors"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
