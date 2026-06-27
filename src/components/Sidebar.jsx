import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wrench,
  Car,
  Users,
  ClipboardList,
  Gift,
  BadgePercent,
  MessageSquare,
  UserCheck,
  UserCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";

export default function AppSidebar() {
  const { state } = useSidebar();

  const collapsed = state === "collapsed";

  const menuGroups = [
    {
      title: "Dashboard",
      items: [
        {
          name: "Dashboard",
          path: "/Dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Users",
          path: "/users",
          icon: UserCog,
        },
      ],
    },

    {
      title: "CRM",
      items: [
        {
          name: "Customers",
          path: "/customers",
          icon: Users,
        },
        {
          name: "Membership",
          path: "/membership",
          icon: UserCheck,
        },
        {
          name: "Feedback",
          path: "/feedback",
          icon: MessageSquare,
        },
        {
          name: "Follow Up",
          path: "/follow-up",
          icon: UserCog,
        },
      ],
    },

    {
      title: "Operasional",
      items: [
        {
          name: "Kendaraan",
          path: "/kendaraan",
          icon: Car,
        },
        {
          name: "Layanan Servis",
          path: "/services",
          icon: Wrench,
        },
        {
          name: "Riwayat Servis",
          path: "/service-history",
          icon: ClipboardList,
        },
      ],
    },

    {
      title: "Marketing",
      items: [
        {
          name: "Reward",
          path: "/reward",
          icon: Gift,
        },
        {
          name: "Promo",
          path: "/promo",
          icon: BadgePercent,
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200">
      {/* LOGO */}
      <SidebarHeader
        className={`pt-8 pb-6 transition-all ${collapsed ? "px-3" : "px-6"}`}
      >
        {collapsed ? (
          <div className="mx-auto">
            <div
              className="h-12 w-12 mx-auto rounded-2xl
                bg-gradient-to-br from-red-500 to-red-600
                flex items-center justify-center
                text-white font-black shadow-lg"
            >
              A
            </div>
          </div>
        ) : (
          <>
            <h1
              className="
                  text-3xl
                  font-black
                  tracking-tight
                  select-none
                "
            >
              AUTO
              <span
                className="
                    bg-gradient-to-r
                    from-red-500
                    to-red-600
                    bg-clip-text
                    text-transparent
                  "
              >
                TECH
              </span>
            </h1>

            <p className="text-sm text-slate-500 mt-2">CRM Bengkel Modern</p>
          </>
        )}
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent
        className={`transition-all ${collapsed ? "px-2" : "px-4"}`}
      >
        <div className="space-y-6">
          {menuGroups.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <p className="px-3 mb-2 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                  {group.title}
                </p>
              )}

              <ul className="space-y-2">
                {group.items.map((menu) => {
                  const Icon = menu.icon;

                  return (
                    <li key={menu.path}>
                      <NavLink
                        to={menu.path}
                        className={({ isActive }) =>
                          `
                  flex items-center
                  ${collapsed ? "justify-center px-0 py-3" : "gap-4 px-4 py-3"}
                  rounded-2xl
                  transition-all duration-300
                  font-medium
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }
                `
                        }
                      >
                        <Icon size={20} />

                        {!collapsed && (
                          <span className="truncate">{menu.name}</span>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4">
        {!collapsed && (
          <div
            className="
                bg-gradient-to-br
                from-slate-50
                to-white
                rounded-3xl
                p-5
                border
                border-slate-200
                shadow-sm
              "
          >
            <h3 className="font-bold text-slate-800 text-sm">AUTO TECH CRM</h3>

            <p className="text-xs text-slate-500 leading-6 mt-2">
              Platform manajemen bengkel untuk memantau servis, kendaraan,
              pelanggan, dan laporan operasional.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-500 text-xs font-medium">
                ● Online
              </span>

              <span className="text-slate-400 text-xs">v1.0.0</span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
