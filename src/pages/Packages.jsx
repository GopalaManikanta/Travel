import React, { useState } from "react";

import {
  Calendar,
  CheckCircle2,
  Shield,
  Sparkles,
  Check,
  ArrowRight,
  X,
} from "lucide-react";

import { packages } from "../data/travelData";

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const [booked, setBooked] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 to-orange-950 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">
            All-Inclusive Holidays
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Handcrafted Tour Packages
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Curated travel itineraries including luxury stays, daily meals,
            local transfers, and expert tour directors.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Flexi Cancellation
              </h4>
              <p className="text-xs text-slate-500">
                Free rescheduling up to 48 hours prior
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Customizable Itineraries
              </h4>
              <p className="text-xs text-slate-500">
                Tailor days & add optional excursions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Zero Hidden Costs
              </h4>
              <p className="text-xs text-slate-500">
                All local taxes & entrance fees included
              </p>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image & Price */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </span>
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl shadow-lg text-right">
                  <div className="text-xl font-extrabold text-sky-400">
                    ${pkg.price}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider">
                    per person
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {pkg.days} Days / {pkg.nights} Nights
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 mt-1">
                    📍 {pkg.destinations}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {pkg.overview}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Package Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {pkg.inclusions.map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    All taxes & fees included
                  </span>
                  <button
                    onClick={() => {
                      setSelectedPkg(pkg);
                      setBooked(false);
                    }}
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
                  >
                    Book Package <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}

      {selectedPkg && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1.5"
            >
              <X className="w-4 h-4" />
            </button>

            {!booked ? (
              <>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Reserve Package
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {selectedPkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedPkg.days} Days Tour • ${selectedPkg.price}/person
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
                      placeholder="enter your name"
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
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-2.5 rounded-xl transition shadow"
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
                  Package Booked!
                </h4>
                <p className="text-xs text-slate-600">
                  Your reservation request for{" "}
                  <strong>{selectedPkg.title}</strong> has been received.
                </p>
                <button
                  onClick={() => setSelectedPkg(null)}
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
