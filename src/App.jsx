// import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-orange-800-fixed selection:text-on-primary-fixed-variant">
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
          .material-symbols-outlined {
            font-variation-settings:
              "FILL" 0,
              "wght" 400,
              "GRAD" 0,
              "opsz" 24;
          }
        `}
      </style>

      {/* TopAppBar */}
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-230.25 flex flex-col justify-center px-6 md:px-12 py-24 blueprint-grid border-b border-outline-variant/10">
          <div className="max-w-6xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-800"></span>
              Version 1.0 / The Collective
            </div>
            <h1 className="font-headline font-bold text-5xl md:text-8xl leading-[1.05] tracking-tighter text-on-surface mb-12 max-w-5xl">
              Humans were never meant to just consume the world around them; we
              were meant to
              <span className="text-orange-800 italic underline decoration-outline-variant/30 underline-offset-8">
                {" "}
                shape it.
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link
                to="/join"
                className="bg-orange-800 text-white px-10 py-4 rounded-lg font-headline font-bold text-lg tracking-tight active:scale-95 transition-all shadow-lg shadow-primary/10"
              >
                Start Building
              </Link>
              <button className="group flex items-center gap-3 font-mono text-sm font-medium hover:text-primary transition-colors py-4 px-6">
                Explore the Community
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={12} />
                </span>
              </button>
            </div>
          </div>
          {/* Asymmetric Accent */}
          <div className="absolute bottom-12 right-12 hidden lg:block text-right">
            <p className="font-mono text-xs text-on-surface-variant max-w-50 leading-relaxed opacity-60">
              [System_Note: 001]
              <br />
              Creativity is the only true renewable resource. Don't let it
              stagnate.
            </p>
          </div>
        </section>

        {/* What is Thinkspace Section */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-4/5 bg-surface-container overflow-hidden rounded-xl">
                <img
                  alt="Human Creation"
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                  data-alt="close-up of focused creative hands working on a detailed architectural blueprint with pencils and measuring tools in warm natural light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuepU3jNn5RG-cqGM6nI0QpYazfJCPPubU36EdlPSCKpv2TyZCgfHFnG0nmwAY-SdoYoSd56g0dZ_zWQLbyatgXbBDPTihoOb9xKzGyzNDk1LHWoMxPuhqFJW1ZyvUDDooryyPYTePAoWKirm9Wr2q-twq5_7GKgnfWm4BEDyzNvRoqh79CpQSF2b2cm4bXP7QlOp2HY3ijLH9hPSYNNtzplX8SnSYJ7MRDHI1SsjOV8Dg3OnIiLOMzgRSPPRHrGWFLmhdwgjnOBw"
                />
              </div>
              {/* Hacky Annotation Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 shadow-xl max-w-60 border border-outline-variant/10">
                <span className="font-mono text-[10px] text-orange-500 block mb-2">
                  ANNOTATION_REF_04
                </span>
                <p className="font-body text-sm leading-snug text-on-surface">
                  "The prototype is the truth. Everything else is just
                  speculation."
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-orange-800/5 text-orange-500 font-mono text-xs rounded-full">
                THE_DEFINITION
              </div>
              <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-surface">
                A space where ideas aren’t just talked about—they’re prototyped,
                sketched, coded, sung, painted, and brought to life.
              </h2>
              <div className="h-px w-24 bg-outline-variant/30"></div>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-lg">
                Thinkspace is the sanctuary for the restless. We provide the
                structure, the community, and the momentum to move your vision
                from a fleeting thought to a physical or digital reality.
              </p>
            </div>
          </div>
        </section>

        {/* Multiple Heads Section (Bento Style) */}
        <section className="py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
              <h2 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter mb-6">
                Multiple Heads, One Goal.
              </h2>
              <p className="font-mono text-sm text-on-surface-variant tracking-tight max-w-2xl">
                A hallmark for a great product, a great song, a great image
                comes when multiple heads come together, from different
                backgrounds...
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Songwriters / Artists */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 h-100">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="font-mono text-xs text-orange-500">
                    01 // CREATIVES
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-3xl mb-2">
                      Songwriters &amp; Artists
                    </h3>
                    <p className="text-on-surface-variant font-body max-w-xs">
                      Building new worlds through sound and canvas, sharing the
                      struggle of the blank page.
                    </p>
                  </div>
                </div>
                <img
                  alt="Artist"
                  className="absolute top-0 right-0 w-1/2 h-full object-cover grayscale contrast-125 opacity-20 group-hover:opacity-40 transition-opacity"
                  data-alt="high contrast grainy black and white photo of a songwriter hunched over a piano in a dimly lit room with sheet music scattered around"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUWbiuGqCc6eib7UZtqlxdg4epUquaEzONeOc7qv54BefairglbYYKQbNePJblVTKY2MQuLXz4Gy4L9su33XsptHZZQQx1XUVlU1Zoz8TbBohWDf4S8RreOOKSqXjeQU-kCt3_YEV2DPeKKD7Y9SJL6ZlpPrxZG01kojId9O2WzmElg46hLRNmc8Xdsjaiq9Gp913lQHbwlO2GiJ9CKL-MGJM9SlvVGcX1XOmIEVssOBVdFnbjD3JjCB_6z92ivXsqpLl-gdPvVoA"
                />
              </div>

              {/* Developers */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-high p-8 h-100">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="font-mono text-xs text-orange-500">
                    02 // BUILDERS
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-3xl mb-2">
                      Developers
                    </h3>
                    <p className="text-on-surface-variant font-body">
                      Architecting the digital future, one line of code at a
                      time.
                    </p>
                  </div>
                </div>
                <img
                  alt="Code"
                  className="absolute top-0 right-0 w-full h-full object-cover grayscale contrast-150 opacity-10 group-hover:scale-110 transition-transform duration-[2s]"
                  data-alt="grainy black and white overhead view of a messy developer desk with multiple monitors, tangled wires, and mechanical keyboards"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKlIJ6i8wePACf2W0lBbkN57qC9cVDhxqDlUIOrvF4dUX_SA2hzj8WGMfZ7auRaVC8oeQRNYDLznF6G6bdrQfz9IGT5HNwSRH9YyeTTEHn_YQXnqHGs9VaqPLss5tApApN6PXOsLEQUZZuYbz_nXD_1u3vMwFEZAoVRyQCxCyHDZ2WE9VhzeYgQLylup1tQ3eo6mH7MmvZSlHb4cFYHGVQZvY0_37Xpnw44uqwm5OhAPsyCZPwAN2HL-XlJjp1QgJtW1nJlk_Fio"
                />
              </div>

              {/* Dancers / Performers */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container p-8 h-100">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="font-mono text-xs text-orange-500">
                    03 // MOVERS
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-3xl mb-2">
                      Dancers
                    </h3>
                    <p className="text-on-surface-variant font-body">
                      Prototyping expression through movement and physical
                      space.
                    </p>
                  </div>
                </div>
                <img
                  alt="Dance"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-30 group-hover:opacity-50 transition-opacity"
                  data-alt="black and white dynamic action shot of a dancer in a industrial studio with dramatic shadows and dust motes in the air"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeqNdhgmltS1EcVzbaBQfPJ8TfmYLvNXKeFZJZ0FoyBAcepUqTV_KMMWiPTTMpvAEwLfEvLtWpy0-9_4qztwxMHlTDp0vOm7PcsuS7yqT70J0AyMml689QXb0Mo57S__zKR4Exzrg6kLDWmaWNVtVtXhgsdl1DDJkOh_NU-ABIlFfE_EnvBxSj45LuRy18UTHHABj564W0_Qz3YLGTV5EJYJpCu0v3hceIGiXbn7RbJ8lw1hH8Tctp6Xy6dVvsRqEhpHjxuv2ow08"
                />
              </div>

              {/* The Collective Quote */}
              <div className="md:col-span-2 bg-orange-800 flex items-center p-12 rounded-xl text-on-primary">
                <div className="relative">
                  <span className="material-symbols-outlined text-6xl opacity-20 absolute -top-8 -left-8">
                    format_quote
                  </span>
                  <blockquote className="font-headline font-bold text-3xl md:text-4xl leading-tight">
                    "The diversity of the tribe is the strength of the engine.
                    When the painter talks to the coder, something impossible
                    begins to happen."
                  </blockquote>
                  <div className="mt-8 font-mono text-xs tracking-widest uppercase opacity-70">
                    — THINKSPACE COLLECTIVE MANIFESTO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA / The Gallery Finish */}
        <section className="py-32 bg-surface flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-3xl space-y-10">
            <div className="font-mono text-xs tracking-[0.4em] text-on-surface-variant opacity-40">
              STATIONARY_END_SEQUENCE
            </div>
            <h2 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter">
              Your move.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/join"
                className="bg-on-surface text-surface px-12 py-5 rounded-lg font-headline font-bold text-xl active:scale-95 transition-all"
              >
                Apply to Build
              </Link>
            </div>
            <div className="pt-10">
              <p className="font-mono text-[10px] text-on-surface-variant max-w-75 mx-auto opacity-50 uppercase leading-relaxed">
                No corporate fluff. No endless meetings. Just building. The
                workshop is open 24/7.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
