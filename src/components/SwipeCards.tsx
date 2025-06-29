import React, { useState, useEffect } from 'react';
import { Heart, X, Star, MapPin, Users, Bed, Bath } from 'lucide-react';
import { Property } from '../types/Property';

interface SwipeCardsProps {
  properties: Property[];
  onLike: (property: Property) => void;
  onDislike: (property: Property) => void;
}

const SwipeCards: React.FC<SwipeCardsProps> = ({ properties, onLike, onDislike }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentProperty = properties[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating || !currentProperty) return;

    setIsAnimating(true);
    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === 'right') {
        onLike(currentProperty);
      } else {
        onDislike(currentProperty);
      }

      setCurrentIndex(prev => prev + 1);
      setIsAnimating(false);
      setSwipeDirection(null);
    }, 300);
  };

  if (currentIndex >= properties.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">No more properties!</h2>
          <p className="text-white/70 text-lg">You've reviewed all available properties. Check back later for more!</p>
        </div>
      </div>
    );
  }

  if (!currentProperty) return null;

  return (
    <div className="flex flex-col items-center">
      {/* Card Stack */}
      <div className="relative w-full max-w-md mx-auto mb-8">
        {/* Background cards for stack effect */}
        {properties.slice(currentIndex + 1, currentIndex + 3).map((_, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20"
            style={{
              transform: `scale(${0.95 - index * 0.05}) translateY(${index * 10}px)`,
              zIndex: -index - 1,
            }}
          />
        ))}

        {/* Main card */}
        <div
          className={`relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ${
            isAnimating
              ? swipeDirection === 'right'
                ? 'transform translate-x-full rotate-12 opacity-0'
                : 'transform -translate-x-full -rotate-12 opacity-0'
              : 'transform translate-x-0 rotate-0 opacity-100'
          }`}
        >
          {/* Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={currentProperty.images[0]}
              alt={currentProperty.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Rating */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-medium">{currentProperty.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white">{currentProperty.title}</h3>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">${currentProperty.price}</span>
                <span className="text-white/70 text-sm block">per night</span>
              </div>
            </div>

            <div className="flex items-center text-white/70 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{currentProperty.location}</span>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-white/70">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{currentProperty.guests} guests</span>
              </div>
              <div className="flex items-center text-white/70">
                <Bed className="w-4 h-4 mr-1" />
                <span className="text-sm">{currentProperty.beds} beds</span>
              </div>
              <div className="flex items-center text-white/70">
                <Bath className="w-4 h-4 mr-1" />
                <span className="text-sm">{currentProperty.baths} baths</span>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {currentProperty.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {currentProperty.amenities.slice(0, 4).map((amenity, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                >
                  {amenity}
                </span>
              ))}
              {currentProperty.amenities.length > 4 && (
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                  +{currentProperty.amenities.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-8">
        <button
          onClick={() => handleSwipe('left')}
          disabled={isAnimating}
          className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:scale-100"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={() => handleSwipe('right')}
          disabled={isAnimating}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:scale-100"
        >
          <Heart className="w-8 h-8" />
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 flex items-center space-x-2">
        {properties.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index < currentIndex
                ? 'bg-green-500'
                : index === currentIndex
                ? 'bg-blue-500'
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeCards;