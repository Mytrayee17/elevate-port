import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import CohortsDashboard from "@/components/cohorts/CohortsDashboard";

const Cohorts = () => (
  <div className="min-h-screen bg-background">
    <Sidebar activePage="Cohorts" />
    <div className="ml-64">
      <Navbar />
      <main className="p-8 space-y-6 max-w-[1200px]">
        <CohortsDashboard />
      </main>
    </div>
  </div>
);

export default Cohorts;
