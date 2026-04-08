import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="page-shell pb-16 pt-8 sm:pb-24">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-hero-glow px-6 py-10 shadow-premium sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
            Automotive Innovation Since 1998
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Driving precision engineering into a premium digital showroom.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the next generation of luxury sedans, electric SUVs, and
              performance vehicles designed with intelligent mobility at their
              core.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/cars"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-amber-300"
            >
              Explore Vehicles
            </Link>
            <Link
              to="/test-drive"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-accent/50 hover:bg-white/5"
            >
              Schedule Test Drive
            </Link>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {[
              ["120+", "Global Retail Studios"],
              ["4.8/5", "Ownership Satisfaction"],
              ["100%", "Frontend Mock Experience"],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel p-4">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent/10 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
            alt="Premium Veltrix vehicle"
            className="relative h-full min-h-[360px] w-full rounded-[2rem] object-cover"
          />
          <div className="glass-panel absolute bottom-5 left-5 max-w-xs p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Concept Vision
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Aerodynamic silhouettes, connected cabins, and premium material
              systems aligned into one seamless automotive experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
