import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import ResearchDashboard from "@/components/research/ResearchDashboard";

const Research = () => (
  <div className="min-h-screen bg-background">
    <Sidebar activePage="Research" />
    <div className="ml-64">
      <Navbar />
      <main className="p-8 space-y-6 max-w-[1200px]">
        <ResearchDashboard />
      </main>
    </div>
  </div>
);

export default Research;
