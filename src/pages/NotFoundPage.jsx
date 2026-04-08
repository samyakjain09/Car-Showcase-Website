import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page-shell pb-20">
      <div className="glass-panel px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          The page you requested does not exist.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
          Use the navigation to continue exploring the Veltrix Motors frontend
          demo experience.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
