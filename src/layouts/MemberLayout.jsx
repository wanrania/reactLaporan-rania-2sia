import { Outlet } from "react-router-dom";
import MemberSidebar from "../components/MemberSidebar";

export default function MemberLayout() {
  return (
    <div className="flex bg-slate-50">

      <MemberSidebar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}