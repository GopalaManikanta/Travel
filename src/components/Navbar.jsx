import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    `font-semibold text-sm transition-colors ${
      isActive ? 'text-sky-600 border-b-2 border-sky-600 pb-1' : 'text-slate-600 hover:text-sky-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-600 to-orange-500 flex items-center justify-center text-white shadow">
              <Compass className="w-5 h-5" />
            </div>
            <span>Wanderlust</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={activeClass}>
              Home
            </NavLink>
            <NavLink to="/destinations" className={activeClass}>
              Destinations
            </NavLink>
            <NavLink to="/packages" className={activeClass}>
              Packages
            </NavLink>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-sky-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <NavLink to="/" end className="block text-slate-700 hover:text-sky-600 font-medium py-1" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/destinations" className="block text-slate-700 hover:text-sky-600 font-medium py-1" onClick={() => setIsOpen(false)}>
            Destinations
          </NavLink>
          <NavLink to="/packages" className="block text-slate-700 hover:text-sky-600 font-medium py-1" onClick={() => setIsOpen(false)}>
            Packages
          </NavLink>
          <NavLink to="/about" className="block text-slate-700 hover:text-sky-600 font-medium py-1" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className="block text-slate-700 hover:text-sky-600 font-medium py-1" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
