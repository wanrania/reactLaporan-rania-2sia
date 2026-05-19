import {
  FaTools,
  FaCar,
  FaUserCog,
  FaMoneyBillWave,
  FaPlus,
  FaChartBar,
} from "react-icons/fa";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* HEADER */}
      <div className="p-6 pb-0">
        <PageHeader
          title="Dashboard Bengkel"
          breadcrumb={["Home", "Dashboard"]}
        />
      </div>

      {/* SUMMARY CARDS */}
      <div className="px-6 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SummaryCard
          icon={<FaTools />}
          title="Servis Hari Ini"
          value="24"
          color="red"
        />

        <SummaryCard
          icon={<FaCar />}
          title="Kendaraan Masuk"
          value="58"
          color="blue"
        />

        <SummaryCard
          icon={<FaUserCog />}
          title="Mekanik Aktif"
          value="8"
          color="green"
        />

        <SummaryCard
          icon={<FaMoneyBillWave />}
          title="Pendapatan"
          value="Rp 12.5JT"
          color="amber"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">
              Aktivitas Terbaru
            </h2>

            <button className="text-sm font-semibold text-red-500 hover:text-red-600 transition">
              Lihat Semua
            </button>
          </div>

          {/* ACTIVITIES */}
          <div className="space-y-3">
            <ActivityItem
              text="Servis ganti oli - Avanza"
              time="2 menit yang lalu"
            />

            <ActivityItem
              text="Ban diganti - Motor Beat"
              time="10 menit yang lalu"
            />

            <ActivityItem
              text="Servis dibatalkan"
              time="30 menit yang lalu"
            />

            <ActivityItem
              text="Pembayaran diterima"
              time="1 jam yang lalu"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-800 mb-5">
            Tindakan Cepat
          </h2>

          {/* BUTTONS */}
          <div className="space-y-3">
            <Button type="danger" className="w-full">
              <FaPlus className="text-sm" />
              <span>Tambah Servis</span>
            </Button>

            <Button type="secondary" className="w-full">
              <FaCar className="text-sm" />
              <span>Tambah Kendaraan</span>
            </Button>

            <Button type="secondary" className="w-full">
              <FaChartBar className="text-sm" />
              <span>Lihat Laporan</span>
            </Button>
          </div>

          {/* INFO BOX */}
          <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔥</span>

              <p className="text-sm font-bold text-red-600">
                Bengkel ramai hari ini!
              </p>
            </div>

            <p className="text-xs text-slate-500 font-medium mt-1 ml-7">
              Total 24 servis sedang berjalan
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* SUMMARY CARD */
function SummaryCard({ icon, title, value, color }) {
  const colors = {
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-500",
    green: "bg-green-50 text-green-500",
    amber: "bg-amber-50 text-amber-500",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group cursor-pointer">
      {/* ICON */}
      <div
        className={`${colors[color]} p-4 rounded-xl text-xl transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          {value}
        </h1>

        <p className="text-sm text-slate-500 font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}

/* ACTIVITY ITEM */
function ActivityItem({ text, time }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200">
      <p className="text-sm font-medium text-slate-700">
        {text}
      </p>

      <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-md">
        {time}
      </span>
    </div>
  );
}