import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wrench,
  Car,
  Users,
} from "lucide-react";

export default function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Servis",
      path: "/services",
      icon: Wrench,
    },
    {
      name: "Kendaraan",
      path: "/kendaraan",
      icon: Car,
    },
    {
      name: "Pelanggan",
      path: "/customers",
      icon: Users,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 flex flex-col">
      
      {/* LOGO */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          AUTO<span className="text-red-500">TECH</span>
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          CRM Bengkel Modern
        </p>
      </div>

      {/* MENU */}
      <div className="flex-1 px-4 pt-2">
        <ul className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-4
                    px-4 py-3
                    rounded-2xl
                    transition-all duration-300
                    font-medium
                    ${
                      isActive
                        ? "bg-red-50 text-red-600 border border-red-100 shadow-sm"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `
                  }
                >
                  <Icon size={20} />
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-slate-200">
        <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200">

          <h3 className="font-bold text-slate-800 text-sm">
            AUTO TECH CRM
          </h3>

          <p className="text-xs text-slate-500 leading-6 mt-2">
            Platform manajemen bengkel untuk memantau servis,
            kendaraan, pelanggan, dan laporan operasional.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-green-500 text-xs font-medium">
              ● Online
            </span>

            <span className="text-slate-400 text-xs">
              v1.0.0
            </span>
          </div>

        </div>
      </div>

    </aside>
  );
}