import { motion } from "framer-motion";
import { Rocket, Plus } from "lucide-react";

const ActivityFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="card-elevated p-6 flex flex-col items-center justify-center text-center min-h-[280px]"
    >
      <div className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-6">
        Professional Activity Feed
      </div>

      {/* Empty state illustration */}
      <div className="w-20 h-20 rounded-2xl bg-muted/60 flex items-center justify-center mb-4">
        <Rocket size={36} className="text-muted-foreground/60" />
      </div>

      <h3 className="text-base font-semibold text-foreground mb-1">
        Your feed is waiting to launch!
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">
        Share your first project, certification, or internship to start building your professional timeline.
      </p>

      <button className="pulse-cta flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
        <Plus size={16} />
        Post Your First Project
      </button>
    </motion.div>
  );
};

export default ActivityFeed;
