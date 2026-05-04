import { FaTools, FaCar, FaUserCog, FaMoneyBillWave } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-orange-900 text-white">
      
      {/* HEADER */}
      <PageHeader 
        title="Dashboard Bengkel"
        breadcrumb={["Home", "Dashboard"]}
      />

      {/* SUMMARY */}
      <div className="p-6 grid md:grid-cols-4 gap-5">

        <Card 
          icon={<FaTools />} 
          title="Servis Hari Ini" 
          value="24" 
          color="orange"
        />

        <Card 
          icon={<FaCar />} 
          title="Kendaraan Masuk" 
          value="58" 
          color="blue"
        />

        <Card 
          icon={<FaUserCog />} 
          title="Mekanik Aktif" 
          value="8" 
          color="green"
        />

        <Card 
          icon={<FaMoneyBillWave />} 
          title="Pendapatan" 
          value="Rp 12.5JT" 
          color="yellow"
        />

      </div>

      {/* GRID CONTENT */}
      <div className="p-6 grid lg:grid-cols-3 gap-6">

        {/* LEFT - ACTIVITY */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
          <h2 className="text-lg font-bold mb-4">Aktivitas Terbaru</h2>

          <div className="space-y-4">
            <Activity text="Servis ganti oli - Avanza" time="2 menit" />
            <Activity text="Ban diganti - Motor Beat" time="10 menit" />
            <Activity text="Servis dibatalkan" time="30 menit" />
            <Activity text="Pembayaran diterima" time="1 jam" />
          </div>
        </div>

        {/* RIGHT - QUICK PANEL */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>

          <div className="space-y-3">
            <button className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-xl">
              + Tambah Servis
            </button>

            <button className="w-full bg-slate-700 hover:bg-slate-600 p-3 rounded-xl">
              + Tambah Kendaraan
            </button>

            <button className="w-full bg-slate-700 hover:bg-slate-600 p-3 rounded-xl">
              Lihat Laporan
            </button>
          </div>

          {/* INFO BOX */}
          <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <p className="text-sm text-orange-300">
              🔥 Bengkel ramai hari ini!
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Total 24 servis berjalan
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

/* CARD COMPONENT */
function Card({ icon, title, value, color }) {
  const colors = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:scale-105 transition">
      
      <div className={`${colors[color]} p-4 rounded-xl text-white text-xl`}>
        {icon}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{value}</h1>
        <p className="text-slate-400 text-sm">{title}</p>
      </div>

    </div>
  );
}

/* ACTIVITY COMPONENT */
function Activity({ text, time }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg transition">
      <span>{text}</span>
      <span className="text-xs text-slate-400">{time}</span>
    </div>
  );
}