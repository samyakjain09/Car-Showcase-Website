import { useCars } from "../context/CarContext";
import CarCard from "./CarCard";

function CarList() {
  const { filteredCars } = useCars();

  if (filteredCars.length === 0) {
    return (
      <div className="glass-panel px-6 py-12 text-center">
        <h3 className="text-2xl font-semibold text-white">No cars found</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Try a different search term or switch categories to explore the
          available lineup.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
