import { useState } from "react";
import { FaPlus, FaTimes, FaTools } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);

  const [services, setServices] = useState([
    { id: "S001", name: "Ganti Oli", price: 50000, duration: "30 menit" },
    { id: "S002", name: "Servis Mesin", price: 150000, duration: "2 jam" },
    { id: "S003", name: "Cuci Motor", price: 20000, duration: "20 menit" },
    { id: "S004", name: "Tune Up", price: 200000, duration: "3 jam" },
    { id: "S005", name: "Ganti Kampas Rem", price: 80000, duration: "45 menit" },
    { id: "S006", name: "Servis Rem", price: 120000, duration: "1 jam" },
    { id: "S007", name: "Ganti Aki", price: 250000, duration: "30 menit" },
    { id: "S008", name: "Spooring & Balancing", price: 300000, duration: "2 jam" },
    { id: "S009", name: "Servis CVT", price: 100000, duration: "1 jam" },
    { id: "S010", name: "Ganti Busi", price: 40000, duration: "20 menit" },
    { id: "S011", name: "Servis Injeksi", price: 180000, duration: "1.5 jam" },
    { id: "S012", name: "Cuci Mobil", price: 50000, duration: "40 menit" },
    { id: "S013", name: "Salon Mobil", price: 500000, duration: "4 jam" },
    { id: "S014", name: "Ganti Filter Udara", price: 60000, duration: "30 menit" },
    { id: "S015", name: "Servis Radiator", price: 200000, duration: "2 jam" },
    { id: "S016", name: "Ganti Oli Gardan", price: 70000, duration: "30 menit" },
    { id: "S017", name: "Servis Kopling", price: 350000, duration: "3 jam" },
    { id: "S018", name: "Ganti Shockbreaker", price: 400000, duration: "2 jam" },
    { id: "S019", name: "Servis AC Mobil", price: 250000, duration: "2 jam" },
    { id: "S020", name: "Isi Freon AC", price: 150000, duration: "1 jam" },
    { id: "S021", name: "Ganti Ban", price: 100000, duration: "45 menit" },
    { id: "S022", name: "Tambal Ban", price: 20000, duration: "15 menit" },
    { id: "S023", name: "Servis Kelistrikan", price: 220000, duration: "2 jam" },
    { id: "S024", name: "Ganti Lampu", price: 50000, duration: "20 menit" },
    { id: "S025", name: "Servis Suspensi", price: 300000, duration: "3 jam" },
    { id: "S026", name: "Flushing Oli Mesin", price: 120000, duration: "1 jam" },
    { id: "S027", name: "Detailing Interior", price: 350000, duration: "3 jam" },
    { id: "S028", name: "Cuci Engine", price: 100000, duration: "1 jam" },
    { id: "S029", name: "Servis Rantai Motor", price: 60000, duration: "30 menit" },
    { id: "S030", name: "Ganti Oli Transmisi", price: 90000, duration: "45 menit" },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    duration: "",
  });

  // 🔥 STATE TAMBAHAN (PRO FEATURE)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // 🔍 SEARCH FILTER
  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 PAGINATION LOGIC
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filteredServices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  // ➕ ADD SERVICE
  const handleAdd = () => {
    const newService = {
      id: `S${String(services.length + 1).padStart(3, "0")}`,
      ...form,
      price: Number(form.price),
    };
    setServices([...services, newService]);
    setForm({ name: "", price: "", duration: "" });
    setOpenModal(false);
  };

  // 💰 FORMAT RUPIAH
  const formatRupiah = (num) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-10">

      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Layanan Servis" breadcrumb={["Dashboard", "Services"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm shadow-red-500/20 transition-all hover:-translate-y-0.5 active:scale-95 font-medium"
          >
            <FaPlus className="text-sm" /> Tambah Service
          </button>
        </PageHeader>
      </div>

      {/* FILTER & SEARCH */}
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
          placeholder="Cari nama service..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all w-full sm:w-64 shadow-sm"
        />
      </div>

      {/* TABLE CONTAINER */}
      <div className="px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto max-h-[500px]">
            <table className="w-full table-fixed text-sm border-collapse">

              {/* HEADER */}
              <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-bold tracking-wider border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left w-[100px]">ID</th>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left w-[180px]">Harga</th>
                  <th className="px-6 py-4 text-left w-[150px]">Durasi</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-slate-100">
                {currentServices.length > 0 ? (
                  currentServices.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-500">{s.id}</td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-50 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
                            <FaTools className="w-3.5 h-3.5 shrink-0" />
                          </div>
                          <span className="font-semibold text-slate-700">{s.name}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-green-600 font-bold">
                        {formatRupiah(s.price)}
                      </td>

                      <td className="px-6 py-4 text-slate-600 font-medium">{s.duration}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-8 text-slate-500 font-medium">
                      Data service tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 border-t border-slate-200 text-sm bg-slate-50/50">
            <span className="text-slate-500 font-medium">
              Menampilkan {filteredServices.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredServices.length)} dari{" "}
              {filteredServices.length} entri
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
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
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg disabled:opacity-50 disabled:bg-slate-50 hover:bg-slate-50 font-medium transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">Tambah Service Baru</h2>
              <button onClick={() => setOpenModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Service</label>
                <input
                  placeholder="Contoh: Ganti Kampas Kopling"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Harga (Rp)</label>
                <input
                  placeholder="Contoh: 150000"
                  type="number"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimasi Durasi</label>
                <input
                  placeholder="Contoh: 45 menit"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setOpenModal(false)} 
                className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
              >
                Batal
              </button>
              <button 
                onClick={handleAdd} 
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm shadow-red-500/20 hover:shadow-md hover:-translate-y-0.5"
              >
                Simpan Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}