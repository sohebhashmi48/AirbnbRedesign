import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SwipeCards from '../components/SwipeCards';
import PropertyGrid from '../components/PropertyGrid';
import { Property } from '../types/Property';
import { mockProperties } from '../data/mockProperties';

const HomePage: React.FC = () => {
  const [properties] = useState<Property[]>(mockProperties);
  const [likedProperties, setLikedProperties] = useState<Property[]>([]);
  const [isSwipeMode, setIsSwipeMode] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleLike = (property: Property) => {
    setLikedProperties(prev => [...prev, property]);
  };

  const handleDislike = (property: Property) => {
    console.log('Disliked:', property.title);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar 
        filters={searchFilters}
        onFiltersChange={setSearchFilters}
      />
      
      {/* Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
          <button
            onClick={() => setIsSwipeMode(false)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              !isSwipeMode 
                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setIsSwipeMode(true)}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              isSwipeMode 
                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Swipe Mode
          </button>
        </div>
      </div>

      {/* Property Display */}
      {isSwipeMode ? (
        <SwipeCards
          properties={properties}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ) : (
        <PropertyGrid 
          properties={properties}
          likedProperties={likedProperties}
          onLike={handleLike}
        />
      )}
    </div>
  );
};

export default HomePage;