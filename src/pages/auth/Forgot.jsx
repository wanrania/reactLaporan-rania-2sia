import { useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaTools, FaEnvelope, FaKey, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            if (email) {
                setSuccess(true);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                setError("Silakan masukkan alamat email Anda");
            }
        }, 1500);
    };

    if (success) {
        return (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto p-4 bg-green-50 rounded-2xl border border-green-200 shadow-sm">
                    <FaKey className="text-3xl text-green-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                        Link Reset Terkirim!
                    </h2>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                        Silakan cek email Anda untuk instruksi reset password. Link akan kedaluwarsa dalam 1 jam.
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
                    <FaKey className="text-xl text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                    Lupa Password?
                </h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                    Masukkan email Anda dan kami akan kirimkan link untuk mereset password
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
                    <span className="font-medium text-sm">Mengirim link reset...</span>
                </div>
            )}

            {/* Form */}
            {!loading && !success && (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-slate-700 tracking-wide">
                            Alamat Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FaEnvelope className="text-slate-400" />
                            </div>
                            <input
                                type="email"
                                className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl 
                                           text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none 
                                           focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-300"
                                placeholder="admin@bengkel.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                        <FaKey className="w-4 h-4" />
                        <span>Kirim Link Reset</span>
                    </button>
                </form>
            )}

            {/* Back to Login */}
            {!loading && !success && (
                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center">
                    <button
                        onClick={() => navigate("/login")}
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors duration-300 group"
                    >
                        <FaArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Login
                    </button>
                </div>
            )}
        </>
    );
}