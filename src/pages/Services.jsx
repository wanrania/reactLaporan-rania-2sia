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
    <div className="min-h-screen bg-slate-900 text-white pb-10">

      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Layanan Servis" breadcrumb={["Dashboard", "Services"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg hover:opacity-90"
          >
            <FaPlus /> Tambah Service
          </button>
        </PageHeader>
      </div>

      {/* FILTER & SEARCH */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          Show
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white/5 border border-white/10 rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          entries
        </div>

        <input
          type="text"
          placeholder="Cari service..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* TABLE */}
      <div className="px-6">
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto max-h-[400px]">
  <table className="w-full table-fixed text-sm border-collapse">

    {/* HEADER */}
    <thead className="bg-slate-800 text-slate-300 uppercase sticky top-0 z-10">
      <tr>
        <th className="px-6 py-4 text-left w-[100px]">ID</th>
        <th className="px-6 py-4 text-left">Service</th>
        <th className="px-6 py-4 text-left w-[180px]">Harga</th>
        <th className="px-6 py-4 text-left w-[150px]">Durasi</th>
      </tr>
    </thead>

    {/* BODY */}
    <tbody className="divide-y divide-white/10">
      {currentServices.length > 0 ? (
        currentServices.map((s) => (
          <tr key={s.id} className="hover:bg-white/5 transition">
            <td className="px-6 py-4">{s.id}</td>

            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <FaTools className="text-orange-400 shrink-0" />
                <span>{s.name}</span>
              </div>
            </td>

            <td className="px-6 py-4 text-green-400 font-semibold">
              {formatRupiah(s.price)}
            </td>

            <td className="px-6 py-4">{s.duration}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center py-6 text-slate-400">
            Data tidak ditemukan
          </td>
        </tr>
      )}
    </tbody>

  </table>
</div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center p-4 border-t border-white/10 text-sm">
            <span className="text-slate-400">
              Showing {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredServices.length)} of{" "}
              {filteredServices.length}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-white/10 rounded disabled:opacity-30"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-orange-500"
                      : "bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-white/10 rounded disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-slate-900 p-6 rounded-xl w-96">
            <h2 className="text-lg font-bold mb-4">Tambah Service</h2>

            <input
              placeholder="Nama"
              className="w-full mb-3 p-2 bg-white/10 rounded"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Harga"
              type="number"
              className="w-full mb-3 p-2 bg-white/10 rounded"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              placeholder="Durasi"
              className="w-full mb-3 p-2 bg-white/10 rounded"
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
            />

            <div className="flex gap-2">
              <button onClick={handleAdd} className="bg-orange-500 px-4 py-2 rounded">
                Simpan
              </button>
              <button onClick={() => setOpenModal(false)} className="bg-gray-500 px-4 py-2 rounded">
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}