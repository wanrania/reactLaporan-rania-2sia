import { MdDashboard } from "react-icons/md";
import { FaTools, FaUsers, FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ErrorMenuItems } from "./SidebarMenu";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-3 space-x-3 transition-all duration-300
    ${
      isActive
        ? "bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30"
        : "text-slate-400 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="flex min-h-screen w-72 flex-col bg-slate-900 border-r border-white/10 p-6">
      
      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          AUTO<span className="text-orange-400">TECH</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Sistem Manajemen Bengkel
        </p>
      </div>

      {/* MENU */}
      <ul className="space-y-2">

        <li>
          <NavLink to="/" className={menuClass}>
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={menuClass}>
            <FaTools className="text-lg" />
            <span>Servis</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/kendaraan" className={menuClass}>
            <FaCar className="text-lg" />
            <span>Kendaraan</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className={menuClass}>
            <FaUsers className="text-lg" />
            <span>Pelanggan</span>
          </NavLink>
        </li>

        {/* Divider */}
        <li className="my-6">
          <div className="h-px bg-white/10"></div>
        </li>

        {/* ERROR MENU (optional) */}
        <ErrorMenuItems />

      </ul>

      {/* FOOTER */}
      <div className="mt-auto">
        
        {/* CARD */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl shadow-lg mb-6">
          <p className="text-sm text-white font-medium">
            Kelola data bengkel dengan mudah 🚗
          </p>

          <button className="mt-3 w-full bg-white text-slate-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Tambah Data
          </button>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-slate-500">
          © 2026 AUTO TECH
        </p>
      </div>

    </div>
  );
}