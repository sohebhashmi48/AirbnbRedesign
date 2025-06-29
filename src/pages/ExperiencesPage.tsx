import React, { useState } from 'react';
import { Star, Clock, Users, MapPin, Calendar, Search } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  groupSize: string;
  category: string;
  image: string;
  host: string;
  description: string;
  highlights: string[];
}

const mockExperiences: Experience[] = [
  {
    id: '1',
    title: 'Virtual Reality Art Gallery Tour',
    location: 'San Francisco, CA',
    price: 45,
    rating: 4.9,
    duration: '2 hours',
    groupSize: 'Up to 8',
    category: 'Art & Culture',
    image: 'https://images.pexels.com/photos/3761020/pexels-photo-3761020.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Alex Chen',
    description: 'Immerse yourself in cutting-edge digital art through VR technology.',
    highlights: ['VR headsets provided', 'Interactive art pieces', 'Meet local artists']
  },
  {
    id: '2',
    title: 'Holographic Cooking Class',
    location: 'Tokyo, Japan',
    price: 85,
    rating: 4.8,
    duration: '3 hours',
    groupSize: 'Up to 6',
    category: 'Food & Drink',
    image: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Yuki Tanaka',
    description: 'Learn traditional Japanese cuisine with holographic chef assistance.',
    highlights: ['Holographic chef guide', 'Traditional recipes', 'Take home ingredients']
  },
  {
    id: '3',
    title: 'Drone Photography Adventure',
    location: 'Santorini, Greece',
    price: 120,
    rating: 4.9,
    duration: '4 hours',
    groupSize: 'Up to 4',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Maria Kostas',
    description: 'Capture stunning aerial views of Santorini with professional drones.',
    highlights: ['Professional drones', 'Editing workshop', 'Sunset shots']
  },
  {
    id: '4',
    title: 'AI Music Production Workshop',
    location: 'Nashville, TN',
    price: 95,
    rating: 4.7,
    duration: '3 hours',
    groupSize: 'Up to 10',
    category: 'Music',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Jake Williams',
    description: 'Create your own music using AI-powered production tools.',
    highlights: ['AI music software', 'Professional studio', 'Take home your track']
  },
  {
    id: '5',
    title: 'Augmented Reality City Walk',
    location: 'London, UK',
    price: 35,
    rating: 4.6,
    duration: '2.5 hours',
    groupSize: 'Up to 12',
    category: 'History & Culture',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Emma Thompson',
    description: 'Explore London\'s history through augmented reality overlays.',
    highlights: ['AR glasses provided', 'Historical recreations', 'Hidden stories']
  },
  {
    id: '6',
    title: 'Zero Gravity Yoga Session',
    location: 'Los Angeles, CA',
    price: 150,
    rating: 4.8,
    duration: '1.5 hours',
    groupSize: 'Up to 6',
    category: 'Wellness',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: 'Sarah Martinez',
    description: 'Experience yoga in a simulated zero gravity environment.',
    highlights: ['Anti-gravity chamber', 'Certified instructor', 'Unique experience']
  }
];

const ExperiencesPage: React.FC = () => {
  const [experiences] = useState<Experience[]>(mockExperiences);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Art & Culture', 'Food & Drink', 'Photography', 'Music', 'History & Culture', 'Wellness'];

  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exp.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Futuristic Experiences
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Discover cutting-edge activities and immersive adventures powered by tomorrow's technology
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((experience) => (
          <div
            key={experience.id}
            className="group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">{experience.rating}</span>
              </div>

              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-md rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">{experience.category}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {experience.title}
              </h3>
              
              <div className="flex items-center text-white/70 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{experience.location}</span>
              </div>

              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                {experience.description}
              </p>

              <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{experience.groupSize}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {experience.highlights.slice(0, 2).map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-white">${experience.price}</span>
                  <span className="text-white/60 text-sm"> per person</span>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;