import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import { SelectField } from "./components/SelectField";

export default function FormPendaftaran() {
  const [form, setForm] = useState({
    nama: "",
    topik: "",
    durasi: "",
    jenis: "",
    metode: "",
  });

  const [error, setError] = useState({});           // Menyimpan pesan error tiap field
  const [isValid, setIsValid] = useState(false);    // Menyimpan status validasi form
  const [hasil, setHasil] = useState(null);     // Menyimpan hasil booking jika valid

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    // NAMA
    if (!form.nama) {
      err.nama = "Nama wajib diisi";
    } else if (/\d/.test(form.nama)) {
      err.nama = "Tidak boleh angka";
    } else if (form.nama.length < 3) {
      err.nama = "Minimal 3 karakter";
    }

    // TOPIK
    if (!form.topik) {
      err.topik = "Topik wajib diisi";
    } else if (form.topik.length < 5) {
      err.topik = "Minimal 5 karakter";
    } else if (/^\d+$/.test(form.topik)) {
      err.topik = "Tidak boleh hanya angka";
    }

    // DURASI
    if (!form.durasi) {
      err.durasi = "Durasi wajib diisi";
    } else if (!/^[0-9]+$/.test(form.durasi)) {
      err.durasi = "Harus angka";
    } else if (parseInt(form.durasi) < 15) {
      err.durasi = "Minimal 15 menit";
    }

    // SELECT
    if (!form.jenis) err.jenis = "Pilih jenis";
    if (!form.metode) err.metode = "Pilih metode";

    setError(err);

    const valid = Object.keys(err).length === 0;
    setIsValid(valid);
  };

  // VALIDASI REALTIME
  useEffect(() => {
    validate();
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      setHasil({
        ...form,
        totalBiaya: form.durasi * 10000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-pink-100 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Booking Konsultasi Mentoring
        </h2>

        <InputField
          label="Nama"
          type="text"
          name="nama"
          placeholder="Masukkan Nama"
          value={form.nama}
          onChange={handleChange}
          error={error.nama}
        />

        <InputField
          label="Topik"
          type="text"
          name="topik"
          placeholder="Masukkan Topik"
          value={form.topik}
          onChange={handleChange}
          error={error.topik}
        />

        <InputField
          label="Durasi (menit)"
          type="text"
          name="durasi"
          placeholder="Masukkan Durasi"
          value={form.durasi}
          onChange={handleChange}
          error={error.durasi}
        />

        <SelectField
          label="Jenis Konsultasi"
          name="jenis"
          value={form.jenis}
          onChange={handleChange}
          options={[
            { label: "Karir", value: "karir" },
            { label: "Akademik", value: "akademik" },
            { label: "Bisnis", value: "bisnis" },
          ]}
          error={error.jenis}
        />

        <SelectField
          label="Metode"
          name="metode"
          value={form.metode}
          onChange={handleChange}
          options={[
            { label: "Online", value: "online" },
            { label: "Offline", value: "offline" },
          ]}
          error={error.metode}
        />

        {/* BUTTON MUNCUL HANYA JIKA VALID */}
        {isValid && (
          <button className="w-full bg-green-500 text-white p-2 rounded mt-3 hover:bg-green-600">
            Booking
          </button>
        )}

        {/* HASIL */}
        {hasil && (
          <div className="mt-4 p-3 bg-green-100 rounded">
            <h3 className="font-bold mb-2">Hasil Booking:</h3>
            <p>Nama: {hasil.nama}</p>
            <p>Topik: {hasil.topik}</p>
            <p>Durasi: {hasil.durasi} menit</p>
            <p>Jenis: {hasil.jenis}</p>
            <p>Metode: {hasil.metode}</p>
            <p className="font-semibold">
              Total Biaya: Rp {hasil.totalBiaya}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}