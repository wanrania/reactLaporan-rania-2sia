import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div id="app-container" className="min-h-screen flex bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header/>

          <Outlet/>
        </div>
      </div>
    </div>
  );
}
