import React from 'react';

import { Users, Globe2, Award, Heart, ShieldCheck, Smile } from 'lucide-react';
 
export default function About() {

  const stats = [

    { label: 'Happy Travelers', value: '15,000+', icon: <Smile className="w-7 h-7 text-sky-600" /> },

    { label: 'Countries Covered', value: '50+', icon: <Globe2 className="w-7 h-7 text-orange-500" /> },

    { label: '5-Star Ratings', value: '4.9 / 5', icon: <Award className="w-7 h-7 text-amber-500" /> },

    { label: 'Tour Directors', value: '120+', icon: <Users className="w-7 h-7 text-emerald-500" /> },

  ];
 
  const team = [

    {

      name: 'Alexander Wright',

      role: 'Founder & CEO',

      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',

      bio: 'Former National Geographic explorer with 18+ years of experience curating luxury expedition travel.'

    },

    {

      name: 'Sophia Martinez',

      role: 'Head of Global Concierge',

      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',

      bio: 'Passionate hospitality leader dedicated to seamless 24/7 guest satisfaction across all continents.'

    },

    {

      name: 'Liam Chen',

      role: 'Lead Sustainable Tourism Director',

      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',

      bio: 'Environmental scientist committed to carbon-neutral travel itineraries and supporting indigenous communities.'

    }

  ];
 
  return (
<div className="min-h-screen bg-slate-50 pb-20">

      {/* Header Banner */}
<section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 text-center">
<div className="max-w-4xl mx-auto space-y-4">
<span className="text-sky-400 font-bold uppercase tracking-widest text-xs">

            Our Story & Mission
</span>
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">

            Transforming How The World Explores
</h1>
<p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">

            Wanderlust Travels was founded on a simple vision: to make world-class travel effortless, authentic, and deeply memorable.
</p>
</div>
</section>
 
      {/* Stats Bar */}
<section className="bg-white border-b border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {stats.map((stat, i) => (
<div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
<div className="flex justify-center mb-1">{stat.icon}</div>
<h3 className="text-3xl font-extrabold text-slate-900">{stat.value}</h3>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
</div>

            ))}
</div>
</div>
</section>
 
      {/* Mission & Story Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Empowering Journeys</span>
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">

              We Believe Travel Is More Than Just A Destination
</h2>
<p className="text-sm md:text-base text-slate-600 leading-relaxed">

              Since our inception in 2018, we have helped over 15,000 travelers step outside their comfort zones, connect with diverse cultures, and create lifelong memories.
</p>
 
            <div className="space-y-4 pt-2">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-1">
<ShieldCheck className="w-5 h-5" />
</div>
<div>
<h4 className="text-base font-bold text-slate-900">Uncompromising Safety Standards</h4>
<p className="text-xs text-slate-500 mt-1">Comprehensive travel insurance partners, certified local guides, and real-time safety monitoring.</p>
</div>
</div>
 
              <div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-1">
<Heart className="w-5 h-5" />
</div>
<div>
<h4 className="text-base font-bold text-slate-900">Eco-Conscious & Sustainable</h4>
<p className="text-xs text-slate-500 mt-1">We donate 2% of every booking to ocean conservation and forest restoration programs worldwide.</p>
</div>
</div>
</div>
</div>
 
          <div className="relative">
<img

              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"

              alt="Travelers enjoying sunset"

              className="w-full h-[400px] object-cover rounded-3xl shadow-xl"

            />
</div>
</div>
</section>
 
      {/* Leadership Team */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-10">
<div className="text-center max-w-2xl mx-auto space-y-2">
<span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Meet The Minds</span>
<h2 className="text-3xl font-extrabold text-slate-900">Our Expert Leadership Team</h2>
<p className="text-sm text-slate-500">Dedicated travel directors bringing passion, local insights, and perfection to your trips.</p>
</div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {team.map((member, i) => (
<div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
<img

                src={member.image}

                alt={member.name}

                className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-sky-100"

              />
<div>
<h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
<span className="text-xs font-bold text-sky-600">{member.role}</span>
</div>
<p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
</div>

          ))}
</div>
</section>
</div>

  );

}
 