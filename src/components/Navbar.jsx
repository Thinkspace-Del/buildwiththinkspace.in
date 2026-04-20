import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 w-full mx-auto">
        <div className="flex items-center gap-8">
          <Link
            className="text-xl font-headline font-bold tracking-tighter text-zinc-900"
            to="/"
          >
            Thinkspace
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-headline font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-zinc-500 hover:text-orange-500"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `font-headline font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-zinc-500 hover:text-orange-500"
                }`
              }
            >
              Events
            </NavLink>
          </div>
        </div>
        <Link
          to="/start-building"
          className="bg-orange-800 text-white px-6 py-2 rounded-lg font-headline font-bold text-sm tracking-tight active:scale-95 duration-100 transition-transform hover:opacity-80"
        >
          Start Building
        </Link>
      </nav>
    </header>
  );
}
