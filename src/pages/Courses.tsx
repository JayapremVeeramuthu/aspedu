import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/CourseCard";
import { courses, categories, getCoursesByCategory } from "@/data/courses";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = getCoursesByCategory(selectedCategory).filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-12 pb-8">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Explore Courses
            </span>
            <h1 className="text-4xl md:text-5xl mb-4">Our Courses</h1>
            <p className="text-muted-foreground text-lg">
              Choose from our comprehensive range of computer and skill development courses. 
              All courses come with government-recognized certification.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-18 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-premium pl-12"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No courses found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="btn-ghost"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <AnimatedSection>
            <div className="premium-card text-center p-8 md:p-12 bg-secondary/50">
              <h3 className="text-2xl font-semibold mb-3">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss custom courses or get guidance on the best course for your goals.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
