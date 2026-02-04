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

// Helper function to get stable image for a course
const getImageSource = (course: Course): string => {
  // If course already has an image, use it as-is
  if (course.image) {
    return course.image;
  }

  // Category to image file mapping - must match courses.category exactly
  const categoryImages: Record<string, string[]> = {
    Design: ["design-1.jpg", "design-2.jpg", "design-3.jpg"],
    Programming: [
      "programming-1.jpg",
      "programming-2.jpg",
      "programming-3.jpg",
    ],
    Security: ["security-1.jpg", "security-2.jpg"],
    Basic: ["basic-1.jpg", "basic-2.jpg"],
    Accounting: ["accounting-1.jpg"],
    Diploma: ["basic-1.jpg", "basic-2.jpg"],
  };

  // Get images for the category, fallback to basic-1.jpg if category not found
  const images = categoryImages[course.category] || ["basic-1.jpg"];

  // Use a stable hash of course ID to pick an image deterministically
  const hash = course.id
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const imageIndex = hash % images.length;
  
  const imagePath = `/courses/${images[imageIndex]}`;
  return imagePath;
};

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  const imageSrc = getImageSource(course);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback to basic-1.jpg if image fails to load
    (e.target as HTMLImageElement).src = "/courses/basic-1.jpg";
  };

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
        {/* Course Image Area */}
        <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-300">
          <img
            src={imageSrc}
            alt={course.title}
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
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
