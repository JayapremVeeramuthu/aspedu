import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Shield, Award, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { courses } from "@/data/courses";
import { toast } from "sonner";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";


const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
  course: z.string().min(1, "Please select a course"),
  mode: z.enum(["online", "offline"], { required_error: "Please select a mode" }),
  message: z.string().max(500, "Message is too long").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get("course") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      course: preselectedCourse,
      mode: undefined,
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedCourse) {
      setValue("course", preselectedCourse);
    }
  }, [preselectedCourse, setValue]);

const onSubmit = async (data: BookingFormData) => {
  setIsSubmitting(true);

  try {
    await addDoc(collection(db, "courseBookings"), {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      course: data.course,
      mode: data.mode,
      message: data.message || "",
      source: "Website",
      createdAt: serverTimestamp(),
    });

    setIsSuccess(true);
    toast.success("Booking submitted successfully!");
    reset();

  } catch (error) {
    console.error("Firebase Error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  if (isSuccess) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for choosing ASPEDU. We have received your booking request and will contact you shortly to confirm the details.
              </p>
              <div className="premium-card text-left space-y-3 mb-8">
                <p className="text-sm text-muted-foreground">What happens next:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Our team will call you within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>We'll discuss batch timings and fee details</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Complete enrollment and start your journey</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  reset();
                }}
                className="btn-ghost"
              >
                Book Another Course
              </button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background pt-12 pb-8">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Enroll Now
            </span>
            <h1 className="text-4xl md:text-5xl mb-4">Book Your Course</h1>
            <p className="text-muted-foreground text-lg">
              Fill in your details below and we'll get back to you within 24 hours to confirm your enrollment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit(onSubmit)} className="premium-card space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      {...register("fullName")}
                      className={`input-premium ${errors.fullName ? "border-destructive" : ""}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
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
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-2">
                      Select Course *
                    </label>
                    <select
                      id="course"
                      {...register("course")}
                      className={`input-premium ${errors.course ? "border-destructive" : ""}`}
                    >
                      <option value="">Choose a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-destructive text-sm mt-1">{errors.course.message}</p>
                    )}
                  </div>

                  {/* Mode Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Preferred Mode *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          value="online"
                          {...register("mode")}
                          className="w-5 h-5 accent-accent"
                        />
                        <span>Online</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          value="offline"
                          {...register("mode")}
                          className="w-5 h-5 accent-accent"
                        />
                        <span>Offline (At Center)</span>
                      </label>
                    </div>
                    {errors.mode && (
                      <p className="text-destructive text-sm mt-1">{errors.mode.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className={`input-premium resize-none ${errors.message ? "border-destructive" : ""}`}
                      placeholder="Any specific requirements or questions..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Booking"
                    )}
                  </button>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.1}>
                <div className="premium-card space-y-6">
                  <h3 className="font-semibold text-lg">Why Book with ASPEDU?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Secure Enrollment</h4>
                        <p className="text-sm text-muted-foreground">Your data is safe with us</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Quick Response</h4>
                        <p className="text-sm text-muted-foreground">We call back within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Certified Courses</h4>
                        <p className="text-sm text-muted-foreground">Government-recognized certificates</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Need help? Call us at{" "}
                      <a href="tel:+919150809001" className="text-accent font-medium hover:underline">
                        +91 91508 09001
                      </a>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
