import React from 'react'
import { MapPin, Users, Home } from 'lucide-react'

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Tentang Kelurahan Jagakarsa
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Kelurahan Jagakarsa merupakan salah satu Kelurahan yang berada di Kecamatan Jagakarsa Kota Administrasi Jakarta Selatan yang memiliki luas sebesar <span className="font-semibold text-primary-dark">4,850,000 m²</span> serta mempunyai <span className="font-semibold text-primary-dark">7 RW dan 82 RT</span>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kelurahan Jagakarsa sebagai instansi pemerintah yang melayani masyarakat harus menjalankan fungsi dengan sebaik-baiknya. Karena standar organisasi dan kinerja Kelurahan harus jelas dan transparan, serta pertanggungjawaban dari hasil kegiatan dan pelayanan yang dilakukan.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={<Home size={32} />}
              label="Luas Wilayah"
              value="4,850,000 m²"
            />
            <StatCard
              icon={<Users size={32} />}
              label="RW"
              value="7"
            />
            <StatCard
              icon={<MapPin size={32} />}
              label="RT"
              value="82"
            />
            <StatCard
              icon={<Home size={32} />}
              label="Kecamatan"
              value="Jagakarsa"
            />
          </div>
        </div>

        {/* Visi & Misi */}
        <div id="visi-misi" className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-lighter p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Visi</h3>
            <p className="text-gray-800 leading-relaxed">
              Menjadi kelurahan yang profesional, transparan, dan responsif dalam memberikan pelayanan publik yang berkualitas untuk meningkatkan kesejahteraan masyarakat.
            </p>
          </div>
          <div className="bg-primary-light text-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Misi</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Memberikan pelayanan publik yang cepat, tepat, dan memuaskan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Memberdayakan masyarakat dalam pembangunan berkelanjutan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>Menjaga keamanan, ketertiban, dan kesejahteraan masyarakat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Struktur Organisasi */}
        <div id="struktur" className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-primary-dark mb-6">Struktur Organisasi</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <OrgCard title="Lurah" name="[Nama Lurah]" />
            <OrgCard title="Sekretaris Lurah" name="[Nama Sekretaris]" />
            <OrgCard title="Kaur Tata Usaha" name="[Nama Kaur]" />
            <OrgCard title="Kaur Pembangunan" name="[Nama Kaur]" />
            <OrgCard title="Kaur Kesejahteraan" name="[Nama Kaur]" />
            <OrgCard title="Kaur Pemerintahan" name="[Nama Kaur]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-primary-lighter p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary-dark mb-3 flex justify-center">{icon}</div>
      <p className="text-sm text-gray-700 mb-2">{label}</p>
      <p className="text-2xl font-bold text-primary-dark">{value}</p>
    </div>
  )
}

function OrgCard({ title, name }) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-primary-light text-center shadow-sm hover:shadow-md transition-shadow">
      <h4 className="text-lg font-bold text-primary-dark mb-2">{title}</h4>
      <p className="text-gray-600">{name}</p>
    </div>
  )
}
