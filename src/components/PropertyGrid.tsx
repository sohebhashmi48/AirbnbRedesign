import React from 'react';
import { Heart, Star, MapPin, Users, Bed, Bath } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyGridProps {
  properties: Property[];
  likedProperties: Property[];
  onLike: (property: Property) => void;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, likedProperties, onLike }) => {
  const isLiked = (propertyId: string) => {
    return likedProperties.some(p => p.id === propertyId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Like button */}
            <button
              onClick={() => onLike(property)}
              className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                isLiked(property.id)
                  ? 'bg-red-500/80 border-red-400 text-white scale-110'
                  : 'bg-black/30 border-white/30 text-white hover:bg-red-500/80 hover:border-red-400 hover:scale-110'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked(property.id) ? 'fill-current' : ''}`} />
            </button>

            {/* Rating */}
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md rounded-full px-2 py-1 flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-white text-xs font-medium">{property.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-1">
                {property.title}
              </h3>
              <div className="text-right ml-2">
                <span className="text-lg font-bold text-white">${property.price}</span>
                <span className="text-white/60 text-xs block">per night</span>
              </div>
            </div>

            <div className="flex items-center text-white/70 mb-3">
              <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="text-sm truncate">{property.location}</span>
            </div>

            <div className="flex items-center justify-between text-white/60 text-sm mb-3">
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                <span>{property.guests}</span>
              </div>
              <div className="flex items-center">
                <Bed className="w-3 h-3 mr-1" />
                <span>{property.beds}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-3 h-3 mr-1" />
                <span>{property.baths}</span>
              </div>
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                {property.type}
              </span>
            </div>

            <p className="text-white/70 text-sm line-clamp-2 mb-3 leading-relaxed">
              {property.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {property.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-full border border-white/10"
                >
                  {amenity}
                </span>
              ))}
              {property.amenities.length > 3 && (
                <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">
                  +{property.amenities.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;