import React from 'react';
import { Shield, Zap, Headphones, Award, Users, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'AirCover Protection',
      description: 'Comprehensive protection for every booking with 24/7 support and damage coverage.',
      features: ['$1M damage protection', '24/7 safety line', 'Rebooking assistance', 'Identity verification']
    },
    {
      icon: Zap,
      title: 'Instant Book',
      description: 'Book amazing places instantly without waiting for host approval.',
      features: ['Immediate confirmation', 'Verified listings', 'Quality guarantee', 'Fast check-in']
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: 'Get help from our expert team whenever you need it, anywhere in the world.',
      features: ['24/7 multilingual support', 'Priority assistance', 'Local expertise', 'Emergency help']
    },
    {
      icon: Award,
      title: 'Superhost Program',
      description: 'Connect with exceptional hosts who provide outstanding hospitality.',
      features: ['Top-rated hosts', 'Quality assurance', 'Reliable communication', 'Exceptional service']
    },
    {
      icon: Users,
      title: 'Group Travel',
      description: 'Specialized services for group bookings and corporate travel needs.',
      features: ['Group discounts', 'Dedicated coordinator', 'Custom itineraries', 'Team building activities']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to millions of unique stays and experiences worldwide.',
      features: ['220+ countries', 'Local insights', 'Cultural experiences', 'Verified properties']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Premium Services
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Experience the future of travel with our cutting-edge services designed to make every journey seamless, safe, and extraordinary
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Experience Premium Travel?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join millions of travelers who trust Airbnb for their most important journeys. 
          Get started today and discover what makes us different.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            Start Your Journey
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;