import { ShoppingCart, Shuffle, Star } from "lucide-react";

export default function Hero({ onSearch }) {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_50%_0%,#a5b4fc20,transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-violet-700 ring-1 ring-inset ring-violet-200">
              <Star className="h-4 w-4" />
              Trusted marketplace for collectors
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Catch deals. Trade smarter. Grow your Pokémon collection.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-prose">
              Browse curated cards across vintage and modern sets. Buy instantly or propose fair trades with other trainers.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-xl">
              <input
                type="text"
                placeholder="Search by name, set, or rarity..."
                onChange={(e) => onSearch?.(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm outline-none ring-0 focus:border-violet-400 focus:bg-white"
              />
              <div className="flex gap-2">
                <a
                  href="#browse"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-white shadow-md hover:bg-violet-700 transition"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Shop Cards
                </a>
                <a
                  href="#browse"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-md hover:bg-slate-800 transition"
                >
                  <Shuffle className="h-5 w-5" />
                  Trade
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {[
                  "https://images.pokemontcg.io/base1/4_hires.png",
                  "https://images.pokemontcg.io/swsh4/44_hires.png",
                  "https://images.pokemontcg.io/sm35/40_hires.png",
                  "https://images.pokemontcg.io/swsh3/2_hires.png",
                  "https://images.pokemontcg.io/sm12/258_hires.png",
                  "https://images.pokemontcg.io/sv2/231_hires.png",
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Featured Pokémon card"
                    className="aspect-[3/4] w-full rounded-lg object-cover ring-1 ring-slate-200"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
