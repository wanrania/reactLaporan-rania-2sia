import { useState } from "react";
import { FaPlus, FaTimes, FaUserCog } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [openModal, setOpenModal] = useState(false);

  const [customers, setCustomers] = useState([
  { id: "C001", name: "Andi Saputra", email: "andi@mail.com", phone: "081234567001", loyalty: "Gold" },
  { id: "C002", name: "Budi Santoso", email: "budi@mail.com", phone: "081234567002", loyalty: "Silver" },
  { id: "C003", name: "Citra Lestari", email: "citra@mail.com", phone: "081234567003", loyalty: "Bronze" },
  { id: "C004", name: "Dewi Anggraini", email: "dewi@mail.com", phone: "081234567004", loyalty: "Gold" },
  { id: "C005", name: "Eko Prasetyo", email: "eko@mail.com", phone: "081234567005", loyalty: "Silver" },
  { id: "C006", name: "Fajar Hidayat", email: "fajar@mail.com", phone: "081234567006", loyalty: "Bronze" },
  { id: "C007", name: "Gina Marlina", email: "gina@mail.com", phone: "081234567007", loyalty: "Gold" },
  { id: "C008", name: "Hadi Wijaya", email: "hadi@mail.com", phone: "081234567008", loyalty: "Silver" },
  { id: "C009", name: "Indah Sari", email: "indah@mail.com", phone: "081234567009", loyalty: "Bronze" },
  { id: "C010", name: "Joko Susilo", email: "joko@mail.com", phone: "081234567010", loyalty: "Gold" },

  { id: "C011", name: "Kiki Amelia", email: "kiki@mail.com", phone: "081234567011", loyalty: "Silver" },
  { id: "C012", name: "Lukman Hakim", email: "lukman@mail.com", phone: "081234567012", loyalty: "Bronze" },
  { id: "C013", name: "Maya Putri", email: "maya@mail.com", phone: "081234567013", loyalty: "Gold" },
  { id: "C014", name: "Nanda Pratama", email: "nanda@mail.com", phone: "081234567014", loyalty: "Silver" },
  { id: "C015", name: "Oki Setiawan", email: "oki@mail.com", phone: "081234567015", loyalty: "Bronze" },
  { id: "C016", name: "Putri Ayu", email: "putri@mail.com", phone: "081234567016", loyalty: "Gold" },
  { id: "C017", name: "Qori Ahmad", email: "qori@mail.com", phone: "081234567017", loyalty: "Silver" },
  { id: "C018", name: "Rina Kurnia", email: "rina@mail.com", phone: "081234567018", loyalty: "Bronze" },
  { id: "C019", name: "Sandi Nugroho", email: "sandi@mail.com", phone: "081234567019", loyalty: "Gold" },
  { id: "C020", name: "Tina Yuliana", email: "tina@mail.com", phone: "081234567020", loyalty: "Silver" },

  { id: "C021", name: "Umar Faruq", email: "umar@mail.com", phone: "081234567021", loyalty: "Bronze" },
  { id: "C022", name: "Vina Melati", email: "vina@mail.com", phone: "081234567022", loyalty: "Gold" },
  { id: "C023", name: "Wahyu Hidayat", email: "wahyu@mail.com", phone: "081234567023", loyalty: "Silver" },
  { id: "C024", name: "Xena Putri", email: "xena@mail.com", phone: "081234567024", loyalty: "Bronze" },
  { id: "C025", name: "Yudi Santika", email: "yudi@mail.com", phone: "081234567025", loyalty: "Gold" },
  { id: "C026", name: "Zahra Nabila", email: "zahra@mail.com", phone: "081234567026", loyalty: "Silver" },
  { id: "C027", name: "Agus Salim", email: "agus@mail.com", phone: "081234567027", loyalty: "Bronze" },
  { id: "C028", name: "Bella Sari", email: "bella@mail.com", phone: "081234567028", loyalty: "Gold" },
  { id: "C029", name: "Chandra Wijaya", email: "chandra@mail.com", phone: "081234567029", loyalty: "Silver" },
  { id: "C030", name: "Dina Kartika", email: "dina@mail.com", phone: "081234567030", loyalty: "Bronze" }
]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  const handleAdd = () => {
    const newCustomer = {
      id: `C${String(customers.length + 1).padStart(3, "0")}`,
      ...form
    };
    setCustomers([...customers, newCustomer]);
    setForm({ name: "", email: "", phone: "", loyalty: "Bronze" });
    setOpenModal(false);
  };

  // Badge warna bengkel 🔧
  const getLoyaltyBadge = (level) => {
    switch (level) {
      case "Gold":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Silver":
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
      case "Bronze":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-10">

      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Customers Bengkel" breadcrumb={["Dashboard", "Customers"]}>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
            text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-lg transition"
          >
            <FaPlus /> Tambah Customer
          </button>
        </PageHeader>
      </div>

      {/* TABLE */}
      <div className="p-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              
              {/* HEAD */}
              <thead className="bg-white/5 text-slate-300 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Nama</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">No HP</th>
                  <th className="px-6 py-4 text-center">Level</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-white/10 text-sm">
                {customers.map((c) => (
                  <tr key={c.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-semibold">{c.id}</td>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <FaUserCog className="text-orange-400" />
                      {c.name}
                    </td>
                    <td className="px-6 py-4 text-slate-400">{c.email}</td>
                    <td className="px-6 py-4">{c.phone}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 text-xs rounded-full border ${getLoyaltyBadge(c.loyalty)}`}>
                        {c.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">

          {/* BACKDROP */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          ></div>

          {/* CONTENT */}
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md">
            
            {/* TITLE */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Tambah Customer</h2>
              <button 
                onClick={() => setOpenModal(false)}
                className="text-slate-400 hover:text-red-400"
              >
                <FaTimes />
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-4">

              <input 
                placeholder="Nama Lengkap"
                value={form.name}
                className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input 
                placeholder="Email"
                value={form.email}
                className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input 
                placeholder="No HP"
                value={form.phone}
                className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <select 
                value={form.loyalty}
                className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none"
                onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
              >
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>
            </div>

            {/* BUTTON */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleAdd}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg"
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