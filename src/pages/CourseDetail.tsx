import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Clock, 
  Monitor, 
  Award, 
  CheckCircle2, 
  ArrowLeft,
  Users,
  BookOpen,
  Calendar
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getCourseById } from "@/data/courses";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = id ? getCourseById(id) : undefined;

  if (!course) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/courses" className="btn-primary">
            Browse All Courses
          </Link>
        </div>
      </Layout>
    );
  }

  const learningOutcomes = [
    "Master core concepts and fundamentals",
    "Build real-world projects and applications",
    "Prepare for industry certifications",
    "Develop problem-solving skills",
    "Get hands-on practical experience",
    "Learn from industry experts"
  ];

  const courseIncludes = [
    { icon: BookOpen, text: "Comprehensive study materials" },
    { icon: Monitor, text: "Hands-on practical sessions" },
    { icon: Users, text: "Doubt clearing sessions" },
    { icon: Award, text: "Government-recognized certificate" },
    { icon: Calendar, text: "Flexible batch timings" },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary/30 py-4">
        <div className="container-custom">
          <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Details */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                {/* Category Badge */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {course.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    {course.mode} Mode
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certified
                  </span>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </AnimatedSection>

              {/* What You'll Learn */}
              <AnimatedSection delay={0.1}>
                <div className="premium-card">
                  <h2 className="text-xl font-semibold mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Course Includes */}
              <AnimatedSection delay={0.2}>
                <div className="premium-card">
                  <h2 className="text-xl font-semibold mb-6">This Course Includes</h2>
                  <div className="space-y-4">
                    {courseIncludes.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Booking CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection>
                  <div className="premium-card border-2 border-accent/20">
                    {/* Course Icon */}
                    <div className="h-40 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Monitor className="w-10 h-10 text-primary" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Mode</span>
                        <span className="font-semibold">{course.mode}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Certificate</span>
                        <span className="font-semibold text-accent">Yes</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-muted-foreground">Batch</span>
                        <span className="font-semibold">Starting Soon</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/booking?course=${encodeURIComponent(course.title)}`}
                      className="btn-accent w-full text-center py-4"
                    >
                      Book This Course
                    </Link>

                    {/* Contact */}
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Have questions? <Link to="/contact" className="text-accent hover:underline">Contact us</Link>
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
