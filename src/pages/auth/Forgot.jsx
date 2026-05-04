import { useState } from "react";
import { BiError } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaTools, FaEnvelope, FaKey } from "react-icons/fa";
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
                setError("Please enter your email address");
            }
        }, 1500);
    };

    if (success) {
        return (
            <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl border-2 border-emerald-400/50 shadow-lg">
                    <FaKey className="text-2xl text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        Reset Link Sent!
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                        Check your email for the password reset link. It expires in 1 hour.
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
                    Lupa Password?
                </h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm mx-auto">
                    Masukkan email Anda dan kami akan kirimkan link reset password
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
                    <span className="font-medium">Mengirim link reset...</span>
                </div>
            )}

            {/* Form */}
            {!loading && !success && (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="flex items-center mb-3 text-sm font-semibold text-slate-300 tracking-wide">
                            <FaEnvelope className="mr-3 text-orange-400 text-lg flex-shrink-0" />
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-slate-600/50 rounded-xl 
                            text-white placeholder-slate-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50 
                            focus:border-orange-400/60 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-lg"
                            placeholder="admin@bengkel.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                        <FaKey className="w-5 h-5" />
                        <span>Kirim Link Reset</span>
                    </button>
                </form>
            )}

            {/* Back to Login */}
            {!loading && !success && (
                <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
                    <button
                        onClick={() => navigate("/login")}
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold tracking-wide transition-colors duration-300"
                    >
                        <FaTools className="w-4 h-4" />
                        Kembali ke Login
                    </button>
                </div>
            )}
        </>
    );
}