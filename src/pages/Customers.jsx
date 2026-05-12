import { useState } from "react";
import customersData from "../data/customers.json";
import { Link } from "react-router-dom";
import { FaPlus, FaTimes, FaUserCog } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [openModal, setOpenModal] = useState(false);

  const [customers, setCustomers] = useState(customersData);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  // 🔥 STATE TAMBAHAN UNTUK PENCARIAN & PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // 🔍 FILTER
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search),
  );

  // 📄 PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const handleAdd = () => {
    const newCustomer = {
      id: `C${String(customers.length + 1).padStart(3, "0")}`,
      ...form,
    };
    setCustomers([...customers, newCustomer]);
    setForm({ name: "", email: "", phone: "", loyalty: "Bronze" });
    setOpenModal(false);
  };

  // Badge warna bengkel (Disesuaikan untuk Light Mode) 🔧
  const getLoyaltyBadge = (level) => {
    switch (level) {
      case "Gold":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "Silver":
        return "bg-slate-100 text-slate-600 border-slate-200";
      case "Bronze":
        return "bg-orange-50 text-orange-600 border-orange-200";
      default:
        return "bg-blue-50 text-blue-600 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-10">
      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader
          title="Customers Bengkel"
          breadcrumb={["Dashboard", "Customers"]}
        >
          <button
            onClick={() => setOpenModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm shadow-red-500/20 transition-all hover:-translate-y-0.5 active:scale-95 font-medium"
          >
            <FaPlus className="text-sm" /> Tambah Customer
          </button>
        </PageHeader>
      </div>

      {/* SEARCH & LIMIT (Baru ditambahkan) */}
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
          placeholder="Cari nama, email, atau no HP..."
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
            <table className="w-full text-left border-collapse table-auto">
              {/* HEAD */}
              <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-bold tracking-wider border-b border-slate-200 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 w-[100px]">ID</th>
                  <th className="px-6 py-4">Nama Pelanggan</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">No HP</th>
                  <th className="px-6 py-4 text-center w-[120px]">Level</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-slate-100 text-sm">
                {currentData.length > 0 ? (
                  currentData.map((c) => (
                    <tr
                      key={c.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="px-6 py-4 font-medium text-slate-500">
                        {c.id}
                      </td>
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="p-2 bg-slate-100 text-slate-600 rounded-lg group-hover:scale-110 transition-transform">
                          <FaUserCog className="w-4 h-4 shrink-0" />
                        </div>
                        <Link
                          to={`/customers/${c.id}`}
                          className="font-semibold text-red-500 hover:text-red-600 hover:underline transition"
                        >
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{c.email}</td>
                      <td className="px-6 py-4 font-medium text-slate-600">
                        {c.phone}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2.5 py-1 text-xs font-bold rounded-md border ${getLoyaltyBadge(c.loyalty)}`}
                        >
                          {c.loyalty}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-8 text-slate-500 font-medium"
                    >
                      Data customer tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION (Baru ditambahkan) */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 border-t border-slate-200 text-sm bg-slate-50/50">
            <span className="text-slate-500 font-medium">
              Menampilkan{" "}
              {filteredCustomers.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredCustomers.length)} dari{" "}
              {filteredCustomers.length} data
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

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4 animate-in fade-in duration-200">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* CONTENT */}
          <div className="relative bg-white border border-slate-200 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
            {/* TITLE */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Tambah Customer
              </h2>
              <button
                onClick={() => setOpenModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <FaTimes />
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  placeholder="Contoh: budi@mail.com"
                  type="email"
                  value={form.email}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Nomor HP
                </label>
                <input
                  placeholder="Contoh: 08123456789"
                  value={form.phone}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Loyalty Level
                </label>
                <select
                  value={form.loyalty}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer"
                  onChange={(e) =>
                    setForm({ ...form, loyalty: e.target.value })
                  }
                >
                  <option value="Bronze">Bronze</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-3">
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
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
