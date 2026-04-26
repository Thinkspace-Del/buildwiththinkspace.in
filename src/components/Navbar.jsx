import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ showAction = false }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md shadow-sm border-b border-border/10">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 w-full mx-auto">
        <div className="flex items-center gap-8 text-foreground">
          <Link
            className="text-xl font-headline font-bold tracking-tighter"
            to="/"
          >
            Thinkspace
          </Link>
        </div>
        <a
          href="#join"
          className={`bg-primary text-primary-foreground px-6 py-2 rounded-none font-bold text-sm tracking-tight active:scale-95 transition-all duration-500 hover:opacity-90 ${
            showAction ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          Start Building
        </a>
      </nav>
    </header>
  );
}
