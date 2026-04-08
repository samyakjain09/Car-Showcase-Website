import FilterBar from "../components/FilterBar";
import CarList from "../components/CarList";
import SectionIntro from "../components/SectionIntro";

function CarsPage() {
  return (
    <section className="page-shell pb-20">
      <SectionIntro
        eyebrow="Vehicle Catalog"
        title="A premium lineup built for every modern driver"
        copy="Use category filters and search to quickly navigate the static product collection. This demonstrates reusable state and component design using Context API and React Router."
      />
      <FilterBar />
      <div className="mt-8">
        <CarList />
      </div>
    </section>
  );
}

export default CarsPage;
