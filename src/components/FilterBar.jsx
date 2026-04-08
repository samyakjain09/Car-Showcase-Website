import { useCars } from "../context/CarContext";

function FilterBar() {
  const {
    categories,
    searchTerm,
    selectedCategory,
    setSearchTerm,
    setSelectedCategory,
  } = useCars();

  return (
    <div className="glass-panel flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex-1">
        <label htmlFor="car-search" className="sr-only">
          Search cars
        </label>
        <input
          id="car-search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by name, technology, or feature"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                active
                  ? "bg-accent text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-accent/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBar;
