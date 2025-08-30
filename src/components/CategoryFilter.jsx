import { Filter, Search } from "lucide-react";

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
  sort,
  onSortChange,
  query,
  onQueryChange,
}) {
  return (
    <section id="browse" className="py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-slate-600">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Browse by category</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => onQueryChange?.(e.target.value)}
              placeholder="Search cards..."
              className="w-64 rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm outline-none focus:border-violet-400"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => onSortChange?.(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-violet-400"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const active = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect?.(cat)}
              className={
                "rounded-full border px-4 py-2 text-sm transition " +
                (active
                  ? "border-violet-300 bg-violet-50 text-violet-700"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
    </section>
  );
}
