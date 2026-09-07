import React from 'react';
import { Compass, MapPin, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
        
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-sky-400" /> Discover Your Next Adventure
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Explore Beautiful Places Around The World
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Plan and book your perfect trip with curated travel destinations and luxury packages.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-4 shadow-xl text-slate-900 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 flex items-center gap-3 px-3 w-full border-b md:border-b-0 md:border-r border-slate-200 py-2">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent focus:outline-none text-sm font-medium"
              />
            </div>
            
            <button className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Featured Getaways</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Popular Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                alt="Bali"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                Beach
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">Bali, Indonesia</h3>
              <p className="text-sm text-slate-600">Tropical beaches, ancient temples, and vibrant local culture.</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sky-600 font-bold text-lg">$899</span>
                <Link to="/destinations" className="text-slate-700 hover:text-sky-600 text-sm font-semibold flex items-center gap-1">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80"
                alt="Swiss Alps"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                Mountain
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">Swiss Alps, Switzerland</h3>
              <p className="text-sm text-slate-600">Breathtaking mountain peaks and scenic alpine train journeys.</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sky-600 font-bold text-lg">$1,499</span>
                <Link to="/destinations" className="text-slate-700 hover:text-sky-600 text-sm font-semibold flex items-center gap-1">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
                alt="Japan"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                Cultural
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-slate-900">Kyoto & Tokyo, Japan</h3>
              <p className="text-sm text-slate-600">Traditional temples, cherry blossoms, and neon streetscapes.</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sky-600 font-bold text-lg">$1,299</span>
                <Link to="/destinations" className="text-slate-700 hover:text-sky-600 text-sm font-semibold flex items-center gap-1">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
