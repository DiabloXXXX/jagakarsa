import React, { useState, useEffect } from 'react'
import { TrendingUp, ChevronDown } from 'lucide-react'

export default function VisitorStats() {
  const [todayVisits, setTodayVisits] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

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
    <div className="fixed bottom-24 left-4 sm:left-6 z-30 w-[180px] sm:w-auto max-w-sm">
      {/* Main Card - Compact on mobile, richer on desktop */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-primary-light/40 md:bg-primary-light/30 backdrop-blur-2xl border border-primary-light/60 rounded-3xl px-4 py-3 sm:px-5 sm:py-4 hover:bg-primary-light/50 transition-all hover:border-primary-light/80 text-left group shadow-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-primary-light to-primary-dark rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <TrendingUp size={18} className="text-white" />
            </div>
            {/* Label hanya muncul di md+ supaya mobile tetap ringkas */}
            <div className="hidden md:block">
              <p className="text-xs md:text-sm font-semibold text-black/90">Statistik Pengunjung</p>
              <p className="text-[11px] text-black/70">Klik untuk lihat detail</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {/* Total user sebagai angka utama */}
            <span className="text-2xl sm:text-3xl font-bold text-black leading-none">
              {visitorBreakdown.total.toLocaleString()}
            </span>
            <span className="hidden md:block text-[11px] text-black/70 mt-1">Total Kunjungan</span>
          </div>
        </div>
      </button>

      {/* Details Panel - Apple Glass Style Green, lebih kecil di mobile */}
      {showDetails && (
        <div className="mt-2 sm:mt-3 bg-primary-light/40 backdrop-blur-2xl border border-primary-light/60 rounded-3xl p-4 sm:p-5 space-y-3 animate-fadeIn shadow-xl max-h-64 sm:max-h-80 overflow-y-auto">
          <h4 className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wide">Jumlah Kunjungan</h4>
          
          <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
            {[
              { label: 'Hari Ini', value: visitorBreakdown.today, highlight: true },
              { label: 'Kemarin', value: visitorBreakdown.yesterday },
              { label: 'Minggu Ini', value: visitorBreakdown.thisWeek },
              { label: 'Minggu Lalu', value: visitorBreakdown.lastWeek },
              { label: 'Bulan Ini', value: visitorBreakdown.thisMonth },
              { label: 'Bulan Lalu', value: visitorBreakdown.lastMonth },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-1.5 px-2 sm:px-3 rounded-lg hover:bg-black/5 transition-colors">
                <span className="text-[11px] sm:text-xs text-black/80">{item.label}</span>
                <span className={`font-semibold ${item.highlight ? 'text-secondary text-sm sm:text-base' : 'text-black text-xs sm:text-sm'}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="pt-2 sm:pt-3 border-t border-primary-light/40">
            <div className="flex justify-between items-center py-2 px-2 sm:px-3 bg-primary-dark/30 rounded-lg">
              <span className="text-xs sm:text-sm font-semibold text-black">Total Kunjungan</span>
              <span className="font-bold text-secondary text-sm sm:text-base">
                {visitorBreakdown.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
