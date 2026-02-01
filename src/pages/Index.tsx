import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  Monitor, 
  Building, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const Index = () => {
  const popularCourses = courses.slice(0, 6);

  const trustBadges = [
    { icon: Shield, label: "ISO 9001:2015 Certified" },
    { icon: Award, label: "MSME Registered" },
    { icon: Building, label: "Govt. Recognized" },
    { icon: Globe, label: "AICTE Approved" },
  ];

  const features = [
    {
      icon: Monitor,
      title: "Online & Offline",
      description: "Learn at your pace with flexible online classes or hands-on offline training at our center."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive government-recognized certificates that add value to your professional profile."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Learn from industry professionals with years of teaching and practical experience."
    },
    {
      icon: BookOpen,
      title: "100% Placement Support",
      description: "Get comprehensive placement assistance and career guidance after course completion."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
                <Shield className="w-4 h-4" />
                <span>Government Recognized • ISO Certified</span>
              </div>

              {/* Headline */}
              <h1 className="text-foreground mb-6">
                Professional Computer & Skill Development Courses
              </h1>

              {/* Subtext */}
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Transform your career with industry-ready skills. Join thousands of successful students 
                who have built their future with ASPEDU.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/courses" className="btn-primary px-8 py-4 text-lg">
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link to="/booking" className="btn-accent px-8 py-4 text-lg">
                  Book a Course
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { value: "5000+", label: "Students Trained" },
                { value: "25+", label: "Courses Offered" },
                { value: "15+", label: "Years Experience" },
                { value: "95%", label: "Placement Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-custom py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="trust-badge"
              >
                <badge.icon className="w-5 h-5" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Courses
            </span>
            <h2 className="mb-4">Popular Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of government-recognized courses designed to 
              help you build a successful career in IT and skill development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses" className="btn-ghost">
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ASPEDU Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="mb-4">Why ASPEDU?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing quality education with industry-relevant curriculum 
              and comprehensive career support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="premium-card h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 text-center">
              <div className="relative z-10">
                <GraduationCap className="w-16 h-16 text-accent mx-auto mb-6" />
                <h2 className="text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
                <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                  Join ASPEDU today and take the first step towards a successful career. 
                  Our expert trainers and industry-ready curriculum await you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/booking" className="btn-accent px-8 py-4 text-lg">
                    Book Your Course Now
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors">
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h3 className="text-lg font-medium text-muted-foreground mb-8">Our Certifications & Recognitions</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                "ISO 9001:2015",
                "MSME Registered",
                "DPIIT Recognized",
                "MCA Registered",
                "AICTE Approved"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
