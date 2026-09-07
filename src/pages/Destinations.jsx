import React, { useState } from "react";

import {
  Search,
  MapPin,
  Star,
  Filter,
  ArrowRight,
  X,
  Clock,
  Check,
} from "lucide-react";

import { destinations } from "../data/travelData";

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedDest, setSelectedDest] = useState(null);

  const [booked, setBooked] = useState(false);

  const categories = ["All", "Beach", "Mountain", "Cultural", "Adventure"];

  const filteredDestinations = destinations.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 to-sky-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">
            Explore Destinations
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Find Your Next Perfect Getaway
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Discover breathtaking tropical beaches, alpine mountain ranges, and
            vibrant cultural heritage sites across the globe.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by destination or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>
        </div>

        {/* Destination Cards Grid */}

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    {dest.category}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-white text-sky-600 font-extrabold text-base px-3 py-1 rounded-xl shadow-md">
                    {dest.price}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-600" />
                        <span>{dest.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{dest.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      ({dest.reviews} reviews)
                    </span>
                    <button
                      onClick={() => {
                        setSelectedDest(dest);
                        setBooked(false);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      Book Destination <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-4">
            <Filter className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">
              No destinations found
            </h3>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}

      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1.5"
            >
              <X className="w-4 h-4" />
            </button>

            {!booked ? (
              <>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Reserve Destination
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {selectedDest.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedDest.duration} Tour Package • {selectedDest.price}
                    /person
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    setBooked(true);
                  }}
                  className="space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Manikanta"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="manikanta@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-2.5 rounded-xl transition shadow"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Booking Confirmed!
                </h4>
                <button
                  onClick={() => setSelectedDest(null)}
                  className="bg-slate-900 text-white text-xs font-semibold px-5 py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
