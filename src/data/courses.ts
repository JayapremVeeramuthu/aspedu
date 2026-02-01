import { Course } from "@/components/CourseCard";

export const courses: Course[] = [
  {
    id: "dca",
    title: "DCA - Diploma in Computer Applications",
    description: "Comprehensive diploma covering MS Office, Internet basics, typing, and essential computer skills for beginners.",
    duration: "6 Months",
    mode: "Both",
    category: "Diploma"
  },
  {
    id: "tally-prime",
    title: "Tally Prime with GST",
    description: "Master accounting software with GST compliance, inventory management, and financial reporting.",
    duration: "3 Months",
    mode: "Both",
    category: "Accounting"
  },
  {
    id: "python",
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts including data structures, OOP, and real-world projects.",
    duration: "4 Months",
    mode: "Both",
    category: "Programming"
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    description: "Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and databases.",
    duration: "6 Months",
    mode: "Both",
    category: "Programming"
  },
  {
    id: "autocad",
    title: "AutoCAD 2D & 3D",
    description: "Industry-standard CAD software training for architectural, mechanical, and civil engineering drawings.",
    duration: "3 Months",
    mode: "Offline",
    category: "Design"
  },
  {
    id: "java",
    title: "Core Java & Advanced Java",
    description: "Complete Java programming from core concepts to advanced frameworks like Spring and Hibernate.",
    duration: "5 Months",
    mode: "Both",
    category: "Programming"
  },
  {
    id: "bcc",
    title: "BCC - Basic Computer Course",
    description: "Foundation course covering computer fundamentals, MS Office, and internet for absolute beginners.",
    duration: "2 Months",
    mode: "Both",
    category: "Basic"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Learn user interface and experience design principles using Figma, Adobe XD, and industry best practices.",
    duration: "4 Months",
    mode: "Both",
    category: "Design"
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Ethical Hacking",
    description: "Comprehensive security training covering network security, penetration testing, and ethical hacking.",
    duration: "6 Months",
    mode: "Both",
    category: "Security"
  },
  {
    id: "solidworks",
    title: "SolidWorks 3D CAD",
    description: "Professional 3D CAD software for mechanical design, simulation, and product development.",
    duration: "4 Months",
    mode: "Offline",
    category: "Design"
  },
  {
    id: "dtp",
    title: "DTP - Desktop Publishing",
    description: "Master Photoshop, Illustrator, InDesign, and CorelDraw for professional graphic design work.",
    duration: "3 Months",
    mode: "Both",
    category: "Design"
  },
  {
    id: "php-mysql",
    title: "PHP & MySQL",
    description: "Server-side web development with PHP and MySQL database management for dynamic websites.",
    duration: "4 Months",
    mode: "Both",
    category: "Programming"
  }
];

export const categories = ["All", "Diploma", "Programming", "Accounting", "Design", "Security", "Basic"];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): Course[] => {
  if (category === "All") return courses;
  return courses.filter(course => course.category === category);
};
