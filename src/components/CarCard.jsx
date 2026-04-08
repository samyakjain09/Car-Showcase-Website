import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-premium transition duration-500 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
          {car.badge}
        </span>
      </div>

      <div className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {car.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {car.name}
            </h3>
          </div>
          <p className="text-sm font-medium text-accent">{car.price}</p>
        </div>

        <p className="text-sm leading-7 text-slate-300">{car.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Range
            </p>
            <p className="mt-2 font-medium text-white">{car.range}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Powertrain
            </p>
            <p className="mt-2 font-medium text-white">{car.powertrain}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to={`/cars/${car.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:border-accent/40 hover:bg-white/5"
          >
            View Details
          </Link>
          <Link
            to="/test-drive"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:bg-amber-300"
          >
            Book Test Drive
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
