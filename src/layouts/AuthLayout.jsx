import { Outlet } from "react-router-dom";
import { FaWrench, FaCog, FaChartLine, FaBoxOpen, FaUsers, FaTools, FaCarSide, FaOilCan } from "react-icons/fa";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900/90 to-black p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-1/4 -right-48 w-80 h-80 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>

            {/* Main Container */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 z-10 w-full max-w-7xl px-4">
                
                {/* LEFT: Hero & Branding (Desktop Only) */}
                <div className="hidden lg:flex flex-col flex-1 text-white pr-12 max-w-xl">
                    {/* Logo Header */}
                    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-orange-500/20">
                        <div className="relative w-20 h-20 p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl border-2 border-orange-400/30 shadow-2xl">
                            <FaCog className="text-3xl text-orange-400 absolute animate-spin-slow" />
                            <FaWrench className="text-xl text-white absolute inset-0 m-auto transform rotate-45 drop-shadow-lg" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black tracking-widest uppercase bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                AUTO TECH
                            </h1>
                            <p className="text-orange-300/80 text-sm font-semibold tracking-wider uppercase">Bengkel Digital Pro</p>
                        </div>
                    </div>

                    {/* Hero Title */}
                    <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
                        Sistem Manajemen <br className="hidden lg:block"/> 
                        <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text drop-shadow-lg">
                            Bengkel Modern
                        </span>
                    </h2>
                    
                    <p className="text-slate-300/90 text-xl mb-12 font-light leading-relaxed tracking-wide">
                        Kelola servis kendaraan, inventaris suku cadang, dan tim mekanik Anda dengan sistem paling canggih dan user-friendly.
                    </p>
                    
                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-orange-500/10 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine className="text-2xl text-orange-400 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-orange-300 transition-colors">📊 Analitik Laporan</h3>
                                <p className="text-slate-400 text-sm font-medium">Pantau performa harian, pendapatan, dan progres servis secara real-time</p>
                            </div>
                        </div>
                        
                        <div className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-orange-500/10 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaBoxOpen className="text-2xl text-orange-400 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-orange-300 transition-colors">📦 Inventaris Otomatis</h3>
                                <p className="text-slate-400 text-sm font-medium">Kelola stok suku cadang dengan notifikasi low-stock otomatis</p>
                            </div>
                        </div>
                        
                        <div className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-orange-500/10 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="text-2xl text-orange-400 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-orange-300 transition-colors">👥 Manajemen Tim</h3>
                                <p className="text-slate-400 text-sm font-medium">Jadwal mekanik, performa individu, dan pembagian tugas otomatis</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Form Card */}
                <div className="w-full max-w-md lg:max-w-lg bg-gradient-to-b from-slate-800/95 via-gray-800/90 to-slate-900/95 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/50 hover:shadow-3xl hover:shadow-orange-500/20 transition-all duration-700">
                    
                    {/* Mobile Header */}
                    <div className="lg:hidden text-center mb-10 pb-8 border-b border-orange-500/20">
                        <div className="flex items-center justify-center mb-6 mx-auto w-20 h-20 p-3 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl border-4 border-orange-400/40 shadow-2xl">
                            <FaTools className="text-2xl text-white drop-shadow-lg" />
                            <FaCarSide className="text-xl text-orange-300 absolute -right-2 -bottom-2" />
                        </div>
                        <h2 className="text-3xl font-black tracking-widest bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                            AUTO TECH
                        </h2>
                        <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase">Bengkel Digital</p>
                    </div>

                    {/* Render Login/Register Form */}
                    <div className="w-full">
                        <Outlet />
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-8 border-t border-slate-700/50 text-center">
                        <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                            © {new Date().getFullYear()} <span className="text-orange-400 font-bold">AUTO TECH</span> 
                            <br className="sm:hidden" /> Bengkel Modern Pro
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom Tailwind Animations */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1); 
                    }
                    33% { 
                        transform: translate(30px, -50px) scale(1.1); 
                    }
                    66% { 
                        transform: translate(-20px, 20px) scale(0.9); 
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }
            `}</style>
        </div>
    );
}