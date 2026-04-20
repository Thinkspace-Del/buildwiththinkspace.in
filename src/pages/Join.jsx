import React, { useState } from "react";
import { z } from "zod";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const joinSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  craft: z
    .string()
    .min(3, { message: "Craft is required (min 3 characters)." }),
  links: z.string().optional(),
});

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    craft: "",
    links: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    try {
      // Validate form
      const validationResult = joinSchema.safeParse(formData);

      if (!validationResult.success) {
        const fieldErrors = {};
        // Use validationResult.error.issues for standard Zod version compatibility
        const issues =
          validationResult.error.issues || validationResult.error.errors || [];
        issues.forEach((err) => {
          if (err.path && err.path.length > 0) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
        setStatus("idle");
        return;
      }

      // Clean optional fields
      const submitData = { ...formData };
      if (!submitData.links) delete submitData.links;

      const { error } = await supabase.from("builders").insert([submitData]);

      if (error) {
        console.error(error);
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          craft: "",
          links: "",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // clear error for field when user starts typing again
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed-variant relative min-h-screen flex flex-col">
      <div className="fixed inset-0 z-[-1] blueprint-grid opacity-50"></div>

      <Navbar />

      <main className="grow pt-32 pb-24 px-6 md:px-12 flex items-center justify-center relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-outline-variant/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Context / Manifesto subset */}
          <div className="space-y-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Protocol // Initiation
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.05] text-on-surface">
                Drop the act.
                <br />
                <span className="text-primary italic">Bring your craft.</span>
              </h1>
            </div>

            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>
                Thinkspace isn't a coworking space. It's an accelerator for
                human potential. We don't care about your resume, your
                followers, or what you "plan" to do.
              </p>
              <p>
                We care about what you are building{" "}
                <span className="font-bold text-on-surface underline decoration-primary/30 underline-offset-4">
                  right now.
                </span>
              </p>
            </div>

            <div className="p-8 bg-surface-container-low border-l-4 border-primary rounded-r-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="flex -space-x-3 isolate">
                  <div className="relative w-12 h-12 rounded-full border-[3px] border-on-surface bg-white text-on-surface font-mono font-bold flex items-center justify-center text-sm z-10">
                    JD
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-[3px] border-on-surface bg-white text-on-surface font-mono font-bold flex items-center justify-center text-sm z-20">
                    PJ
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-[3px] border-[#2563eb] bg-[#eff6ff] text-[#1d4ed8] font-mono font-bold flex items-center justify-center text-sm z-30">
                    TL
                  </div>
                  <div className="relative w-12 h-12 rounded-full border-[3px] border-on-surface bg-white text-on-surface font-mono font-bold flex items-center justify-center text-sm z-40">
                    +1k
                  </div>
                </div>
                <div className="text-sm font-mono text-on-surface-variant">
                  <span className="text-primary font-bold text-base">
                    1,402
                  </span>{" "}
                  builders currently shaping reality
                </div>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant opacity-70">
                [ Join the terminal ]
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="font-mono text-[10px] text-on-surface-variant max-w-50 leading-relaxed opacity-60">
                System Note:
                <br />
                Capacity is strictly regulated to maintain high kinetic energy.
                Approvals are rolling.
              </p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl border border-outline-variant/20 relative overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-primary-fixed"></div>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-24 px-4 space-y-6">
                <div className="w-24 h-24 bg-surface-container-low border border-outline-variant/30 rounded-full flex items-center justify-center mb-4 relative shadow-inner">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
                  <CheckCircle2
                    className="w-12 h-12 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-4xl font-headline font-bold text-on-surface tracking-tight">
                    Signal Received.
                  </h3>
                  <p className="text-on-surface-variant font-mono text-sm max-w-sm mx-auto leading-relaxed">
                    {`> DATA_UPLOAD_COMPLETE `}
                    <br />
                    We review applications weekly. Keep your comms open.
                  </p>
                </div>
                <div className="font-mono text-xs font-bold text-primary mt-8 border border-primary/20 bg-primary/5 px-6 py-3 rounded tracking-widest uppercase shadow-sm">
                  System Status: PENDING_REVIEW
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-headline font-bold mb-2">
                    Access Request
                  </h2>
                  <p className="text-sm font-mono text-on-surface-variant">
                    Fill the parameters below.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                    >
                      01. Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-surface-container-low border-0 border-b-2 hover:border-b-primary focus:border-b-primary focus:ring-0 px-4 py-3 font-body transition-colors rounded-t ${
                        errors.name ? "border-b-error" : ""
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm font-headline">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                      >
                        02. Comm Link (Email){" "}
                        <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-surface-container-low border-0 border-b-2 hover:border-b-primary focus:border-b-primary focus:ring-0 px-4 py-3 font-body transition-colors rounded-t ${
                          errors.email ? "border-b-error" : ""
                        }`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm font-headline">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                      >
                        03. Direct Ping (Phone)
                        <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-surface-container-low border-0 border-b-2 hover:border-b-primary focus:border-b-primary focus:ring-0 px-4 py-3 font-body transition-colors rounded-t ${
                          errors.phone ? "border-b-error" : ""
                        }`}
                        placeholder=""
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm font-headline">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* The Craft */}
                  <div className="space-y-2">
                    <label
                      htmlFor="craft"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                    >
                      04. Primary Craft / Obsession{" "}
                      <span className="text-error">*</span>
                    </label>
                    <p className="text-[10px] font-mono text-on-surface-variant/70 -mt-1 mb-2 text-zinc-500">
                      What keeps you up at night?
                    </p>
                    <input
                      type="text"
                      id="craft"
                      name="craft"
                      value={formData.craft}
                      onChange={handleChange}
                      className={`w-full bg-surface-container-low border-0 border-b-2 hover:border-b-primary focus:border-b-primary focus:ring-0 px-4 py-3 font-body transition-colors rounded-t ${
                        errors.craft ? "border-b-error" : ""
                      }`}
                      placeholder="e.g., Web Development, Oil Painting, Videography, Graphic Design, Storywriting"
                    />
                    {errors.craft && (
                      <p className="text-red-500 text-sm font-headline">
                        {errors.craft}
                      </p>
                    )}
                  </div>

                  {/* Socials */}
                  <div className="space-y-2">
                    <label
                      htmlFor="links"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                    >
                      05. Socials (Links)
                    </label>

                    <input
                      id="links"
                      name="links"
                      value={formData.links}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border-0 border-b-2 hover:border-b-primary focus:border-b-primary focus:ring-0 px-4 py-3 font-body transition-colors rounded-t resize-none"
                    />
                  </div>
                </div>

                <div className="pt-6 relative group inline-block w-full">
                  <div className="absolute inset-0 bg-primary/20 scale-y-75 scale-x-95 translate-y-2 translate-x-1 blur-md -rotate-1 transition-all group-hover:blur-xl group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-1"></div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="relative w-full bg-surface-container-high border-2 border-primary text-primary py-5 font-mono font-bold text-lg tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-on-primary flex items-center justify-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                  >
                    {/* Futuristic scanner line */}
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-primary/30 to-transparent group-hover/btn:left-[200%] transition-all duration-1000 ease-in-out"></div>

                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        <span className="tracking-[0.2em] animate-pulse">
                          TRANSMITTING...
                        </span>
                      </span>
                    ) : (
                      <>
                        <span className="tracking-[0.2em] relative z-10">
                          JOIN_US
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-headline mt-4 text-center">
                      Error transmitting signal. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
