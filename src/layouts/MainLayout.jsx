import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  SidebarProvider,
  SidebarInset,
} from "../components/ui/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <Header />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}