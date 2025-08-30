import { useMemo, useState } from "react";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

const initialCards = [
  {
    id: "base1-4",
    name: "Charizard (Base Set)",
    image: "https://images.pokemontcg.io/base1/4_hires.png",
    price: 299.99,
    category: "Holo Rare",
    rarity: "Rare Holo",
    set: "Base Set",
  },
  {
    id: "base1-15",
    name: "Blastoise (Base Set)",
    image: "https://images.pokemontcg.io/base1/2_hires.png",
    price: 189.99,
    category: "Holo Rare",
    rarity: "Rare Holo",
    set: "Base Set",
  },
  {
    id: "swsh3-20",
    name: "Butterfree VMAX",
    image: "https://images.pokemontcg.io/swsh3/2_hires.png",
    price: 24.5,
    category: "VMAX",
    rarity: "Rare Rainbow",
    set: "Darkness Ablaze",
  },
  {
    id: "sm12-258",
    name: "Arceus & Dialga & Palkia-GX",
    image: "https://images.pokemontcg.io/sm12/258_hires.png",
    price: 59.0,
    category: "GX",
    rarity: "Rare Ultra",
    set: "Cosmic Eclipse",
  },
  {
    id: "pop5-17",
    name: "Espeon Star",
    image: "https://images.pokemontcg.io/pop5/17_hires.png",
    price: 899.0,
    category: "Promo",
    rarity: "Rare Holo Star",
    set: "POP Series 5",
  },
  {
    id: "base1-94",
    name: "Energy (Double Colorless)",
    image: "https://images.pokemontcg.io/base1/96.png",
    price: 4.25,
    category: "Energy",
    rarity: "Uncommon",
    set: "Base Set",
  },
  {
    id: "swsh4-190",
    name: "Pikachu VMAX",
    image: "https://images.pokemontcg.io/swsh4/44_hires.png",
    price: 39.99,
    category: "VMAX",
    rarity: "Rare Holo VMAX",
    set: "Vivid Voltage",
  },
  {
    id: "sv2-231",
    name: "Iono (Full Art)",
    image: "https://images.pokemontcg.io/sv2/231_hires.png",
    price: 74.99,
    category: "Trainer",
    rarity: "Ultra Rare",
    set: "Paldea Evolved",
  },
  {
    id: "sv1-245",
    name: "Miraidon ex (Alt Art)",
    image: "https://images.pokemontcg.io/sv1/244_hires.png",
    price: 89.99,
    category: "EX",
    rarity: "Special Illustration Rare",
    set: "Scarlet & Violet",
  },
  {
    id: "sm35-40",
    name: "Shining Mew",
    image: "https://images.pokemontcg.io/sm35/40_hires.png",
    price: 129.0,
    category: "Holo Rare",
    rarity: "Rare Shining",
    set: "Shining Legends",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = useMemo(() => {
    const setCat = new Set(["All", ...initialCards.map((c) => c.category)]);
    return Array.from(setCat);
  }, []);

  const filtered = useMemo(() => {
    let list = [...initialCards];

    if (selectedCategory !== "All") {
      list = list.filter((c) => c.category === selectedCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.set.toLowerCase().includes(q) ||
          c.rarity.toLowerCase().includes(q)
      );
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [query, selectedCategory, sort]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Hero onSearch={setQuery} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          sort={sort}
          onSortChange={setSort}
          query={query}
          onQueryChange={setQuery}
        />

        <CardGrid cards={filtered} />
      </div>

      <Footer />
    </div>
  );
}
