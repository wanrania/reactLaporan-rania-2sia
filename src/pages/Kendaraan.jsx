import { useState } from "react";
import { FaPlus, FaCar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Kendaraan() {
  const [openModal, setOpenModal] = useState(false);

  const [vehicles, setVehicles] = useState([
    { id: "V001", owner: "Andi Saputra", type: "Motor", brand: "Honda Beat", plate: "B 1234 XYZ", year: 2020 },
    { id: "V002", owner: "Budi Santoso", type: "Mobil", brand: "Toyota Avanza", plate: "B 5678 ABC", year: 2019 },
    { id: "V003", owner: "Citra Lestari", type: "Motor", brand: "Yamaha NMAX", plate: "D 1122 AAA", year: 2021 },
    { id: "V004", owner: "Dewi Anggraini", type: "Mobil", brand: "Honda Brio", plate: "B 3344 BBB", year: 2022 },
    { id: "V005", owner: "Eko Prasetyo", type: "Motor", brand: "Suzuki Satria", plate: "L 9988 CCC", year: 2018 },
    { id: "V006", owner: "Fajar Hidayat", type: "Mobil", brand: "Mitsubishi Xpander", plate: "B 7788 DDD", year: 2020 },
    { id: "V007", owner: "Gina Marlina", type: "Motor", brand: "Honda Vario", plate: "F 2233 EEE", year: 2021 },
    { id: "V008", owner: "Hadi Wijaya", type: "Mobil", brand: "Toyota Rush", plate: "B 5566 FFF", year: 2019 },
    { id: "V009", owner: "Indah Sari", type: "Motor", brand: "Yamaha Aerox", plate: "D 7788 GGG", year: 2022 },
    { id: "V010", owner: "Joko Susilo", type: "Mobil", brand: "Suzuki Ertiga", plate: "B 9911 HHH", year: 2017 },
    { id: "V011", owner: "Kiki Amelia", type: "Motor", brand: "Honda Scoopy", plate: "E 1123 III", year: 2020 },
    { id: "V012", owner: "Lukman Hakim", type: "Mobil", brand: "Daihatsu Xenia", plate: "B 2234 JJJ", year: 2018 },
    { id: "V013", owner: "Maya Putri", type: "Motor", brand: "Yamaha Mio", plate: "D 3345 KKK", year: 2016 },
    { id: "V014", owner: "Nanda Pratama", type: "Mobil", brand: "Honda CR-V", plate: "B 4456 LLL", year: 2021 },
    { id: "V015", owner: "Oki Setiawan", type: "Motor", brand: "Kawasaki Ninja", plate: "L 5567 MMM", year: 2019 },
    { id: "V016", owner: "Putri Ayu", type: "Mobil", brand: "Toyota Fortuner", plate: "B 6678 NNN", year: 2022 },
    { id: "V017", owner: "Qori Ahmad", type: "Motor", brand: "Honda PCX", plate: "F 7789 OOO", year: 2021 },
    { id: "V018", owner: "Rina Kurnia", type: "Mobil", brand: "Mazda CX-5", plate: "B 8890 PPP", year: 2020 },
    { id: "V019", owner: "Sandi Nugroho", type: "Motor", brand: "Yamaha R15", plate: "D 9901 QQQ", year: 2018 },
    { id: "V020", owner: "Tina Yuliana", type: "Mobil", brand: "Hyundai Creta", plate: "B 1012 RRR", year: 2023 },
    { id: "V021", owner: "Umar Faruq", type: "Motor", brand: "Suzuki Nex", plate: "E 2023 SSS", year: 2017 },
    { id: "V022", owner: "Vina Melati", type: "Mobil", brand: "Kia Seltos", plate: "B 3034 TTT", year: 2022 },
    { id: "V023", owner: "Wahyu Hidayat", type: "Motor", brand: "Honda Supra", plate: "D 4045 UUU", year: 2015 },
    { id: "V024", owner: "Xena Putri", type: "Mobil", brand: "Wuling Almaz", plate: "B 5056 VVV", year: 2021 },
    { id: "V025", owner: "Yudi Santika", type: "Motor", brand: "Yamaha Jupiter", plate: "L 6067 WWW", year: 2016 },
    { id: "V026", owner: "Zahra Nabila", type: "Mobil", brand: "Toyota Yaris", plate: "B 7078 XXX", year: 2019 },
    { id: "V027", owner: "Agus Salim", type: "Motor", brand: "Honda Revo", plate: "E 8089 YYY", year: 2014 },
    { id: "V028", owner: "Bella Sari", type: "Mobil", brand: "Suzuki XL7", plate: "B 9090 ZZZ", year: 2020 },
    { id: "V029", owner: "Chandra Wijaya", type: "Motor", brand: "Yamaha Gear", plate: "D 1112 AAA", year: 2022 },
    { id: "V030", owner: "Dina Kartika", type: "Mobil", brand: "Honda HR-V", plate: "B 1314 BBB", year: 2021 },
  ]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // 🔍 FILTER
  const filteredVehicles = vehicles.filter((v) =>
    v.owner.toLowerCase().includes(search.toLowerCase()) ||
    v.brand.toLowerCase().includes(search.toLowerCase()) ||
    v.plate.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredVehicles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-10">

      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Data Kendaraan" breadcrumb={["Dashboard", "Kendaraan"]}>
          <button 
            onClick={() => setOpenModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm shadow-red-500/20 transition-all hover:-translate-y-0.5 active:scale-95 font-medium"
          >
            <FaPlus className="text-sm" /> Tambah Kendaraan
          </button>
        </PageHeader>
      </div>

      {/* SEARCH & LIMIT */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 pt-2 pb-6">
        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
          Tampilkan
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors cursor-pointer"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          entri
        </div>

        <input
          type="text"
          placeholder="Cari pemilik, merek, atau plat..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all w-full sm:w-72 shadow-sm"
        />
      </div>

      {/* TABLE */}
      <div className="px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

          <div className="overflow-x-auto max-h-[500px]">
            <table className="w-full text-sm border-collapse table-auto">

              <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-bold tracking-wider border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left w-[100px]">ID</th>
                  <th className="px-6 py-4 text-left">Pemilik</th>
                  <th className="px-6 py-4 text-left w-[120px]">Jenis</th>
                  <th className="px-6 py-4 text-left">Kendaraan</th>
                  <th className="px-6 py-4 text-left">Plat Nomor</th>
                  <th className="px-6 py-4 text-left w-[100px]">Tahun</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {currentData.length > 0 ? (
                  currentData.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-500">{v.id}</td>
                      <td className="px-6 py-4 font-semibold text-slate-700">{v.owner}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                          v.type === 'Mobil' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {v.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="p-2 bg-slate-100 text-slate-600 rounded-lg group-hover:scale-110 transition-transform">
                          <FaCar className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <span className="font-medium text-slate-700">{v.brand}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-slate-700 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                          {v.plate}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{v.year}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-slate-500 font-medium">
                      Data kendaraan tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 border-t border-slate-200 text-sm bg-slate-50/50">
            <span className="text-slate-500 font-medium">
              Menampilkan {filteredVehicles.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredVehicles.length)} dari{" "}
              {filteredVehicles.length} data
            </span>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg disabled:opacity-50 disabled:bg-slate-50 hover:bg-slate-50 font-medium transition-colors"
              >
                Prev
              </button>

              <div className="flex gap-1.5 hidden sm:flex">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                      currentPage === i + 1
                        ? "bg-red-500 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg disabled:opacity-50 disabled:bg-slate-50 hover:bg-slate-50 font-medium transition-colors"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}