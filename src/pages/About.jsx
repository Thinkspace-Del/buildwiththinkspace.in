import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-orange-800-fixed selection:text-on-primary-fixed-variant relative">
      <style>
        {`
          .blueprint-grid {
            background-image:
              linear-gradient(
                to right,
                rgba(228, 190, 177, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(228, 190, 177, 0.1) 1px,
                transparent 1px
              );
            background-size: 40px 40px;
          }
          .dark-veil {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.03;
            pointer-events: none;
          }
        `}
      </style>
      <div className="fixed inset-0 dark-veil z-[-1]"></div>

      {/* TopAppBar */}
      <Navbar />

      <main className="pt-16 overflow-hidden">
        {/* Hero Storytelling Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 blueprint-grid">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              {/* Text Content */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-orange-500">
                    Status: Open Workshop
                  </span>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter leading-[0.9] text-on-surface">
                    Don't let your day <br />
                    <span className="text-orange-500 italic">sweep away.</span>
                  </h1>
                </div>
                <div className="max-w-xl space-y-8">
                  <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed">
                    The modern world is designed to keep you horizontal. It
                    wants you blindly consuming in bed, scrolling through lives
                    you aren't living, watching things you aren't making.
                  </p>
                  <div className="p-6 bg-surface-container-low border-l-4 border-primary">
                    <span className="font-mono text-xs text-on-surface-variant block mb-2">
                      METRIC_01
                    </span>
                    <span className="text-lg md:text-xl text-on-surface font-medium italic">
                      "Consumption is the death of curiosity."
                    </span>
                  </div>
                </div>
              </div>
              {/* Visual Content */}
              <div className="lg:col-span-5 relative group">
                <div className="aspect-4/5 bg-surface-container-high overflow-hidden rounded-lg shadow-2xl">
                  <img
                    alt="Gritty black and white close-up of a designer's messy desk with sketches, a laptop, and a warm desk lamp light"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANjn9pQMNSVkJuVQWs3zmKtv7szCcvQU3G9TpanuAqFJiKP0or2z225WLiCqeHnJbRtuhXb1S9pQNY5bLxz5i7_10OMZUZtvU8fS0Qc6yI-3hYoFurtlLxt9ZtUEDGq7xhjeDltfBUl8tWTHAFyVu_-Plqtn4_1CGrhkmN65yqZgImQGOseq_IQmXYj7i0kUq0Ppczsbwk7Zy9s6f9tDWP2MFOEVMdzCfTDdhDyB6XB7DZ9cwJwuXidL_XALC0tIIMRQxwq1WcGIed"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-surface-container-lowest p-6 shadow-2xl max-w-xs border-outline-variant/15 border z-10">
                  <p className="font-mono text-xs text-orange-500 mb-2">
                    // THE_WORKSHOP
                  </p>
                  <p className="text-sm text-on-surface-variant leading-tight">
                    Where ideas stop being dreams and start being demos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Central Quote: Wide-width callout */}
        <section className="py-32 md:py-48 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="px-6 md:px-24 max-w-7xl mx-auto">
            <div className="w-full">
              <span className="font-mono text-xs text-secondary mb-8 block">
                [ MESSAGE_LOG ]
              </span>
              <blockquote className="text-4xl md:text-7xl lg:text-8xl font-mono font-medium tracking-tighter text-on-surface leading-tight border-l-8 border-primary pl-10 md:pl-20 py-4">
                Life’s too short to let your ideas
                <span className="bg-orange-800-fixed px-3 md:px-6 whitespace-nowrap">
                  be ideas.
                </span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Community Ethos & Bento Specs */}
        <section className="py-24 px-6 md:px-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface">
                Community Ecosystem
              </h2>
              <p className="text-on-surface-variant mt-2 font-mono text-sm uppercase tracking-widest">
                System requirements: 100% Agency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bento Item 1: Featured */}
              <div className="md:col-span-2 lg:row-span-2 p-10 bg-surface-container-lowest flex flex-col justify-between group border border-outline-variant/5">
                <div>
                  <span className="font-mono text-[10px] text-orange-500 bg-orange-800-fixed px-2 py-0.5 rounded-full uppercase tracking-widest">
                    Active State
                  </span>
                  <h3 className="text-4xl md:text-5xl font-headline font-bold mt-8 leading-none">
                    The hub for the obsessed.
                  </h3>
                  <p className="mt-8 text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                    Thinkspace is not a school. It's a gathering of people who
                    realized that the only way to learn is to build. We provide
                    the infrastructure, the pressure, and the community. You
                    provide the grit.
                  </p>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-outline-variant/30 pt-6">
                  <span className="font-mono text-sm uppercase">
                    Latent Potential
                  </span>
                  <span className="font-mono text-sm text-orange-500 font-bold">
                    100.00%
                  </span>
                </div>
              </div>
              {/* Bento Item 2 */}
              <div className="p-10 bg-surface flex flex-col justify-between border border-outline-variant/10 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:scale-110 transition-transform">
                  electric_bolt
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-3">
                    High Kinetic Energy
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    We move fast. We break things. We ship before we're ready.
                  </p>
                </div>
              </div>
              {/* Bento Item 3 */}
              <div className="p-10 bg-surface flex flex-col justify-between border border-outline-variant/10 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-orange-500 text-4xl group-hover:scale-110 transition-transform">
                  terminal
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xl mb-3">
                    Code as Craft
                  </h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Treating engineering and design like fine art.
                  </p>
                </div>
              </div>
              {/* Bento Item 4 */}
              <div className="md:col-span-2 lg:col-span-1 p-10 bg-inverse-surface text-inverse-on-surface flex items-center gap-8 group">
                <div className="flex-1">
                  <span className="font-mono text-[10px] text-orange-500-fixed tracking-widest uppercase">
                    Protocol
                  </span>
                  <h4 className="text-2xl font-headline font-bold mt-2 italic">
                    Ship every weekend.
                  </h4>
                </div>
                <div className="w-16 h-16 rounded-full border border-primary-fixed/30 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                  <span className="material-symbols-outlined text-orange-500-fixed">
                    sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contrast Section: Side-by-side on desktop */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-y border-outline-variant/10">
          <div className="bg-surface p-12 md:p-24 lg:p-32 border-b md:border-b-0 md:border-r border-outline-variant/10">
            <div className="max-w-md mx-auto md:ml-auto md:mr-0">
              <span className="font-mono text-xs text-secondary mb-6 block underline underline-offset-4 tracking-widest uppercase">
                01. THE CONSUMER
              </span>
              <h3 className="text-4xl lg:text-5xl font-headline font-bold mb-8">
                Passive drift.
              </h3>
              <ul className="space-y-6 font-mono text-sm md:text-base text-on-surface-variant">
                <li className="flex items-start gap-4">
                  <span className="text-error font-bold">×</span> Infinite
                  scrolling loops.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-error font-bold">×</span> Waiting for
                  inspiration.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-error font-bold">×</span> Watching
                  others create.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-error font-bold">×</span> Permission
                  seeking.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-12 md:p-24 lg:p-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-800/5 rounded-bl-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="max-w-md mx-auto md:mr-auto md:ml-0">
              <span className="font-mono text-xs text-orange-500 mb-6 block underline underline-offset-4 tracking-widest uppercase">
                02. THE BUILDER
              </span>
              <h3 className="text-4xl lg:text-5xl font-headline font-bold mb-8">
                Active intent.
              </h3>
              <ul className="space-y-6 font-mono text-sm md:text-base text-on-surface-variant">
                <li className="flex items-start gap-4 text-orange-500 font-bold">
                  <span className="text-xl">→</span> Building in public.
                </li>
                <li className="flex items-start gap-4 text-orange-500 font-bold">
                  <span className="text-xl">→</span> Calculated chaos.
                </li>
                <li className="flex items-start gap-4 text-orange-500 font-bold">
                  <span className="text-xl">→</span> Direct feedback loops.
                </li>
                <li className="flex items-start gap-4 text-orange-500 font-bold">
                  <span className="text-xl">→</span> Forging your own path.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Call */}
        <section className="py-48 lg:py-64 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter mb-16">
              Stop dreaming. <br />
              Start building.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link
                to="/start-building"
                className="w-full md:w-auto bg-primary text-on-primary px-16 py-5 text-lg font-bold tracking-tight rounded hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Join the next cohort
              </Link>
              <button className="w-full md:w-auto font-mono text-xs uppercase tracking-[0.2em] text-on-surface hover:text-primary transition-colors py-4 flex items-center justify-center gap-2">
                Read our manifesto
                <span className="material-symbols-outlined text-sm">east</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
