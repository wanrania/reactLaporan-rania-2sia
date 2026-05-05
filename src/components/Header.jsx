import { FaBell, FaSearch, FaTools, FaUserCog } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 
                    bg-white/80 backdrop-blur-md border-b border-slate-200 
                    relative z-40 shadow-sm">
      
      {/* LEFT: TITLE (Opsional, karena logo sudah ada di Sidebar, tapi tetap dipertahankan) */}
      <div className="flex items-center gap-3">
        {/* Jika Anda ingin menyembunyikan ini di Desktop karena sudah ada di sidebar, tambahkan class lg:hidden */}
        <div className="p-2 bg-red-50 border border-red-100 rounded-xl lg:hidden">
          <FaTools className="text-red-500 text-lg" />
        </div>
        <div className="hidden sm:block lg:hidden">
          <h1 className="text-slate-900 font-bold tracking-tight">AUTO TECH</h1>
          <p className="text-xs text-slate-500 font-medium">Dashboard Bengkel</p>
        </div>
        
        {/* Judul Halaman Aktif (Bisa disesuaikan dengan routing nanti) */}
        <div className="hidden lg:block ml-2">
            <h2 className="text-xl font-bold text-slate-800">Dashboard Overview</h2>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative w-full max-w-md mx-6 hidden md:block">
        <input
          onClick={() => setIsSearchOpen(true)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl 
                     text-slate-700 placeholder-slate-400 text-sm font-medium
                     outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all cursor-text"
          type="text"
          placeholder="Cari kendaraan, pelanggan, nota..."
          readOnly // Mencegah keyboard muncul di HP jika ini hanya trigger modal
        />
        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4 ml-auto">

        {/* SEARCH ICON MOBILE */}
        <div 
          onClick={() => setIsSearchOpen(true)}
          className="md:hidden p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer transition text-slate-500"
        >
          <FaSearch />
        </div>

        {/* NOTIF */}
        <div className="relative p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer transition">
          <FaBell className="text-slate-500" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            3
          </span>
        </div>

        {/* SETTINGS */}
        <div className="hidden sm:block p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer transition">
          <SlSettings className="text-slate-500" />
        </div>

        {/* PROFILE */}
        <div className="relative group cursor-pointer ml-1">
          <div className="flex items-center gap-3 bg-white px-2 sm:px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 transition shadow-sm">
            
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-500 border border-red-100">
              <FaUserCog className="text-sm" />
            </div>

            <div className="hidden sm:flex flex-col pr-1">
              <span className="text-sm font-bold text-slate-800 leading-tight">Rania</span>
              <span className="text-[11px] font-medium text-slate-500">Admin Bengkel</span>
            </div>
          </div>

          {/* DROPDOWN */}
          <div className="absolute right-0 mt-2 w-48 
                          bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100
                          pointer-events-none group-hover:pointer-events-auto z-50 overflow-hidden"
          >
            <ul className="text-sm text-slate-700 py-1">
              <li className="px-4 py-2.5 hover:bg-slate-50 font-medium cursor-pointer transition-colors">Profil Saya</li>
              <li className="px-4 py-2.5 hover:bg-slate-50 font-medium cursor-pointer transition-colors">Pengaturan</li>
              <div className="h-px bg-slate-100 my-1"></div>
              <li className="px-4 py-2.5 hover:bg-red-50 text-red-600 font-bold cursor-pointer transition-colors">
                Keluar Aplikasi
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-20 z-[60]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-2xl mx-4 transform transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Pencarian Global
              </h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-medium"
              >
                ESC
              </button>
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                autoFocus
                type="text"
                placeholder="Ketik untuk mencari pelanggan, nopol kendaraan..."
                className="w-full bg-slate-50 border border-slate-200 pl-11 pr-4 py-3.5 rounded-xl text-slate-800 font-medium outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all"
              />
            </div>

            <div className="mt-6 text-sm">
              <p className="text-slate-500 font-semibold mb-3">Pencarian Terakhir</p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer text-slate-700 font-medium transition-colors">
                  <FaSearch className="text-slate-400 text-xs" /> Servis Honda Beat
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer text-slate-700 font-medium transition-colors">
                  <FaSearch className="text-slate-400 text-xs" /> Customer Rania
                </li>
                <li className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer text-slate-700 font-medium transition-colors">
                  <FaSearch className="text-slate-400 text-xs" /> Invoice #1023
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}