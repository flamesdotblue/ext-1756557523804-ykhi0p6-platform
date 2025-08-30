import { ShoppingCart, Shuffle } from "lucide-react";

function formatPrice(p) {
  return `$${p.toFixed(2)}`;
}

export default function CardGrid({ cards = [] }) {
  return (
    <section className="py-4">
      {cards.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/60 text-slate-500">
          No cards match your filters.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="p-3">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="line-clamp-1 font-semibold text-slate-900" title={card.name}>
                    {card.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {card.set} • {card.rarity}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">{formatPrice(card.price)}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {card.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-200 bg-slate-50/50 p-3">
                <div className="flex items-center gap-2">
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700">
                    <ShoppingCart className="h-4 w-4" /> Buy
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                    <Shuffle className="h-4 w-4" /> Trade
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
