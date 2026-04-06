import Icons from "./Icons";

export default function Navbar({ onMenuToggle }) {
  return (
    <nav className="bg-[#1E1B4B] rounded-xl  h-14 flex items-center px-4 md:px-5 gap-3 shrink-0 z-40">
      {/* Brand */}
      <div className="flex items-center gap-2 md:min-w-[200px]">
        <button
          className="lg:hidden flex items-center justify-center p-1 mr-1 bg-transparent border-none cursor-pointer"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Icons.Menu />
        </button>
        <Icons.Logo />
        <span className="text-white font-bold text-base tracking-tight hidden sm:block">
          Worcspace
        </span>
        <button className="hidden md:flex items-center gap-1.5 bg-white/10 border-none rounded-md px-2.5 py-1 cursor-pointer text-white text-[13px]">
          Worcspace 1 <Icons.ChevronDown />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center px-2">
        <div className="flex items-center gap-2 bg-white/[0.08] border border-white/10 rounded-lg px-3.5 py-1.5 w-full max-w-[480px]">
          <span className="text-white/50 flex-shrink-0">
            <Icons.Search />
          </span>
          <span className="text-white/40 text-sm flex-1">Search...</span>
          <span className="text-white/30 text-xs font-mono hidden sm:block">⌘K</span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="bg-transparent border-none cursor-pointer flex items-center justify-center p-1">
          <Icons.Bell />
        </button>
        <div className="w-[34px] h-[34px] rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-[13px] font-bold cursor-pointer select-none shrink-0">
          GK
        </div>
      </div>
    </nav>
  );
}
