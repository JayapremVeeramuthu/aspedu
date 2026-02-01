import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Monitor, ArrowRight } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: "Online" | "Offline" | "Both";
  category: string;
  image?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/courses/${course.id}`}
        className="group block premium-card h-full"
      >
        {/* Course Icon/Image Area */}
        <div className="h-32 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center mb-4 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Monitor className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Category Badge */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-3">
          {course.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Monitor className="w-4 h-4" />
            {course.mode}
          </span>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
