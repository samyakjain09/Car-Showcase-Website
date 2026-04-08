import { Link, useParams } from "react-router-dom";
import cars from "../data/cars.json";

function CarDetailsPage() {
  const { carId } = useParams();
  const car = cars.find((item) => item.id === carId);

  if (!car) {
    return (
      <section className="page-shell pb-20">
        <div className="glass-panel px-6 py-16 text-center">
          <h1 className="text-3xl font-semibold text-white">
            Car model not found
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The requested vehicle does not exist in the demo dataset.
          </p>
          <Link
            to="/cars"
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950"
          >
            Back to Cars
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <img
            src={car.image}
            alt={car.name}
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-premium"
          />
          <div className="glass-panel p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Overview
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white">
              {car.name}
            </h1>
            <p className="mt-4 text-sm leading-8 text-slate-300">
              {car.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {Object.entries(car.specs).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Starting Price
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {car.price}
                </p>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-accent">
                {car.badge}
              </span>
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <DetailRow label="Range" value={car.range} />
              <DetailRow label="Powertrain" value={car.powertrain} />
              <DetailRow label="Acceleration" value={car.acceleration} />
              <DetailRow label="Top Speed" value={car.topSpeed} />
            </div>

            <Link
              to="/test-drive"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
            >
              Book This Car
            </Link>
          </div>

          <div className="glass-panel p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Key Features
            </p>
            <ul className="mt-6 space-y-4">
              {car.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

export default CarDetailsPage;
