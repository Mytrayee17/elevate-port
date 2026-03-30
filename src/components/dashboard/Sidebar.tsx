import { LayoutDashboard, GraduationCap, Briefcase, Rocket, FlaskConical, Award, BarChart3, BookOpen, Settings, LogOut, Users, CalendarDays, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuSections = [
  {
    label: "MAIN",
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/" },
      { icon: GraduationCap, label: "Education", href: "/education" },
      { icon: BookOpen, label: "Courses", href: "/courses" },
      { icon: BarChart3, label: "Results", href: "/transcript" },
    ],
  },
  {
    label: "CAREER",
    items: [
      { icon: Briefcase, label: "Internships", href: "/internships" },
      { icon: Rocket, label: "Projects", href: "/projects" },
      { icon: FlaskConical, label: "Research", href: "/research" },
      { icon: Award, label: "Certifications", href: "/certifications" },
    ],
  },
  {
    label: "CAMPUS",
    items: [
      { icon: Users, label: "Cohorts", href: "/cohorts" },
      { icon: CalendarDays, label: "Events", href: "/events" },
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
      <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-5">
        {menuSections.map((section) => (
          <div key={section.label}>
            <p className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.15em] uppercase px-3 mb-2">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>
                    <motion.div
                      whileHover={{ x: item.label === activePage ? 0 : 2 }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        item.label === activePage
                          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <item.icon size={18} strokeWidth={item.label === activePage ? 2.5 : 1.8} />
                      {item.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-4 space-y-0.5 border-t border-border pt-4">
        <Link to="/profile">
          <motion.div
            whileHover={{ x: activePage === "Profile" ? 0 : 2 }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
              activePage === "Profile"
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <UserCircle size={18} strokeWidth={activePage === "Profile" ? 2.5 : 1.8} />
            Profile
          </motion.div>
        </Link>
        <Link to="/settings">
          <motion.div
            whileHover={{ x: activePage === "Settings" ? 0 : 2 }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
              activePage === "Settings"
                ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Settings size={18} strokeWidth={activePage === "Settings" ? 2.5 : 1.8} />
            Settings
          </motion.div>
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-primary hover:bg-sidebar-accent nav-link-hover">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
