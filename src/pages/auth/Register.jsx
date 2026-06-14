import { useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  FaTools,
  FaUserPlus,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../services/usersAPI";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "guest",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Nama lengkap harus diisi";
    if (!formData.email.includes("@")) return "Email tidak valid";
    if (formData.password.length < 6) return "Password minimal 6 karakter";
    if (formData.password !== formData.confirmPassword)
      return "Konfirmasi password tidak cocok";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const existingUser = await usersAPI.findByEmail(formData.email);

      if (existingUser.length > 0) {
        setError("Email sudah digunakan");
        return;
      }

      await usersAPI.createUser({
        fullname: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError("Gagal membuat akun");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="inline-flex items-center justify-center w-20 h-20 mx-auto p-4 bg-green-50 rounded-2xl border border-green-200 shadow-sm">
          <FaUserPlus className="text-3xl text-green-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            Akun Berhasil Dibuat!
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
            Silakan login dengan akun baru Anda. Selamat datang di Auto Tech!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 mx-auto mb-5 p-3 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
          <FaUserPlus className="text-xl text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Daftar Akun Baru
        </h2>
        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
          Buat akun untuk mengakses sistem manajemen bengkel Auto Tech
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 mb-6 p-4 rounded-xl flex items-center text-red-600 shadow-sm animate-in fade-in slide-in-from-top-2">
          <BiError className="text-red-500 mr-3 text-xl flex-shrink-0" />
          <span className="font-medium text-sm">{error}</span>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="bg-slate-50 border border-slate-200 mb-6 p-4 rounded-xl flex items-center text-slate-600 shadow-sm animate-in fade-in">
          <AiOutlineLoading3Quarters className="mr-3 text-slate-400 text-lg animate-spin flex-shrink-0" />
          <span className="font-medium text-sm">Membuat akun...</span>
        </div>
      )}

      {/* Form */}
      {!loading && !success && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700 tracking-wide">
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaIdCard className="text-slate-400" />
              </div>
              <input
                type="text"
                name="fullName"
                className="w-full pl-11 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                           text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                                           focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700 tracking-wide">
              Alamat Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaEnvelope className="text-slate-400" />
              </div>
              <input
                type="email"
                name="email"
                className="w-full pl-11 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                           text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                                           focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
                placeholder="admin@bengkel.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* role */}
          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700">
              Role Akun
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
      w-full
      rounded-xl
      border
      border-slate-200
      bg-slate-50
      px-4
      py-3
      text-sm
    "
            >
              <option value="guest">Guest</option>

              <option value="member">Member</option>
            </select>
          </div>

          {/* Password Row (Grid for desktop, stack for mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label className="block mb-1.5 text-sm font-semibold text-slate-700 tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  className="w-full pl-11 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                               text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                                               focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
                  placeholder="Min. 6 karakter"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1.5 text-sm font-semibold text-slate-700 tracking-wide">
                Ulangi Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full pl-11 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                               text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                                               focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
                  placeholder="Ulangi password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 px-8 
                                   rounded-xl transition-all duration-300 shadow-md shadow-red-500/20 hover:shadow-lg 
                                   hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-4 
                                   focus:ring-red-500/20 disabled:opacity-70 disabled:cursor-not-allowed 
                                   flex items-center justify-center space-x-2 text-base tracking-wide mt-4"
          >
            <FaUserPlus className="w-4 h-4" />
            <span>Daftar Akun</span>
          </button>
        </form>
      )}

      {/* Footer */}
      {!loading && !success && (
        <div className="mt-8 pt-6 border-t border-slate-200 text-center flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-slate-500 font-medium">
            Sudah punya akun?
          </p>
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-bold tracking-wide transition-colors duration-300 group"
          >
            Masuk ke Akun
            <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </>
  );
}
