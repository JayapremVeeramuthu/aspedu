import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number").optional().or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Contact form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message sent successfully!");
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "233B, Kurunthampattu Road",
        "Mangampunjai, Kallal - 630 305",
        "Tamil Nadu, India"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        
        "+91 90030 28001",
        
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "aspcomputereducation@gmail.com",
      
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday",
        "9:00 AM - 9:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-12 pb-8">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our courses? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="premium-card h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <AnimatedSection>
              <div className="premium-card">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn-ghost"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register("name")}
                          className={`input-premium ${errors.name ? "border-destructive" : ""}`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={`input-premium ${errors.email ? "border-destructive" : ""}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className={`input-premium ${errors.phone ? "border-destructive" : ""}`}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register("subject")}
                        className={`input-premium ${errors.subject ? "border-destructive" : ""}`}
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        className={`input-premium resize-none ${errors.message ? "border-destructive" : ""}`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-accent w-full py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.1}>
              <div className="premium-card h-full min-h-[400px] p-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5!2d79.14!3d10.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE2JzEyLjAiTiA3OcKwMDgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ASPEDU Location"
                  className="rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
