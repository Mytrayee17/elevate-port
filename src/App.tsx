import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Education from "./pages/Education.tsx";
import Transcript from "./pages/Transcript.tsx";
import Certifications from "./pages/Certifications.tsx";
import Courses from "./pages/Courses.tsx";
import Cohorts from "./pages/Cohorts.tsx";
import Events from "./pages/Events.tsx";
import Internships from "./pages/Internships.tsx";
import Projects from "./pages/Projects.tsx";
import Research from "./pages/Research.tsx";
import Settings from "./pages/Settings.tsx";
import Profile from "./pages/Profile.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cohorts" element={<Cohorts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
