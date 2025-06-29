import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Airbnb Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#FF5A5F]">
              Airbnb
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 relative group ${
                isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Stays
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#FF5A5F] transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link 
              to="/experiences" 
              className={`transition-colors duration-300 relative group ${
                isActive('/experiences') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Experiences
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#FF5A5F] transition-all duration-300 ${
                isActive('/experiences') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors duration-300 relative group ${
                isActive('/services') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Services
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#FF5A5F] transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/host" 
              className="hidden md:block text-white/70 hover:text-white transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10"
            >
              Airbnb your home
            </Link>
            
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <Globe className="w-5 h-5" />
            </button>
            
            <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Menu className="w-4 h-4 text-white" />
                <div className="w-6 h-6 bg-[#FF5A5F] rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
