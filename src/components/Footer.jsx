function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">
            Veltrix Motors
          </p>
          <h3 className="text-2xl font-semibold text-white">
            Designed for performance. Crafted for tomorrow.
          </h3>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Frontend concept website for a premium car manufacturer using React,
            Tailwind CSS, and mock product data.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Visit
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Innovation District</li>
            <li>Bengaluru, India</li>
            <li>Mon - Sat, 9:00 AM - 7:00 PM</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Connect
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>hello@veltrixmotors.com</li>
            <li>+91 98765 43210</li>
            <li>Premium ownership support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
