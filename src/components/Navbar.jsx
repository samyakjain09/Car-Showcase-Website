import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Cars", to: "/cars" },
  { label: "Test Drive", to: "/test-drive" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-lg font-semibold text-accent">
            V
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent">
              Veltrix
            </p>
            <p className="text-sm font-medium text-white">Motors</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-white ${
                  isActive ? "text-white" : "text-slate-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/test-drive"
          className="hidden rounded-full border border-accent/60 bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-amber-300 md:inline-flex"
        >
          Book Experience
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="page-shell flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.2em] ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
