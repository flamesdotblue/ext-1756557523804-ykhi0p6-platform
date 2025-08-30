export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} PokéMarket. Not affiliated with Nintendo, Creatures, or Game Freak.
        </p>
        <nav className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-slate-900">About</a>
          <a href="#" className="hover:text-slate-900">Sell your cards</a>
          <a href="#" className="hover:text-slate-900">Trading guide</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
