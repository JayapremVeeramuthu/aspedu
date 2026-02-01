import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  BookOpen, 
  Target,
  Shield,
  Building,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SEO from "@/components/SEO";


const About = () => {
  const milestones = [
    { year: "2008", title: "Foundation", description: "ASP Computer Education established" },
    { year: "2015", title: "MSME Registration", description: "Registered under MSME, Govt. of India" },
    { year: "2020", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification" },
    { year: "2024", title: "MADTEC Partnership", description: "Powered by MADTEC Skill Development" },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Education",
      description: "We deliver industry-standard curriculum designed by experts to ensure students gain practical, job-ready skills."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every student matters. We provide personalized attention and support throughout the learning journey."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from course content to student outcomes."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Government recognition and industry certifications reflect our commitment to credibility."
    },
  ];

  const recognitions = [
    { label: "ISO 9001:2015 Certified", description: "Quality Management System" },
    { label: "MSME Registered", description: "Ministry of MSME, Govt. of India" },
    { label: "DPIIT Recognized", description: "Startup India Recognition" },
    { label: "MCA Registered", description: "Ministry of Corporate Affairs" },
    { label: "AICTE Approved", description: "Internship Recognition" },
  ];

 return (
  <Layout>

    {/* Hero */}
    <section className="bg-gradient-to-b from-secondary/50 to-background pt-12 pb-8">

        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl mb-4">Empowering Careers Through Quality Education</h1>
            <p className="text-muted-foreground text-lg">
              ASP Computer Education is a government-recognized institute committed to providing 
              industry-ready skills and transforming lives through quality education.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Our Story
                </span>
                <h2>Building Futures Since 2008</h2>
                <div className="space-y-4 text-muted-foreground"> 
                  <p>
                    ASP Computer Education was founded by <strong>Ajith Alagarsamy</strong>
 with a simple mission: to make quality computer 
                    education accessible to everyone, regardless of their background. Located in Kallal, 
                    Tamil Nadu, we have been serving students from rural and semi-urban areas for over 
                    15 years.
                  </p>
                  <p>
                    Today, powered by MADTEC Skill Development (OPC) Pvt Ltd, we offer a comprehensive 
                    range of courses from basic computer skills to advanced programming, all backed by 
                    government recognition and industry certifications.
                  </p>
                  <p>
                    Our institute has trained over 5,000 students, with a 95% placement rate, helping 
                    them build successful careers in IT and related fields.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="premium-card text-center"
                  >
                    <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                    <h4 className="font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from curriculum design to student support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="premium-card h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Recognition
            </span>
            <h2 className="mb-4">Government Authorized & Certified</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certifications and recognitions reflect our commitment to quality and credibility.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="premium-card">
              <div className="space-y-4">
                {recognitions.map((recognition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{recognition.label}</h4>
                      <p className="text-sm text-muted-foreground">{recognition.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MADTEC Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <Building className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-primary-foreground mb-4">Powered by MADTEC</h2>
              <p className="text-primary-foreground/80 mb-6">
                MADTEC Skill Development (OPC) Pvt Ltd is an autonomous institution registered 
                by MCA, Govt. of India, recognized by DPIIT, Ministry of Commerce & Industry, 
                and registered under MSME. We are committed to IT & Home Science based 
                skill development and vocational programs.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
                <span>MCA Registered: U85499TN2024OPC174588</span>
                <span>•</span>
                <span>UDYAM-TN-30-0045321</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="premium-card text-center p-8 md:p-12 bg-secondary/50">
              <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join thousands of successful students who have built their careers with ASPEDU.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/courses" className="btn-primary">
                  Explore Courses
                </Link>
                <Link to="/booking" className="btn-accent">
                  Book a Course
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
