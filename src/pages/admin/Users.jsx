import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaUser, FaEdit } from "react-icons/fa";

import { usersAPI } from "../../services/usersAPI";

import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Badge from "../../components/Badge";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "guest",
  });

  const fetchUsers = async () => {
    try {
      const data = await usersAPI.getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const totalAdmin = users.filter((u) => u.role === "admin").length;

  const totalMember = users.filter((u) => u.role === "member").length;

  const totalGuest = users.filter((u) => u.role === "guest").length;

  const handleSave = async () => {
    try {
      if (!form.fullname || !form.email || !form.password) {
        alert("Semua field wajib diisi");
        return;
      }

      if (editId) {
        await usersAPI.updateUser(editId, form);
      } else {
        await usersAPI.createUser(form);
      }

      await fetchUsers();

      setForm({
        fullname: "",
        email: "",
        password: "",
        role: "guest",
      });

      setEditId(null);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan user");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus user ini?");

    if (!confirmDelete) return;

    try {
      await usersAPI.deleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus user");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {/* HEADER */}
      <div className="px-6 pt-6">
        <PageHeader title="Manajemen User" breadcrumb={["Dashboard", "Users"]}>
          <Button
            type="danger"
            onClick={() => {
              setEditId(null);

              setForm({
                fullname: "",
                email: "",
                password: "",
                role: "guest",
              });

              setOpenModal(true);
            }}
          >
            <FaPlus className="text-sm" />
            Tambah User
          </Button>
        </PageHeader>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-2xl border p-5">
            <p className="text-slate-500 text-sm">Total User</p>
            <h3 className="text-3xl font-bold">{users.length}</h3>
          </div>

          <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
            <p className="text-red-500 text-sm">Admin</p>
            <h3 className="text-3xl font-bold text-red-600">{totalAdmin}</h3>
          </div>

          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
            <p className="text-blue-500 text-sm">Member</p>
            <h3 className="text-3xl font-bold text-blue-600">{totalMember}</h3>
          </div>

          <div className="bg-slate-100 rounded-2xl border p-5">
            <p className="text-slate-500 text-sm">Guest</p>
            <h3 className="text-3xl font-bold text-slate-700">{totalGuest}</h3>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-6">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <span>Tampilkan</span>

          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white border border-slate-200 rounded-lg px-3 py-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

          <span>entri</span>
        </div>

        <input
          type="text"
          placeholder="Cari nama atau email..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-72 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm shadow-sm"
        />
      </div>

      {/* TABLE */}
      <Table
        headers={["ID", "Nama User", "Email", "Role", "Aksi"]}
        footer={
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5 text-sm">
            <span className="font-medium text-slate-500">
              Menampilkan{" "}
              {filteredUsers.length === 0 ? 0 : indexOfFirstItem + 1}
              {" - "}
              {Math.min(indexOfLastItem, filteredUsers.length)}
              {" dari "}
              {filteredUsers.length}
              {" data"}
            </span>

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
        {loading ? (
          <tr>
            <td colSpan="5" className="text-center py-8">
              Loading...
            </td>
          </tr>
        ) : currentData.length > 0 ? (
          currentData.map((user) => (
            <tr
              key={user.id}
              className="group hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4">{user.id}</td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100">
                    <FaUser />
                  </div>

                  <span className="font-semibold">{user.fullname}</span>
                </div>
              </td>

              <td className="px-6 py-4">{user.email}</td>

              <td className="px-6 py-4">
                <Badge
                  type={
                    user.role === "admin"
                      ? "gold"
                      : user.role === "member"
                        ? "silver"
                        : "bronze"
                  }
                >
                  {user.role}
                </Badge>
              </td>

              <td className="px-6 py-4">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => {
                      setForm({
                        fullname: user.fullname,
                        email: user.email,
                        password: user.password,
                        role: user.role,
                      });

                      setEditId(user.id);
                      setOpenModal(true);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="py-8 text-center text-slate-500">
              Data user tidak ditemukan
            </td>
          </tr>
        )}
      </Table>
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6">
              {editId ? "Edit User" : "Tambah User"}
            </h2>

            <div className="space-y-4">
              <FormInput
                label="Nama Lengkap"
                value={form.fullname}
                onChange={(e) =>
                  setForm({
                    ...form,
                    fullname: e.target.value,
                  })
                }
              />

              <FormInput
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

              <FormInput
                label="Password"
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />

              <select
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role: e.target.value,
                  })
                }
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="admin">Admin</option>

                <option value="member">Member</option>

                <option value="guest">Guest</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setOpenModal(false);

                  setEditId(null);

                  setForm({
                    fullname: "",
                    email: "",
                    password: "",
                    role: "guest",
                  });
                }}
                className="px-5 py-2 border rounded-xl"
              >
                Batal
              </button>

              <button
                onClick={handleSave}
                className="px-5 py-2 bg-red-500 text-white rounded-xl"
              >
                {editId ? "Update" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
      />
    </div>
  );
}
