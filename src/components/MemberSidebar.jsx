import {
  FaHome,
  FaCalendarCheck,
  FaCar,
  FaHistory,
  FaGift,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

export default function MemberSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const menus = [
    {
      name: "Dashboard",
      path: "/member",
      icon: FaHome,
    },
    {
      name: "Booking Servis",
      path: "/member/booking",
      icon: FaCalendarCheck,
    },
    {
      name: "Kendaraan Saya",
      path: "/member/kendaraan",
      icon: FaCar,
    },
    {
      name: "Riwayat Servis",
      path: "/member/riwayat",
      icon: FaHistory,
    },
    {
      name: "Reward Point",
      path: "/member/reward",
      icon: FaGift,
    },
    {
      name: "Profil",
      path: "/member/profile",
      icon: FaUser,
    },
  ];

  return (
    <div className="w-72 bg-white border-r border-slate-200 min-h-screen p-6">

      <h1 className="text-3xl font-black">
        AUTO
        <span className="text-red-500">
          TECH
        </span>
      </h1>

      <p className="text-sm text-slate-500 mt-2">
        Member Portal
      </p>

      <div className="mt-10 space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                px-4 py-3 rounded-xl
                transition
                ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "hover:bg-slate-100"
                }
              `
              }
            >
              <Icon />
              {menu.name}
            </NavLink>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="
          mt-10
          w-full
          bg-red-500
          hover:bg-red-600
          text-white
          py-3
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
        "
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}