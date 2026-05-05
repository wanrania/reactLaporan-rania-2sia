import { Outlet } from "react-router-dom";
import { FaWrench, FaCog, FaChartLine, FaBoxOpen, FaUsers, FaTools, FaCarSide } from "react-icons/fa";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
            
            {/* Subtle Background Elements (Matching the clean dashboard feel) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-3xl opacity-80"></div>
            </div>

            {/* Main Container */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 z-10 w-full max-w-7xl px-4">
                
                {/* LEFT: Hero & Branding (Desktop Only) */}
                <div className="hidden lg:flex flex-col flex-1 pr-12 max-w-xl">
                    {/* Logo Header */}
                    <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-200">
                        <div className="relative w-16 h-16 flex items-center justify-center bg-red-50 rounded-2xl border border-red-100 shadow-sm">
                            <FaWrench className="text-2xl text-red-500 absolute" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                                AUTO TECH
                            </h1>
                            <p className="text-slate-500 text-sm font-medium tracking-wide">Bengkel Digital Pro</p>
                        </div>
                    </div>

                    {/* Hero Title */}
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-slate-900">
                        Sistem Manajemen <br className="hidden lg:block"/> 
                        <span className="text-red-500">
                            Bengkel Modern
                        </span>
                    </h2>
                    
                    <p className="text-slate-500 text-lg mb-10 font-normal leading-relaxed">
                        Kelola servis kendaraan, inventaris suku cadang, dan tim mekanik Anda dengan sistem paling canggih dan user-friendly.
                    </p>
                    
                    {/* Feature Cards (Clean Style) */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="group flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                            <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <FaChartLine className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800 mb-0.5">Analitik Laporan</h3>
                                <p className="text-slate-500 text-sm">Pantau performa harian & pendapatan real-time</p>
                            </div>
                        </div>
                        
                        <div className="group flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                            <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <FaBoxOpen className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800 mb-0.5">Inventaris Otomatis</h3>
                                <p className="text-slate-500 text-sm">Kelola stok dengan notifikasi low-stock</p>
                            </div>
                        </div>
                        
                        <div className="group flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                            <div className="p-3 bg-red-50 text-red-500 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <FaUsers className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800 mb-0.5">Manajemen Tim</h3>
                                <p className="text-slate-500 text-sm">Jadwal mekanik dan pembagian tugas otomatis</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Form Card */}
                <div className="w-full max-w-md lg:max-w-lg bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    
                    {/* Mobile Header */}
                    <div className="lg:hidden text-center mb-10 pb-8 border-b border-slate-100">
                        <div className="flex items-center justify-center mb-5 mx-auto w-16 h-16 bg-red-50 rounded-2xl border border-red-100 shadow-sm relative">
                            <FaTools className="text-xl text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
                            AUTO TECH
                        </h2>
                        <p className="text-slate-500 text-sm font-medium">Bengkel Digital Pro</p>
                    </div>

                    {/* Render Login/Register Form */}
                    <div className="w-full">
                        <Outlet />
                    </div>

                    {/* Footer */}
                    <div className="mt-10 pt-6 border-t border-slate-100 text-center">
                        <p className="text-xs text-slate-400 font-medium">
                            © {new Date().getFullYear()} <span className="text-slate-700 font-bold">AUTO TECH</span> 
                            <br className="sm:hidden" /> All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}