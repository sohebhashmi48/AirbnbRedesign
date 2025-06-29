import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface SearchBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, onFiltersChange }) => {
  const handleInputChange = (field: keyof SearchFilters, value: string | number) => {
    onFiltersChange({
      ...filters,
      [field]: value
    });
  };

  return (
    <div className="mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* Location */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <MapPin className="w-5 h-5 text-white/50 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Where to?"
                value={filters.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/5 transition-all duration-300"
              />
            </div>

            {/* Check In */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-white/50 group-focus-within:text-pink-400 transition-colors" />
              </div>
              <input
                type="date"
                value={filters.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/5 transition-all duration-300 [color-scheme:dark]"
              />
            </div>

            {/* Check Out */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
              </div>
              <input
                type="date"
                value={filters.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/5 transition-all duration-300 [color-scheme:dark]"
              />
            </div>

            {/* Guests & Search */}
            <div className="flex items-center space-x-2">
              <div className="relative group flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Users className="w-5 h-5 text-white/50 group-focus-within:text-green-400 transition-colors" />
                </div>
                <select
                  value={filters.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:bg-white/5 transition-all duration-300 appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num} className="bg-slate-800 text-white">
                      {num} guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;