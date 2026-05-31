import {
  FaTools,
  FaCar,
  FaUserCog,
  FaMoneyBillWave,
  FaPlus,
  FaChartBar,
} from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        {/* LEFT */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">
              Operasional Bengkel
            </h2>

            <button className="text-red-500 font-semibold text-sm">
              Detail
            </button>
          </div>

          <Tabs defaultValue="aktivitas" className="w-full">
            <TabsList className="mb-6 bg-slate-100 rounded-2xl p-1">
              <TabsTrigger value="aktivitas">Aktivitas</TabsTrigger>

              <TabsTrigger value="overview">Overview</TabsTrigger>

              <TabsTrigger value="statistik">Statistik</TabsTrigger>
            </TabsList>

            <TabsContent value="aktivitas">
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
            </TabsContent>

            <TabsContent value="overview">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-slate-500 text-sm">Total Servis</p>

                  <h3 className="text-3xl font-bold mt-2">24</h3>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-slate-500 text-sm">Kendaraan</p>

                  <h3 className="text-3xl font-bold mt-2">58</h3>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-slate-500 text-sm">Mekanik</p>

                  <h3 className="text-3xl font-bold mt-2">8</h3>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="statistik">
              <div className="bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold">Statistik Bulanan</h3>

                <p className="text-slate-500 mt-2">
                  Pendapatan bulan ini mencapai Rp 12.5JT dengan total 58
                  kendaraan yang telah dilayani.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <h2 className="font-bold text-slate-800 mb-5">
              Status Operasional
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Servis Selesai</span>
                  <span>58%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[58%] bg-red-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Menunggu Sparepart</span>
                  <span>24%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[24%] bg-amber-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Dalam Proses</span>
                  <span>18%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full">
                  <div className="h-3 w-[18%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Reminder</h2>

              <button className="w-8 h-8 rounded-xl bg-slate-100">+</button>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-50 rounded-2xl p-4">
                Cek stok oli mesin
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                Servis armada perusahaan
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                Jadwal servis pelanggan VIP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="px-6">
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Servis Terbaru</h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Pelanggan</th>
                <th>Kendaraan</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Andi Saputra</td>
                <td>Avanza</td>
                <td>Selesai</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Budi Santoso</td>
                <td>Xenia</td>
                <td>Proses</td>
              </tr>

              <tr>
                <td className="py-4">Citra Lestari</td>
                <td>Brio</td>
                <td>Menunggu Sparepart</td>
              </tr>
            </tbody>
          </table>
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

  const growth = {
    red: "+2.8%",
    blue: "+1.7%",
    green: "+3.4%",
    amber: "+4.1%",
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div
            className={`${colors[color]} w-12 h-12 rounded-2xl flex items-center justify-center text-lg`}
          >
            {icon}
          </div>

          <div>
            <p className="text-xs text-slate-400 font-medium">{title}</p>

            <h2 className="text-3xl font-bold text-slate-800 mt-1">{value}</h2>
          </div>
        </div>

        <span className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2 py-1 rounded-lg">
          {growth[color]}
        </span>
      </div>

      <p className="text-xs text-slate-400 mt-4">dibanding minggu lalu</p>
    </div>
  );
}

/* ACTIVITY ITEM */
function ActivityItem({ text, time }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200">
      <p className="text-sm font-medium text-slate-700">{text}</p>

      <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-md">
        {time}
      </span>
    </div>
  );
}
