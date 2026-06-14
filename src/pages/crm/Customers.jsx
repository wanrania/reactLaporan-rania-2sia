import { useState } from "react";
import { Link } from "react-router-dom";

import { FaPlus, FaTimes, FaUserCog } from "react-icons/fa";

import customersData from "../../data/customers.json";

/* COMPONENTS */
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Badge from "../../components/Badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Customers() {
  /* STATE */
  
  const [customers, setCustomers] = useState(customersData);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  /* FILTER */
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search),
  );

  /* PAGINATION */
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  /* ADD CUSTOMER */
  const handleAdd = () => {
    const newCustomer = {
      id: `C${String(customers.length + 1).padStart(3, "0")}`,
      ...form,
    };

    setCustomers([...customers, newCustomer]);

    setForm({
      name: "",
      email: "",
      phone: "",
      loyalty: "Bronze",
    });

    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader
          title="Customers Bengkel"
          breadcrumb={["Dashboard", "Customers"]}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button type="danger">
                <FaPlus className="text-sm" />
                Tambah Customer
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Tambah Customer</DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <FormInput
                  label="Nama Lengkap"
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />

                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Contoh: budi@mail.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

                <FormInput
                  label="Nomor HP"
                  placeholder="08123456789"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Loyalty Level
                  </label>

                  <select
                    value={form.loyalty}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        loyalty: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="danger" className="flex-1" onClick={handleAdd}>
                    Simpan
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </PageHeader>
      </div>

      {/* FILTER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 pt-2 pb-6">
        {/* LIMIT */}
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <span>Tampilkan</span>

          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));

              setCurrentPage(1);
            }}
            className="bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500/20"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

          <span>entri</span>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari nama, email, atau no HP..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-72 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-500/20 shadow-sm"
        />
      </div>

      {/* TABLE */}
      <Table
        headers={["ID", "Nama Pelanggan", "Email", "No HP", "Level"]}
        footer={
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 text-sm">
            {/* INFO */}
            <span className="font-medium text-slate-500">
              Menampilkan{" "}
              {filteredCustomers.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredCustomers.length)} dari{" "}
              {filteredCustomers.length} data
            </span>

            {/* PAGINATION */}
            <div className="flex items-center gap-2">
              <Button
                type="secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </Button>

              <div className="hidden sm:flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    type={currentPage === i + 1 ? "danger" : "secondary"}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                type="secondary"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        }
      >
        {currentData.length > 0 ? (
          currentData.map((c) => (
            <tr
              key={c.id}
              className="group hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-slate-500">{c.id}</td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:scale-110 transition-transform">
                    <FaUserCog className="w-4 h-4" />
                  </div>

                  <Link
                    to={`/customers/${c.id}`}
                    className="font-semibold text-red-500 hover:text-red-600 hover:underline"
                  >
                    {c.name}
                  </Link>
                </div>
              </td>

              <td className="px-6 py-4 text-slate-500">{c.email}</td>

              <td className="px-6 py-4 font-medium text-slate-600">
                {c.phone}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <Badge type={c.loyalty.toLowerCase()}>{c.loyalty}</Badge>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="5"
              className="py-8 text-center font-medium text-slate-500"
            >
              Data customer tidak ditemukan
            </td>
          </tr>
        )}
      </Table>

    </div>
  );
}

/* FORM INPUT */
function FormInput({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
      />
    </div>
  );
}
