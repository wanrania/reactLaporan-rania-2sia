import { useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaTools, FaUserPlus, FaEnvelope, FaLock, FaIdCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) return "Nama lengkap harus diisi";
        if (!formData.email.includes('@')) return "Email tidak valid";
        if (formData.password.length < 6) return "Password minimal 6 karakter";
        if (formData.password !== formData.confirmPassword) return "Konfirmasi password tidak cocok";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError("");

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }, 1500);
    };

    if (success) {
        return (
            <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl border-2 border-emerald-400/50 shadow-lg">
                    <FaUserPlus className="text-2xl text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        Akun Berhasil Dibuat!
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                        Silakan login dengan akun baru Anda. Selamat datang di Auto Tech!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl border-2 border-orange-400/50 shadow-lg">
                    <FaTools className="text-xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Daftar Akun Baru
                </h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                    Buat akun untuk mengakses sistem manajemen bengkel Auto Tech
                </p>
            </div>

            {/* Error */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-6 p-4 rounded-xl flex items-center text-red-100">
                    <BiError className="text-red-400 mr-3 text-lg flex-shrink-0" />
                    <span className="font-medium">{error}</span>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6 p-4 rounded-xl flex items-center text-blue-100">
                    <AiOutlineLoading3Quarters className="mr-3 text-blue-400 text-lg animate-spin flex-shrink-0" />
                    <span className="font-medium">Membuat akun...</span>
                </div>
            )}

            {/* Form */}
            {!loading && !success && (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
                            <FaIdCard className="mr-3 text-orange-400 text-lg flex-shrink-0" />
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                            text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                            focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
                            <FaEnvelope className="mr-3 text-orange-400 text-lg flex-shrink-0" />
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                            text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                            focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
                            placeholder="admin@bengkel.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
                            <FaLock className="mr-3 text-orange-400 text-lg flex-shrink-0" />
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                            text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                            focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
                            placeholder="Minimal 6 karakter"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
                            <FaLock className="mr-3 text-orange-400 text-lg flex-shrink-0" />
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                            text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                            focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
                            placeholder="Ulangi password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 
                        text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 
                        active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed 
                        flex items-center justify-center space-x-3 text-lg tracking-wide"
                    >
                        <FaUserPlus className="w-5 h-5" />
                        <span>Daftar Akun</span>
                    </button>
                </form>
            )}

            {/* Footer */}
            {!loading && !success && (
                <div className="mt-10 pt-8 border-t border-slate-700/50 text-center space-y-3">
                    <p className="text-xs text-slate-500 font-medium tracking-wider">
                        Sudah punya akun?
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:underline"
                    >
                        <FaTools className="w-4 h-4" />
                        Masuk ke Akun
                    </button>
                </div>
            )}
        </>
    );
}