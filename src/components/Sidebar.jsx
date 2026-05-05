import { MdDashboard } from "react-icons/md";
import { FaTools, FaUsers, FaCar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { ErrorMenuItems } from "./SidebarMenu"; // Aktifkan jika diperlukan

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-3 space-x-3 transition-all duration-300
    ${
      isActive
        ? "bg-red-50 text-red-600 font-bold border border-red-100 shadow-sm"
        : "text-slate-500 font-medium hover:text-slate-900 hover:bg-slate-50 border border-transparent"
    }`;

  return (
    <div className="flex min-h-screen w-72 flex-col bg-white border-r border-slate-200 p-6 z-20">
      
      {/* LOGO */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center border border-red-100">
          <FaTools className="text-xl" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            AUTO<span className="text-red-500">TECH</span>
          </h1>
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
            Sistem Manajemen
          </p>
        </div>
      </div>

      {/* MENU */}
      <ul className="space-y-2">
        <li>
          <NavLink to="/" className={menuClass}>
            <MdDashboard className="text-xl" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={menuClass}>
            <FaTools className="text-xl" />
            <span>Servis</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/kendaraan" className={menuClass}>
            <FaCar className="text-xl" />
            <span>Kendaraan</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className={menuClass}>
            <FaUsers className="text-xl" />
            <span>Pelanggan</span>
          </NavLink>
        </li>

        {/* Divider */}
        <li className="my-6">
          <div className="h-px bg-slate-100"></div>
        </li>

        {/* ERROR MENU (optional) */}
        {/* <ErrorMenuItems /> */}
      </ul>

      {/* FOOTER - LIGHT SAAS STYLE */}
      <div className="mt-auto">
        {/* CARD */}
        <div className="bg-red-50/50 border border-red-100 p-4 rounded-2xl mb-6 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-100 rounded-full opacity-50 blur-xl"></div>
          
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="bg-white p-2 rounded-lg text-red-500 shadow-sm border border-slate-100">
              {/* Ikon Petir / Kecepatan */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <p className="text-sm text-slate-800 font-bold leading-tight">
              Optimasi Bengkel
            </p>
          </div>
          
          <button className="relative z-10 w-full bg-white hover:bg-slate-50 text-red-600 border border-slate-200 hover:border-red-200 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm flex justify-center items-center gap-2">
            <span>Kelola Data</span>
            <span>→</span>
          </button>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-center text-slate-400 font-medium">
          AUTO TECH © {new Date().getFullYear()}
        </p>
      </div>

    </div>
  );
}