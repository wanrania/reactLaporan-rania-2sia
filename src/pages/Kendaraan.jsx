import { useState } from "react";
import { FaPlus, FaCar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import vehiclesData from "../data/vehicle.json";

export default function Kendaraan() {
  const [openModal, setOpenModal] = useState(false);

  const [vehicles, setVehicles] = useState(vehiclesData);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // 🔍 FILTER
  const filteredVehicles = vehicles.filter(
    (v) =>
      v.owner.toLowerCase().includes(search.toLowerCase()) ||
      v.brand.toLowerCase().includes(search.toLowerCase()) ||
      v.plate.toLowerCase().includes(search.toLowerCase()),
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
        <PageHeader
          title="Data Kendaraan"
          breadcrumb={["Dashboard", "Kendaraan"]}
        >
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
                    <tr
                      key={v.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-6 py-4 font-medium text-slate-500">
                        {v.id}
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700">
                        {v.owner}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                            v.type === "Mobil"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {v.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="p-2 bg-slate-100 text-slate-600 rounded-lg group-hover:scale-110 transition-transform">
                          <FaCar className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <Link
                          to={`/kendaraan/${v.id}`}
                          className="font-medium text-red-500 hover:text-red-600 transition-colors"
                        >
                          {v.brand}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-slate-700 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                          {v.plate}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">
                        {v.year}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-8 text-slate-500 font-medium"
                    >
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
              Menampilkan{" "}
              {filteredVehicles.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
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
