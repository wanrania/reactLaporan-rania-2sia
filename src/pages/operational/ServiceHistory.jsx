import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaWrench } from "react-icons/fa";

import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Badge from "../../components/Badge";

import serviceHistoryData from "../../data/serviceHistory.json";

export default function ServiceHistory() {
  const [histories, setHistories] = useState(serviceHistoryData);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);

  // FILTER
  const filteredHistory = histories.filter(
    (item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      item.service.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  // PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = filteredHistory.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(
    filteredHistory.length / itemsPerPage
  );

  const statusColor = {
    Selesai: "success",
    Diproses: "primary",
    Pending: "warning",
    Dibatalkan: "danger",
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader
          title="Riwayat Servis"
          breadcrumb={["Dashboard", "Riwayat Servis"]}
        >
          <Button type="danger">
            <FaPlus />
            Tambah Riwayat
          </Button>
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
          placeholder="Cari customer, kendaraan, layanan..."
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
        headers={[
          "ID",
          "Tanggal",
          "Customer",
          "Kendaraan",
          "Layanan",
          "Mekanik",
          "Biaya",
          "Status",
        ]}
        footer={
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 text-sm">
            <span className="font-medium text-slate-500">
              Menampilkan{" "}
              {filteredHistory.length === 0
                ? 0
                : indexOfFirstItem + 1}
              {" - "}
              {Math.min(
                indexOfLastItem,
                filteredHistory.length
              )}
              {" dari "}
              {filteredHistory.length} data
            </span>

            <div className="flex items-center gap-2">
              <Button
                type="secondary"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }
              >
                Prev
              </Button>

              <div className="hidden sm:flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    type={
                      currentPage === i + 1
                        ? "danger"
                        : "secondary"
                    }
                    onClick={() =>
                      setCurrentPage(i + 1)
                    }
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button
                type="secondary"
                disabled={
                  currentPage === totalPages ||
                  totalPages === 0
                }
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }
              >
                Next
              </Button>
            </div>
          </div>
        }
      >
        {currentData.length > 0 ? (
          currentData.map((item) => (
            <tr
              key={item.id}
              className="group hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-slate-500">
                {item.id}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.date}
              </td>

              <td className="px-6 py-4 font-semibold text-slate-700">
                {item.customer}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.vehicle}
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-500 group-hover:scale-110 transition-transform">
                    <FaWrench className="w-4 h-4" />
                  </div>

                  <Link
                    to={`/service-history/${item.id}`}
                    className="font-semibold text-red-500 hover:text-red-600 hover:underline"
                  >
                    {item.service}
                  </Link>
                </div>
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.mechanic}
              </td>

              <td className="px-6 py-4 font-semibold text-green-600">
                Rp {item.cost.toLocaleString("id-ID")}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <Badge
                    type={statusColor[item.status]}
                  >
                    {item.status}
                  </Badge>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="8"
              className="py-8 text-center font-medium text-slate-500"
            >
              Data riwayat servis tidak ditemukan
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}