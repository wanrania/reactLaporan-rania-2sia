import { FaTools, FaCar, FaUserCog, FaMoneyBillWave } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-10">
      
      {/* HEADER */}
      <div className="p-6 pb-0">
        <PageHeader 
          title="Dashboard Bengkel"
          breadcrumb={["Home", "Dashboard"]}
        />
      </div>

      {/* SUMMARY CARDS */}
      <div className="px-6 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <Card 
          icon={<FaTools />} 
          title="Servis Hari Ini" 
          value="24" 
          color="red"
        />

        <Card 
          icon={<FaCar />} 
          title="Kendaraan Masuk" 
          value="58" 
          color="red"
        />

        <Card 
          icon={<FaUserCog />} 
          title="Mekanik Aktif" 
          value="8" 
          color="red"
        />

        <Card 
          icon={<FaMoneyBillWave />} 
          title="Pendapatan" 
          value="Rp 12.5JT" 
          color="red"
        />

      </div>

      {/* GRID CONTENT */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT - ACTIVITY */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-800">Aktivitas Terbaru</h2>
            <button className="text-sm font-medium text-red-500 hover:text-red-600 transition">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-2">
            <Activity text="Servis ganti oli - Avanza" time="2 menit yang lalu" />
            <Activity text="Ban diganti - Motor Beat" time="10 menit yang lalu" />
            <Activity text="Servis dibatalkan" time="30 menit yang lalu" />
            <Activity text="Pembayaran diterima" time="1 jam yang lalu" />
          </div>
        </div>

        {/* RIGHT - QUICK PANEL */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-800 mb-5">Tindakan Cepat</h2>

          <div className="space-y-3 flex-1">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]">
              + Tambah Servis
            </button>

            <button className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200">
              + Tambah Kendaraan
            </button>

            <button className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200">
              Lihat Laporan
            </button>
          </div>

          {/* INFO BOX */}
          <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <p className="text-sm font-bold text-red-600">
                Bengkel ramai hari ini!
              </p>
            </div>
            <p className="text-xs font-medium text-slate-500 mt-1 ml-7">
              Total 24 servis sedang berjalan
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

/* CARD COMPONENT */
function Card({ icon, title, value, color }) {
  // Mapping warna gaya SaaS (Latar pucat + Teks/Icon solid)
  const colors = {
    red: "bg-red-50 text-red-600",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer group">
      
      <div className={`${colors[color]} p-4 rounded-xl text-xl transition-transform group-hover:scale-110`}>
        {icon}
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">{value}</h1>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
      </div>

    </div>
  );
}

/* ACTIVITY COMPONENT */
function Activity({ text, time }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
      <span className="text-slate-700 font-medium text-sm">{text}</span>
      <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">{time}</span>
    </div>
  );
}