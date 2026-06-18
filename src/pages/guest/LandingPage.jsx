import {
  FaTools,
  FaCar,
  FaGift,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black">
            AUTO
            <span className="text-red-500">TECH</span>
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 rounded-xl border border-slate-200 font-medium"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium"
            >
              Daftar Member
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Bengkel Digital Modern
            </span>

            <h1 className="text-6xl font-black mt-6 leading-tight">
              Servis Kendaraan
              <br />
              Lebih Mudah &
              <br />
              Terpercaya
            </h1>

            <p className="mt-6 text-red-100 text-lg">
              Kelola servis kendaraan, booking online, reward point, promo
              member, dan riwayat servis dalam satu aplikasi.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate("/register")}
                className="bg-white text-red-600 px-6 py-4 rounded-2xl font-bold"
              >
                Gabung Member
              </button>

              <button
                onClick={() => navigate("/login")}
                className="border border-white px-6 py-4 rounded-2xl font-bold"
              >
                Login Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Layanan Kami</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl">
              <FaTools className="text-4xl text-red-500 mb-4" />
              <h3 className="font-bold text-xl">Servis Berkala</h3>
              <p className="mt-3 text-slate-500">
                Perawatan rutin kendaraan agar tetap prima.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl">
              <FaCar className="text-4xl text-red-500 mb-4" />
              <h3 className="font-bold text-xl">Tune Up Kendaraan</h3>
              <p className="mt-3 text-slate-500">
                Meningkatkan performa kendaraan Anda.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl">
              <FaGift className="text-4xl text-red-500 mb-4" />
              <h3 className="font-bold text-xl">Reward Member</h3>
              <p className="mt-3 text-slate-500">
                Kumpulkan point setiap transaksi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING ONLINE */}
      <section className="bg-red-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Booking Servis Online</h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Tidak perlu antri. Pilih layanan, jadwal, dan kendaraan langsung
            dari aplikasi.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              1️⃣ Pilih Kendaraan
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm">
              2️⃣ Pilih Layanan
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm">
              3️⃣ Tentukan Jadwal
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm">
              4️⃣ Konfirmasi Booking
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER BENEFIT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Keuntungan Menjadi Member
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border rounded-3xl p-8">🎁 Reward Point</div>

            <div className="border rounded-3xl p-8">📅 Booking Prioritas</div>

            <div className="border rounded-3xl p-8">💰 Promo Eksklusif</div>

            <div className="border rounded-3xl p-8">🔔 Reminder Servis</div>

            <div className="border rounded-3xl p-8">
              📄 Riwayat Servis Digital
            </div>

            <div className="border rounded-3xl p-8">🎂 Voucher Ulang Tahun</div>
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Kenapa Auto Tech?</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">1000+</h3>
              <p>Pelanggan Aktif</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">5000+</h3>
              <p>Servis Selesai</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">98%</h3>
              <p>Kepuasan Pelanggan</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-red-500">24/7</h3>
              <p>Support Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Promo Terbaru</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-red-500 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Diskon Oli 20%</h3>

              <p className="mt-3">Berlaku untuk seluruh member.</p>
            </div>

            <div className="bg-blue-500 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Gratis Cuci Motor</h3>

              <p className="mt-3">Untuk transaksi minimal Rp150.000</p>
            </div>

            <div className="bg-green-500 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Cashback Rp50.000</h3>

              <p className="mt-3">Khusus member Gold.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Testimoni Pelanggan
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-slate-200 p-6 rounded-3xl">
              ⭐⭐⭐⭐⭐
              <p className="mt-4 text-slate-600">
                Pelayanannya cepat dan hasil servis memuaskan.
              </p>
              <h4 className="mt-4 font-bold">Budi Santoso</h4>
            </div>

            <div className="border border-slate-200 p-6 rounded-3xl">
              ⭐⭐⭐⭐⭐
              <p className="mt-4 text-slate-600">
                Booking online sangat membantu.
              </p>
              <h4 className="mt-4 font-bold">Rina Amelia</h4>
            </div>

            <div className="border border-slate-200 p-6 rounded-3xl">
              ⭐⭐⭐⭐⭐
              <p className="mt-4 text-slate-600">
                Point reward bisa ditukar promo.
              </p>
              <h4 className="mt-4 font-bold">Andi Saputra</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Pertanyaan Umum</h2>

          <div className="space-y-4 mt-10">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold">Apakah harus menjadi member?</h3>

              <p className="text-slate-500 mt-2">
                Tidak, namun member mendapatkan banyak keuntungan tambahan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold">Bagaimana mendapatkan point?</h3>

              <p className="text-slate-500 mt-2">
                Setiap transaksi servis akan mendapatkan reward point.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-bold">Apakah point dapat ditukar?</h3>

              <p className="text-slate-500 mt-2">
                Ya, point dapat ditukar dengan voucher dan promo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MEMBER */}
      <section className="bg-red-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <FaUserShield className="mx-auto text-6xl mb-6" />

          <h2 className="text-5xl font-black">Jadilah Member Sekarang</h2>

          <p className="mt-5 text-red-100">
            Dapatkan promo eksklusif, reward point, dan booking servis online.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-8 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-3"
          >
            Daftar Sekarang
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-white text-2xl font-bold">AUTO TECH CRM</h3>

          <p className="mt-3">Sistem Manajemen Bengkel Berbasis CRM</p>

          <p className="mt-6 text-sm">© 2026 Auto Tech. All Rights Reserved.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="
  fixed
  bottom-6
  right-6
  bg-green-500
  text-white
  p-4
  rounded-full
  shadow-xl
  hover:scale-110
  transition
  z-50
"
      >
        💬
      </a>
    </div>
  );
}
