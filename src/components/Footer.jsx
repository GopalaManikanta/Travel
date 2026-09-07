import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-white font-bold text-lg mb-2">
          <Compass className="w-5 h-5 text-sky-500" />
          <span>Wanderlust Travels</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Wanderlust Travels Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
