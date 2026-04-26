import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md shadow-sm border-b border-on-surface/5">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 w-full mx-auto">
        <div className="flex items-center gap-8 text-on-surface">
          <Link
            className="text-xl font-headline font-bold tracking-tighter"
            to="/"
          >
            Thinkspace
          </Link>
        </div>
        <a
          href="#join"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-headline font-bold text-sm tracking-tight active:scale-95 duration-100 transition-transform hover:opacity-90"
        >
          Start Building
        </a>
      </nav>
    </header>
  );
}
