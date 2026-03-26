import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import CoursesDashboard from "@/components/courses/CoursesDashboard";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar activePage="Courses" />
      <div className="ml-64">
        <Navbar />
        <main className="p-8 space-y-6 max-w-[1200px]">
          <CoursesDashboard />
        </main>
      </div>
    </div>
  );
};

export default Courses;
