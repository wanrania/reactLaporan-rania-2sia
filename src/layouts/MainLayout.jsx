import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    // Container utama: Background abu-abu sangat terang, teks gelap, tinggi 1 layar penuh
    <div id="app-container" className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div id="layout-wrapper" className="flex flex-col flex-1 min-w-0 overflow-hidden">
        
        {/* Header Section */}
        <Header />

        {/* Outlet / Halaman Konten yang bisa di-scroll */}
        <main id="main-content" className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Pembungkus max-width agar konten tidak terlalu melebar di layar super besar (opsional) */}
          <div className="mx-auto max-w-[1600px]">
            <Outlet />
          </div>
        </main>
        
      </div>
    </div>
  );
}