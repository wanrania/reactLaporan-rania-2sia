import {
  FaCar,
  FaGift,
  FaTools,
  FaCalendarCheck,
  FaCrown,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function DashboardMember() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800">
            Halo, {user?.fullname} 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Selamat datang kembali di Auto Tech Member Dashboard
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-5
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            shadow-sm
          "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* MEMBERSHIP CARD */}
      <div
        className="
          bg-gradient-to-r
          from-red-600
          via-red-500
          to-orange-500
          text-white
          rounded-3xl
          p-8
          shadow-xl
          mb-8
        "
      >
        <div className="flex justify-between">
          <div>
            <p className="uppercase tracking-widest text-red-100">
              Auto Tech Premium Member
            </p>

            <h2 className="text-4xl font-black mt-3">
              {user?.fullname}
            </h2>

            <p className="mt-2 text-red-100">
              Gold Member
            </p>

            <p className="text-red-100">
              Member ID : MBR001
            </p>
          </div>

          <FaCrown className="text-6xl text-yellow-300" />
        </div>

        <div className="mt-8">
          <p className="text-red-100">
            Reward Point
          </p>

          <h3 className="text-5xl font-black">
            1.250
          </h3>
        </div>
      </div>

      {/* QUICK ACTION */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <button className="bg-white p-5 rounded-2xl shadow-sm border hover:border-red-500 hover:shadow-lg transition">
          📅 Booking Servis
        </button>

        <button className="bg-white p-5 rounded-2xl shadow-sm border hover:border-red-500 hover:shadow-lg transition">
          🚗 Kendaraan Saya
        </button>

        <button className="bg-white p-5 rounded-2xl shadow-sm border hover:border-red-500 hover:shadow-lg transition">
          🎁 Tukar Reward
        </button>

        <button className="bg-white p-5 rounded-2xl shadow-sm border hover:border-red-500 hover:shadow-lg transition">
          📄 Riwayat Servis
        </button>
      </div>

      {/* STATISTIK */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <FaTools className="text-red-500 text-3xl mb-3" />

          <h3 className="text-4xl font-bold">
            12
          </h3>

          <p className="text-slate-500">
            Total Servis
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <FaGift className="text-yellow-500 text-3xl mb-3" />

          <h3 className="text-4xl font-bold">
            1250
          </h3>

          <p className="text-slate-500">
            Reward Point
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <FaCar className="text-blue-500 text-3xl mb-3" />

          <h3 className="text-4xl font-bold">
            2
          </h3>

          <p className="text-slate-500">
            Kendaraan
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <FaCalendarCheck className="text-green-500 text-3xl mb-3" />

          <h3 className="text-4xl font-bold">
            1
          </h3>

          <p className="text-slate-500">
            Booking Aktif
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">

        {/* PROGRESS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="font-bold text-xl mb-5">
            Progress Membership
          </h2>

          <div className="flex justify-between">
            <span>Gold Member</span>
            <span>1250 / 2000</span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-4 mt-3">
            <div
              className="bg-yellow-500 h-4 rounded-full"
              style={{ width: "62%" }}
            />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            750 point lagi menuju Platinum Member
          </p>
        </div>

        {/* REMINDER */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="font-bold text-yellow-700">
            ⚠ Reminder Servis
          </h2>

          <p className="mt-3">
            Honda Beat Anda sudah mencapai
            2.800 KM sejak servis terakhir.
          </p>

          <button className="mt-5 bg-yellow-500 text-white px-5 py-3 rounded-xl">
            Booking Sekarang
          </button>
        </div>

      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* BOOKING */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="font-bold text-xl mb-4">
            Booking Berikutnya
          </h2>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              Honda Beat 2023
            </h3>

            <p className="text-slate-500 mt-2">
              Tune Up + Ganti Oli
            </p>

            <p className="text-slate-500">
              20 Juni 2026 - 09:00 WIB
            </p>
          </div>
        </div>

        {/* PROMO */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6">
          <h2 className="font-bold text-2xl">
            Promo Member Bulan Ini
          </h2>

          <p className="mt-3">
            Diskon 20% Ganti Oli + Gratis Cuci Kendaraan
          </p>

          <button className="mt-5 bg-white text-red-600 px-5 py-3 rounded-xl font-bold">
            Klaim Promo
          </button>
        </div>

        {/* KENDARAAN */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="font-bold text-xl mb-4">
            Kendaraan Saya
          </h2>

          <div className="space-y-4">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">
                Honda Beat 2023
              </h3>

              <p className="text-slate-500">
                BM 1234 XX
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">
                Yamaha NMAX
              </h3>

              <p className="text-slate-500">
                BM 8888 YY
              </p>
            </div>
          </div>
        </div>

        {/* NOTIFIKASI */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center gap-2 mb-5">
            <FaBell />
            <h2 className="font-bold text-xl">
              Notifikasi
            </h2>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-xl">
              🎁 Anda mendapat 100 point reward
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              📅 Booking servis berhasil dibuat
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              🔥 Promo diskon oli 20%
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
