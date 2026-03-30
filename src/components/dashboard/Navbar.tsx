import { Search, Bell, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 glass-nav">
      <div className="flex items-center justify-between px-8 py-3">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Dashboard</h1>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-foreground/5 rounded-xl px-4 py-2 w-72 border border-border/50">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, peers, courses..."
              className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground font-[Inter,sans-serif]"
            />
          </div>

          {/* Icons */}
          <button className="relative p-2.5 rounded-xl hover:bg-foreground/5 transition-colors">
            <Bell size={19} className="text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
          </button>
          <button className="relative p-2.5 rounded-xl hover:bg-foreground/5 transition-colors">
            <Mail size={19} className="text-muted-foreground" />
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border/50">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">John Student</p>
              <p className="text-xs text-muted-foreground font-[Inter,sans-serif]">B.Tech CSE</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-foreground to-foreground/80 flex items-center justify-center shadow-md">
              <span className="text-background font-bold text-sm">J</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
