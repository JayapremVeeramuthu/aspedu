import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ASPEDU</span>
                <span className="text-xs text-primary-foreground/70">ASP Computer Education</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Government recognized, ISO certified computer education and skill development institute. 
              Empowering careers since establishment.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
              <span>Powered by MADTEC Skill Development (OPC) Pvt Ltd</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Courses", "About", "Contact", "Book a Course"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Book a Course" ? "/booking" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              {["DCA", "Tally Prime", "Python Programming", "Web Development", "AutoCAD"].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  233B, Kurunthampattu Road, Mangampunjai, Kallal - 630 305
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919150809001" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  +91 9003028001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:aspcomputereducation@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  aspcomputereducation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} ASPEDU. All rights reserved.
          </p>
           <span >
      Designed & Developed by{" "}
      <a
        href="https://jayapremvportfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors underline-offset-4 hover:underline"
      >
        Jayaprem V
      </a>
    </span>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>MSME Registered</span>
            <span>•</span>
            <span>Govt. Recognized</span>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
