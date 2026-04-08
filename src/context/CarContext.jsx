import { createContext, useContext, useMemo, useState } from "react";
import carsData from "../data/cars.json";

const CarContext = createContext(null);

export function CarProvider({ children }) {
  const [cars] = useState(carsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(cars.map((car) => car.category));
    return ["All", ...uniqueCategories];
  }, [cars]);

  const filteredCars = useMemo(() => {
    // Centralized filtering keeps the search UX reusable across pages.
    return cars.filter((car) => {
      const matchesCategory =
        selectedCategory === "All" || car.category === selectedCategory;
      const searchValue = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !searchValue ||
        car.name.toLowerCase().includes(searchValue) ||
        car.description.toLowerCase().includes(searchValue) ||
        car.powertrain.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [cars, searchTerm, selectedCategory]);

  return (
    <CarContext.Provider
      value={{
        cars,
        categories,
        filteredCars,
        searchTerm,
        selectedCategory,
        setSearchTerm,
        setSelectedCategory,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error("useCars must be used within a CarProvider");
  }

  return context;
}
