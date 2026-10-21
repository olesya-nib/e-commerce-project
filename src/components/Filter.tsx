import type { ChangeEvent } from "react";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

function Filter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: FilterProps) {
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(event.target.value);
  }
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 px-4 py-2 rounded-lg ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />

      <select
        value={selectedCategory}
        onChange={handleFilterChange}
        className="px-4 py-2 rounded-lg ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-shadow"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
}

export default Filter;
