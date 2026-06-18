import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { FaWrench, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../services/usersAPI";

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

    try {
      setLoading(true);
      setError("");

      const user = await usersAPI.login(dataForm.email, dataForm.password);

      if (user.length === 0) {
        setError("Email atau password salah");
        return;
      }

      const loginUser = user[0];

      // simpan session
      localStorage.setItem("user", JSON.stringify(loginUser));

      // redirect berdasarkan role
      if (loginUser.role === "admin") {
        navigate("/admin");
      } else if (loginUser.role === "member") {
        navigate("/member");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Gagal login");
    } finally {
      setLoading(false);
    }
  };

  /* error & loading status */
  const errorInfo = error ? (
    <div className="bg-red-50 border border-red-200 mb-6 p-4 rounded-xl flex items-center text-red-600 shadow-sm">
      <BiError className="text-red-500 mr-3 text-xl flex-shrink-0" />
      <span className="font-medium text-sm">{error}</span>
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-slate-50 border border-slate-200 mb-6 p-4 rounded-xl flex items-center text-slate-600 shadow-sm">
      <AiOutlineLoading3Quarters className="mr-3 text-slate-400 text-lg animate-spin flex-shrink-0" />
      <span className="font-medium text-sm">Memproses login...</span>
    </div>
  ) : null;

  return (
    <>
      {/* Header Form */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Selamat Datang Kembali
        </h2>
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          Masuk ke sistem manajemen bengkel Auto Tech
        </p>
      </div>

      {/* Error & Loading */}
      {errorInfo}
      {loadingInfo}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 text-sm font-semibold text-slate-700 tracking-wide">
            Email / Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaEnvelope className="text-slate-400" />
            </div>
            <input
              type="text"
              name="email"
              className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl 
                         text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                         focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
              placeholder="admin@bengkel.com"
              value={dataForm.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-slate-700 tracking-wide">
              Password
            </label>
            {/* Lupa Password dipindah ke atas dekat label agar lebih modern */}
            <button
              type="button"
              onClick={() => navigate("/forgot")}
              className="text-red-500 hover:text-red-600 text-sm font-semibold transition-colors"
            >
              Lupa Password?
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaLock className="text-slate-400" />
            </div>
            <input
              type="password"
              name="password"
              className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl 
                         text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                         focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
              placeholder="********"
              value={dataForm.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 px-8 
                     rounded-xl transition-all duration-300 shadow-md shadow-red-500/20 hover:shadow-lg 
                     hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-4 
                     focus:ring-red-500/20 disabled:opacity-70 disabled:cursor-not-allowed 
                     flex items-center justify-center space-x-2 text-base tracking-wide mt-2"
        >
          <FaWrench className="w-4 h-4" />
          <span>Masuk ke Sistem</span>
        </button>
      </form>

      {/* Footer Register */}
      <div className="mt-8 pt-6 flex flex-col items-center gap-3 text-center">
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          Belum punya akun?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-red-500 hover:text-red-600 font-bold transition-colors hover:underline"
          >
            Daftar Sekarang
          </button>
        </p>
      </div>
    </>
  );
}
