import React, { useState } from 'react';
import { Home, DollarSign, Calendar, Users, Star, TrendingUp, Shield, Headphones } from 'lucide-react';

const HostPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Extra Income',
      description: 'Make money from your extra space with competitive pricing tools and market insights.',
      stat: '$13,800',
      statLabel: 'Average annual earnings'
    },
    {
      icon: Calendar,
      title: 'Flexible Hosting',
      description: 'Host on your schedule with full control over availability and house rules.',
      stat: '3 nights',
      statLabel: 'Average minimum stay'
    },
    {
      icon: Shield,
      title: 'Host Protection',
      description: 'Comprehensive coverage including property damage protection up to $1M.',
      stat: '$1M',
      statLabel: 'Damage protection'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated host support team.',
      stat: '24/7',
      statLabel: 'Support availability'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Tell us about your place',
      description: 'Share some basic info, like where it is and how many guests can stay.',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '02',
      title: 'Make it stand out',
      description: 'Add 5 or more photos plus a title and description—we\'ll help you out.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      number: '03',
      title: 'Finish and publish',
      description: 'Choose if you\'d like to start with an experienced guest, set a starting price, and publish your listing.',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
          Become a Host
        </h1>
        <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
          Turn your extra space into extra income with the world's leading hospitality platform
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
          {['overview', 'benefits', 'process'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full transition-all duration-300 capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-16">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                4M+
              </div>
              <p className="text-white/80 text-lg">Active Hosts Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                $65B+
              </div>
              <p className="text-white/80 text-lg">Earned by Hosts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                1B+
              </div>
              <p className="text-white/80 text-lg">Guest Arrivals</p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Host with Airbnb?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{benefit.stat}</div>
                    <div className="text-white/60 text-sm mb-3">{benefit.statLabel}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'benefits' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/80 mb-4">{benefit.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-400">{benefit.stat}</span>
                      <span className="text-white/60 text-sm">{benefit.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'process' && (
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            It's easy to get started on Airbnb
          </h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="text-6xl font-bold text-pink-500/30 mb-4">{step.number}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-xl text-white/80 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to start hosting?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join millions of hosts who have earned over $65 billion by sharing their spaces with travelers from around the world.
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
          Become a Host Today
        </button>
      </div>
    </div>
  );
};

export default HostPage;