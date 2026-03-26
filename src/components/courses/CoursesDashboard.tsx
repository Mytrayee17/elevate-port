import { motion } from "framer-motion";
import { Clock, Target, Lightbulb, Play, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const heroCourse = {
  title: "Advanced Full-Stack Web Development",
  module: "Module 4: Building REST APIs with Node.js",
  progress: 65,
  gradient: "from-primary/80 to-primary/40",
};

const currentCourses = [
  {
    id: "1",
    title: "Data Structures & Algorithms",
    professor: "Prof. Alan Turing",
    progress: 45,
    skills: ["C++", "Logic", "Problem Solving"],
    gradient: "from-accent/60 to-accent/30",
  },
  {
    id: "2",
    title: "Cloud Computing (AWS)",
    professor: "Prof. Grace Hopper",
    progress: 90,
    skills: ["AWS", "DevOps", "Networking"],
    gradient: "from-primary/60 to-primary/30",
  },
  {
    id: "3",
    title: "UI/UX System Design",
    professor: "Prof. Don Norman",
    progress: 10,
    skills: ["Figma", "Research", "Prototyping"],
    gradient: "from-purple-500/60 to-purple-500/30",
  },
  {
    id: "4",
    title: "Database Management Systems",
    professor: "Prof. E.F. Codd",
    progress: 72,
    skills: ["SQL", "NoSQL", "Normalization"],
    gradient: "from-blue-500/60 to-blue-500/30",
  },
  {
    id: "5",
    title: "Operating Systems",
    professor: "Prof. Andrew Tanenbaum",
    progress: 55,
    skills: ["Linux", "Scheduling", "Memory"],
    gradient: "from-orange-500/60 to-orange-500/30",
  },
  {
    id: "6",
    title: "Computer Networks",
    professor: "Prof. Vint Cerf",
    progress: 30,
    skills: ["TCP/IP", "Security", "Protocols"],
    gradient: "from-teal-500/60 to-teal-500/30",
  },
];

const allSkills = [...new Set(currentCourses.flatMap((c) => c.skills))];

const AnimatedProgress = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <Progress value={value} className="h-2" />
    </motion.div>
  );
};

const CoursesDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer">Dashboard</span>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Courses</span>
      </motion.div>

      {/* Jump Back In Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-elevated overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${heroCourse.gradient} p-8`}>
          <span className="text-xs font-bold text-primary-foreground/80 tracking-wider uppercase mb-2 block">
            🚀 Jump Back In
          </span>
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">{heroCourse.title}</h2>
          <p className="text-sm text-primary-foreground/70 mb-5">{heroCourse.module}</p>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 bg-primary-foreground/20 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="h-full bg-primary-foreground rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${heroCourse.progress}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
            </div>
            <span className="text-sm font-bold text-primary-foreground">{heroCourse.progress}%</span>
          </div>
          <button className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-foreground/90 transition-colors">
            <Play size={16} />
            Resume Learning
          </button>
        </div>
      </motion.div>

      {/* Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock size={20} className="text-primary" />
            </div>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Time Invested</span>
          </div>
          <p className="text-3xl font-bold text-foreground">142 <span className="text-base font-normal text-muted-foreground">hrs</span></p>
          <p className="text-sm text-muted-foreground mt-1">This Semester</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-elevated p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Target size={20} className="text-accent" />
            </div>
            <span className="text-xs font-bold text-accent tracking-wider uppercase">Course Status</span>
          </div>
          <div className="flex items-baseline gap-3">
            <div>
              <span className="text-3xl font-bold text-foreground">4</span>
              <span className="text-sm text-muted-foreground ml-1">In Progress</span>
            </div>
            <div className="text-muted-foreground">•</div>
            <div>
              <span className="text-3xl font-bold text-foreground">12</span>
              <span className="text-sm text-muted-foreground ml-1">Completed</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-elevated p-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lightbulb size={20} className="text-primary" />
            </div>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Skills Acquiring</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allSkills.slice(0, 8).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {allSkills.length > 8 && (
              <Badge variant="outline" className="text-xs">
                +{allSkills.length - 8} more
              </Badge>
            )}
          </div>
        </motion.div>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-3">
        <h3 className="text-xs font-bold text-muted-foreground tracking-wider uppercase">
          Current Semester Courses
        </h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentCourses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className="card-elevated overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className={`h-24 bg-gradient-to-br ${course.gradient} flex items-end p-4`}>
              <div className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur flex items-center justify-center shadow-sm">
                <Target size={18} className="text-foreground" />
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {course.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-4">{course.professor}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1">
                  <AnimatedProgress value={course.progress} delay={0.6 + i * 0.08} />
                </div>
                <span className="text-xs font-bold text-foreground">{course.progress}%</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                Go to Course
                <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesDashboard;
