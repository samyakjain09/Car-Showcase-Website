import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SectionIntro from "../components/SectionIntro";
import FeaturedHighlights from "../components/FeaturedHighlights";
import CarList from "../components/CarList";
import FilterBar from "../components/FilterBar";

function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />

      <section className="page-shell">
        <SectionIntro
          eyebrow="Why Veltrix"
          title="Engineered with precision. Presented with premium clarity."
          copy="This frontend-only showcase follows a product-first automotive experience, combining compelling design, intuitive navigation, and scalable React architecture."
        />
        <FeaturedHighlights />
      </section>

      <section className="page-shell">
        <SectionIntro
          eyebrow="Featured Lineup"
          title="Explore our signature vehicle collection"
          copy="Browse the premium car range and preview how the search and filter experience works before diving into detailed model pages."
        />
        <FilterBar />
        <div className="mt-8">
          <CarList />
        </div>
      </section>

      <section className="page-shell">
        <div className="glass-panel grid gap-8 px-8 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Ownership Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Book a studio visit and experience the lineup in person.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              From immersive product consultations to premium test drive
              sessions, the interface is built to feel like a real automotive
              brand website.
            </p>
          </div>
          <Link
            to="/test-drive"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
          >
            Reserve a Test Drive
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
