import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-white/5 backdrop-blur-xl border-t border-white/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">AirCover</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Anti-discrimination</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Disability support</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Cancellation options</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Report neighborhood concern</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Airbnb your home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">AirCover for Hosts</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Hosting resources</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Community forum</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Hosting responsibly</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Join a free Hosting class</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="text-white font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Newsroom</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">New features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Investors</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Gift cards</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/70 text-sm mb-4">Get the latest updates and exclusive offers</p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-white/15 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-r-lg transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/70 text-sm">© 2024 Airbnb, Inc.</p>
              <div className="flex flex-wrap items-center space-x-4 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Privacy</a>
                <span className="text-white/30">·</span>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Terms</a>
                <span className="text-white/30">·</span>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Sitemap</a>
                <span className="text-white/30">·</span>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Company details</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300">
                <Globe className="w-4 h-4" />
                <span className="text-sm">English (US)</span>
              </button>
              <button className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                $ USD
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;