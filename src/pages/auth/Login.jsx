import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { FaTools, FaWrench, FaCar, FaShieldAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  /* navigate, state & handleChange*/
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* process form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message || "Login gagal");
          return;
        }
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Terjadi kesalahan");
        } else {
          setError(err.message || "Koneksi bermasalah");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-6 p-4 rounded-xl flex items-center text-red-100 shadow-lg">
      <BiError className="text-red-400 mr-3 text-lg flex-shrink-0" />
      <span className="font-medium">{error}</span>
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6 p-4 rounded-xl flex items-center text-blue-100 shadow-lg">
      <AiOutlineLoading3Quarters className="mr-3 text-blue-400 text-lg animate-spin flex-shrink-0" />
      <span className="font-medium">Memproses login...</span>
    </div>
  ) : null;

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl border-2 border-orange-400/50 shadow-lg">
          <FaTools className="text-xl text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
          🚗 Selamat Datang Kembali
        </h2>
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          Masuk ke sistem manajemen bengkel Auto Tech
        </p>
      </div>

      {/* Error & Loading */}
      {errorInfo}
      {loadingInfo}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
            <FaCar className="mr-3 text-orange-400 text-lg flex-shrink-0" />
            Email / Username
          </label>
          <input
            type="text"
            name="email"
            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                        text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                        focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
            placeholder="admin@bengkel.com"
            value={dataForm.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div>
          <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
            <FaShieldAlt className="mr-3 text-orange-400 text-lg flex-shrink-0" />
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                        text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                        focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
            placeholder="********"
            value={dataForm.password}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 
                    text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 
                    active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed 
                    flex items-center justify-center space-x-3 text-lg tracking-wide"
        >
          <FaWrench className="w-5 h-5" />
          <span>Masuk ke Sistem</span>
        </button>
      </form>

      {/* Footer Links */}
      <div className="mt-10 pt-8 border-t border-slate-700/50 flex flex-col items-center gap-3 text-center">
        <button
          onClick={() => navigate("/forgot")}
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:underline"
        >
          <FaShieldAlt className="w-4 h-4" />
          Lupa Password?
        </button>

        <button
          onClick={() => navigate("/register")}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:underline"
        >
          Belum punya akun? <span className="text-yellow-400 ml-1">Daftar</span>
        </button>
      </div>
    </>
  );
}
