import React, { useState } from 'react'
import { X, Send } from 'lucide-react'

export default function Chatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Halo, selamat datang di layanan F.A.Q Kelurahan Jagakarsa. Saya asisten virtual yang siap membantu Anda menemukan informasi seputar layanan, data kependudukan, dan kegiatan kelurahan',
      sender: 'bot',
      timestamp: '12:07 PM'
    },
    {
      id: 2,
      text: 'Apa yang ingin Anda tanyakan hari ini?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const quickReplies = [
    'Cara & syarat buat KIA',
    'Cara & syarat buat atau aktivasi IKD',
    'Cara membuat Surat Pengantar Nikah'
  ]

  const handleSendMessage = (text) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([...messages, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Terima kasih atas pertanyaan Anda. Tim kami akan segera merespons. Untuk informasi lebih lanjut, silakan hubungi kami di nomor yang tersedia.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Chat Modal */}
      <div className="fixed bottom-24 right-6 w-[420px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
        style={{
          boxShadow: '0px 5px 10px 5px rgba(0,0,0,0.50)'
        }}
      >
        {/* Header */}
        <div
          className="bg-primary-light text-white p-4 sm:p-6 flex items-center justify-between rounded-t-2xl"
          style={{
            boxShadow: '0px 5px 10px 5px rgba(0,0,0,0.50)'
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md flex-shrink-0">
              <img
                src="/images/{hero,news,maps,achievements,components}/logo.png"
                alt="Chatbot"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-base sm:text-lg whitespace-nowrap">Chat dengan</h3>
                <h3 className="font-bold text-base sm:text-lg whitespace-nowrap">CHATBOT</h3>
              </div>
              <p className="text-xs sm:text-sm opacity-90 mt-1">🟢 Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary-dark p-2 rounded-full transition-colors flex-shrink-0 ml-2"
          >
            <X size={20} className="sm:w-6 sm:h-6 text-white" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white max-h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-6 py-4 rounded-3xl ${
                  message.sender === 'user'
                    ? 'bg-primary-light text-white rounded-br-none'
                    : 'bg-primary-light text-white rounded-bl-none'
                }`}
              >
                <p className="text-lg font-semibold leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies Section */}
        <div className="px-6 py-4 bg-white space-y-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 font-semibold">saran</p>
          <div className="space-y-3">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(reply)}
                className="w-full text-center px-6 py-3 border-2 border-primary-dark rounded-full hover:bg-primary-lighter transition-colors text-primary-dark font-semibold text-lg"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white p-6 border-t border-gray-200 rounded-b-2xl"
          style={{
            boxShadow: '0px 10px 10px 5px rgba(0,0,0,0.50)'
          }}
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Masukkan pesan..."
              className="flex-1 border-2 border-primary-dark rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-gray-600 placeholder-gray-600"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="bg-primary-dark hover:bg-primary-light text-white p-3 rounded-full transition-colors"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
