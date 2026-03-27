import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import SettingsDashboard from "@/components/settings/SettingsDashboard";

const Settings = () => (
  <div className="min-h-screen bg-background">
    <Sidebar activePage="Settings" />
    <div className="ml-64">
      <Navbar />
      <main className="p-8 space-y-6 max-w-[1200px]">
        <SettingsDashboard />
      </main>
    </div>
  </div>
);

export default Settings;
