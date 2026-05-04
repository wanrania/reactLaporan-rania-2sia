import { FaBell, FaSearch, FaTools, FaUserCog } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 
bg-slate-900/70 backdrop-blur-md border-b border-white/10 
relative z-40">
      
      {/* LEFT: LOGO / TITLE */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-md">
          <FaTools className="text-white text-lg" />
        </div>
        <div>
          <h1 className="text-white font-bold tracking-wide">AUTO TECH</h1>
          <p className="text-xs text-slate-400">Dashboard Bengkel</p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative w-full max-w-md mx-6">
        <input
          onClick={() => setIsSearchOpen(true)}
          className="w-full pl-4 pr-10 py-2 bg-white/5 border border-white/10 rounded-xl 
          text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-orange-500/40"
          type="text"
          placeholder="Cari kendaraan, pelanggan..."
        />
        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* NOTIF */}
        <div className="relative p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl cursor-pointer transition">
          <FaBell className="text-orange-400" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* SETTINGS */}
        <div className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl cursor-pointer transition">
          <SlSettings className="text-slate-300" />
        </div>

        {/* PROFILE */}
        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition">
            
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
              <FaUserCog className="text-white" />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold text-white">Rania</span>
              <span className="text-xs text-slate-400">Admin Bengkel</span>
            </div>
          </div>

          {/* DROPDOWN */}
          <div className="absolute right-0 mt-2 w-44 
  bg-slate-800 border border-white/10 rounded-xl shadow-lg 
  opacity-0 group-hover:opacity-100 transition 
  pointer-events-none group-hover:pointer-events-auto
  z-50"
>
            <ul className="text-sm text-slate-300">
              <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-red-500/20 text-red-400 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 w-full max-w-xl p-6 rounded-2xl border border-white/10 shadow-xl"
          >
            <h2 className="text-lg font-bold text-white mb-4">
              Cari Data Bengkel
            </h2>

            <div className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Cari pelanggan / kendaraan..."
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white outline-none"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            <div className="mt-4 text-sm text-slate-400">
              <p>🔧 Pencarian Terakhir:</p>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-white cursor-pointer">Servis Honda Beat</li>
                <li className="hover:text-white cursor-pointer">Customer Rania</li>
                <li className="hover:text-white cursor-pointer">Invoice #1023</li>
              </ul>
            </div>

            <button
              onClick={() => setIsSearchOpen(false)}
              className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}