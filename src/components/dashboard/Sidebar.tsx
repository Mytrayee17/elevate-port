import { LayoutDashboard, GraduationCap, Briefcase, Rocket, FlaskConical, Award, BarChart3, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const menuSections = [
  {
    label: "MAIN DASHBOARD",
    items: [{ icon: LayoutDashboard, label: "Overview", active: true }],
  },
  {
    label: "STUDENTS",
    items: [
      { icon: GraduationCap, label: "Education" },
      { icon: Briefcase, label: "Internships" },
      { icon: Rocket, label: "Projects" },
      { icon: FlaskConical, label: "Research" },
      { icon: Award, label: "Certifications" },
      { icon: BarChart3, label: "Results" },
    ],
  },
];

const Sidebar = ({ activePage = "Overview" }: { activePage?: string }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col z-30">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">CI</span>
        </div>
        <span className="font-bold text-lg text-foreground tracking-tight">CIET Portal</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-6">
        {menuSections.map((section) => (
          <div key={section.label}>
            <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase px-3 mb-2">
              {section.label}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <motion.button
                    whileHover={{ x: item.label === activePage ? 0 : 2 }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      item.label === activePage
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <item.icon size={18} strokeWidth={item.label === activePage ? 2.5 : 2} />
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-4 space-y-1 border-t border-border pt-4">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 nav-link-hover">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-primary hover:bg-sidebar-accent nav-link-hover">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
