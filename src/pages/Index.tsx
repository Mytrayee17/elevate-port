import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import HeroSection from "@/components/dashboard/HeroSection";
import BentoGrid from "@/components/dashboard/BentoGrid";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import SemesterMarks from "@/components/dashboard/SemesterMarks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <Navbar />
        <main className="p-8 space-y-6 max-w-[1200px]">
          <HeroSection />
          <BentoGrid />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ActivityFeed />
            <SemesterMarks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
