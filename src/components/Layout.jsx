import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,162,76,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.08),transparent_25%)]" />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
