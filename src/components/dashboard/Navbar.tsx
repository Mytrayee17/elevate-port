import { Search, Bell, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between px-8 py-3">
        <h1 className="text-xl font-bold text-foreground">Dashboard</h1>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-xl px-4 py-2 w-72">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects, peers, courses..."
              className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Icons */}
          <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
            <Bell size={20} className="text-muted-foreground" />
          </button>
          <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
            <Mail size={20} className="text-muted-foreground" />
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3 ml-2 pl-3 border-l border-border">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">John Student</p>
              <p className="text-xs text-muted-foreground">B.Tech CSE</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-sm">J</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
