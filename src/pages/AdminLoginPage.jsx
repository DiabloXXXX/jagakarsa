import React, { useState } from 'react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function AdminLoginPage({ setCurrentPage, setIsAdmin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simple validation
    if (!email || !password) {
      setError('Email dan password harus diisi')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      // Simple hardcoded credentials for demo
      if (email === 'admin@jagakarsa.id' && password === 'admin123') {
        setIsAdmin(true)
        setCurrentPage('admin-dashboard')
        window.scrollTo(0, 0)
      } else {
        setError('Email atau password salah')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark/80 via-primary-light/80 to-primary-lighter flex items-center justify-center px-4 py-10 sm:py-12">
      {/* Login Container */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-primary-light/20 overflow-hidden mx-auto">
        {/* Header */}
        <div className="bg-primary-light/90 text-white p-6 sm:p-8 text-center">
          <img
            src="/images/{hero,news,maps,achievements,components}/logo.png"
            alt="Kelurahan Jagakarsa Logo"
            className="w-20 h-20 object-contain mx-auto mb-4"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Admin Portal</h1>
          <p className="text-primary-lighter text-sm sm:text-base">Kelurahan Jagakarsa</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-6 sm:space-y-7 bg-white/90">
          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-lg font-semibold text-primary-dark mb-3">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-primary-light" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@jagakarsa.id"
                className="w-full pl-12 pr-4 py-3 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary-dark focus:ring-2 focus:ring-primary-light text-lg"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-lg font-semibold text-primary-dark mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-primary-light" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary-dark focus:ring-2 focus:ring-primary-light text-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-primary-light hover:text-primary-dark transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-primary-light rounded focus:ring-2 focus:ring-primary-light"
            />
            <label htmlFor="remember" className="ml-2 text-gray-700 font-semibold">
              Ingat saya
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-light hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isLoading ? 'Sedang Login...' : 'Login'}
          </button>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <p className="text-blue-800">Email: admin@jagakarsa.id</p>
            <p className="text-blue-800">Password: admin123</p>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © 2025 Kelurahan Jagakarsa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
