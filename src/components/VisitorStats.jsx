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
    <div className="fixed bottom-24 left-6 z-30 max-w-sm">
      {/* Main Card - Apple Glass Style Green */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-primary-light/30 backdrop-blur-2xl border border-primary-light/50 rounded-3xl p-6 hover:bg-primary-light/40 transition-all hover:border-primary-light/70 text-left group shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary-light to-primary-dark rounded-xl group-hover:scale-110 transition-transform shadow-md">
              <TrendingUp size={20} className="text-white" />
            </div>
            <p className="text-sm font-semibold text-black">Kunjungan Hari Ini</p>
          </div>
          <ChevronDown 
            size={20} 
            className={`text-black transition-transform ${showDetails ? 'rotate-180' : ''}`}
          />
        </div>
        <p className="text-4xl font-bold text-black">{todayVisits}</p>
      </button>

      {/* Details Panel - Apple Glass Style Green */}
      {showDetails && (
        <div className="mt-3 bg-primary-light/30 backdrop-blur-2xl border border-primary-light/50 rounded-3xl p-6 space-y-3 animate-fadeIn shadow-lg">
          <h4 className="text-sm font-semibold text-black uppercase tracking-wide">Jumlah Kunjungan</h4>
          
          <div className="space-y-2">
            {[
              { label: 'Hari Ini', value: visitorBreakdown.today, highlight: true },
              { label: 'Kemarin', value: visitorBreakdown.yesterday },
              { label: 'Minggu Ini', value: visitorBreakdown.thisWeek },
              { label: 'Minggu Lalu', value: visitorBreakdown.lastWeek },
              { label: 'Bulan Ini', value: visitorBreakdown.thisMonth },
              { label: 'Bulan Lalu', value: visitorBreakdown.lastMonth },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-black/10 transition-colors">
                <span className="text-sm text-black/80">{item.label}</span>
                <span className={`font-semibold ${item.highlight ? 'text-secondary text-base' : 'text-black text-sm'}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="pt-3 border-t border-primary-light/30">
            <div className="flex justify-between items-center py-2 px-3 bg-primary-dark/30 rounded-lg">
              <span className="text-sm font-semibold text-black">Total Kunjungan</span>
              <span className="font-bold text-secondary">{visitorBreakdown.total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
