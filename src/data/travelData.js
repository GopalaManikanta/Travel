export const destinations = [
  {
    id: 'dest-1',
    title: 'Bali, Indonesia',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 240,
    price: '$899',
    duration: '7 Days',
    location: 'Indonesia',
    description: 'Experience pristine tropical beaches, ancient temples, lush rice terraces, and vibrant local culture in Bali.',
    popular: true
  },
  {
    id: 'dest-2',
    title: 'Swiss Alps, Switzerland',
    category: 'Mountain',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviews: 180,
    price: '$1,499',
    duration: '6 Days',
    location: 'Switzerland',
    description: 'Breathtaking mountain peaks, scenic alpine train journeys, world-class skiing, and charming luxury chalets.',
    popular: true
  },
  {
    id: 'dest-3',
    title: 'Kyoto & Tokyo, Japan',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    rating: 4.88,
    reviews: 310,
    price: '$1,299',
    duration: '8 Days',
    location: 'Japan',
    description: 'Immerse yourself in traditional temples, cherry blossom gardens, futuristic neon streetscapes, and culinary excellence.',
    popular: true
  },
  {
    id: 'dest-4',
    title: 'Santorini, Greece',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviews: 420,
    price: '$1,199',
    duration: '5 Days',
    location: 'Greece',
    description: 'Iconic whitewashed cliffside villas, vibrant Aegean sea sunsets, volcanic beaches, and exquisite Mediterranean cuisine.',
    popular: false
  },
  {
    id: 'dest-5',
    title: 'Maasai Mara, Kenya',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    rating: 4.85,
    reviews: 145,
    price: '$1,650',
    duration: '6 Days',
    location: 'Kenya',
    description: 'Witness the epic wildlife migration, luxury safari glamping under starry skies, and authentic Maasai tribal culture.',
    popular: false
  },
  {
    id: 'dest-6',
    title: 'Amalfi Coast, Italy',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviews: 260,
    price: '$1,350',
    duration: '7 Days',
    location: 'Italy',
    description: 'Dramatic coastal cliffs, pastel villages, limoncello tasting tours, and romantic boat cruises along the Tyrrhenian Sea.',
    popular: true
  }
];

export const packages = [
  {
    id: 'pkg-1',
    title: 'Grand European Splendor',
    destinations: 'Paris • Rome • Venice • Zurich',
    days: 10,
    nights: 9,
    price: 2299,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    inclusions: ['4-Star Hotel Stays', 'Daily Breakfast & 4 Dinners', 'Express Bullet Train Pass', 'Guided Sightseeing Tours'],
    overview: 'A comprehensive journey covering Europe\'s iconic historical landmarks, romantic canals, and majestic alpine scenery.'
  },
  {
    id: 'pkg-2',
    title: 'Island Romance & Luxury Escape',
    destinations: 'Maldives Private Resort',
    days: 6,
    nights: 5,
    price: 1899,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    badge: 'Honeymoon Special',
    inclusions: ['Overwater Villa Stay', 'All-Inclusive Meals & Drinks', 'Seaplane Airport Transfers', 'Sunset Dolphin Cruise'],
    overview: 'Unwind in pure paradise with crystal clear turquoise waters, private butler services, and luxury spa treatments.'
  },
  {
    id: 'pkg-3',
    title: 'Classic Golden Triangle & Taj Mahal',
    destinations: 'Delhi • Agra • Jaipur',
    days: 7,
    nights: 6,
    price: 999,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    badge: 'Cultural Highlight',
    inclusions: ['Heritage 5-Star Hotel Stay', 'Private AC Vehicle & Chauffeur', 'Taj Mahal Sunrise Ticket', 'Elephant Ride at Amber Fort'],
    overview: 'Discover royal palaces, vibrant bazaars, ancient forts, and the world-famous Taj Mahal monument of love.'
  },
  {
    id: 'pkg-4',
    title: 'Patagonia & Glacier Expedition',
    destinations: 'Torres del Paine • El Calafate',
    days: 8,
    nights: 7,
    price: 2450,
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80',
    badge: 'Adventure Thrill',
    inclusions: ['Eco-Lodge Accommodation', 'Expert Trekking Guides', 'Glacier Boat Navigation', 'All Trail Permits & Meals'],
    overview: 'Hike through breathtaking granite towers, turquoise glacial lakes, and iceberg-filled fjords at the end of the world.'
  }
];

export const testimonials = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'Frequent Traveler',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'Wanderlust Travels curated our Bali getaway effortlessly! From private transfers to hidden waterfalls, every detail was perfectly arranged.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Michael & Elena Vance',
    role: 'Honeymooners',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'The Maldives overwater villa package exceeded all our expectations. 24/7 support made us feel completely cared for throughout.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Adventure Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'The Japanese Golden Route tour was seamless. High-speed rail tickets, local food tours, and traditional ryokan stays were phenomenal!',
    rating: 5
  }
];

export const faqs = [
  {
    q: 'How do I book a tour package?',
    a: 'You can select any package on our Tour Packages or Destinations page and click "Book Now". Fill in your preferred travel dates and traveler count, and our travel concierge will confirm your booking within 2 hours.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We offer free cancellation up to 14 days prior to departure for most standard packages. Flexi-booking protection allows you to reschedule dates without penalty up to 48 hours before travel.'
  },
  {
    q: 'Are flights included in the package prices?',
    a: 'Selected packages include international flight options. All package listings display whether flights are included or can be added as an optional flight add-on during checkout.'
  },
  {
    q: 'Do you assist with travel visas and travel insurance?',
    a: 'Yes! Our visa specialists provide complete visa documentation assistance and offer comprehensive worldwide medical and travel cancellation insurance.'
  }
];
