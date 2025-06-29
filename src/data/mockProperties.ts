import { Property } from '../types/Property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, California',
    price: 850,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Villa',
    beds: 4,
    baths: 3,
    guests: 8,
    host: 'Sarah Chen',
    amenities: ['Pool', 'Beach Access', 'Wifi', 'Kitchen', 'Parking'],
    description: 'Stunning oceanfront villa with panoramic views and private beach access.'
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    location: 'New York, NY',
    price: 320,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Loft',
    beds: 2,
    baths: 2,
    guests: 4,
    host: 'Marcus Johnson',
    amenities: ['Wifi', 'Kitchen', 'Gym', 'Elevator', 'City View'],
    description: 'Sleek industrial loft in the heart of Manhattan with stunning city views.'
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 480,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Cabin',
    beds: 3,
    baths: 2,
    guests: 6,
    host: 'Emma Thompson',
    amenities: ['Fireplace', 'Hot Tub', 'Wifi', 'Kitchen', 'Ski Access'],
    description: 'Rustic charm meets modern comfort in this beautiful mountain retreat.'
  },
  {
    id: '4',
    title: 'Tropical Paradise Suite',
    location: 'Bali, Indonesia',
    price: 180,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Villa',
    beds: 2,
    baths: 2,
    guests: 4,
    host: 'Kadek Sari',
    amenities: ['Pool', 'Garden', 'Wifi', 'Kitchen', 'Spa'],
    description: 'Escape to paradise in this stunning tropical villa with lush gardens.'
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    location: 'Boston, MA',
    price: 290,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Townhouse',
    beds: 3,
    baths: 2,
    guests: 6,
    host: 'David Park',
    amenities: ['Wifi', 'Kitchen', 'Garden', 'Parking', 'Historic'],
    description: 'Charming historic brownstone in the heart of Back Bay.'
  },
  {
    id: '6',
    title: 'Desert Oasis Ranch',
    location: 'Scottsdale, Arizona',
    price: 650,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Ranch',
    beds: 5,
    baths: 4,
    guests: 10,
    host: 'Maria Rodriguez',
    amenities: ['Pool', 'Hot Tub', 'Wifi', 'Kitchen', 'Desert Views'],
    description: 'Luxury desert retreat with spectacular views and world-class amenities.'
  },
  {
    id: '7',
    title: 'Lakefront Glass House',
    location: 'Lake Tahoe, Nevada',
    price: 720,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Modern House',
    beds: 4,
    baths: 3,
    guests: 8,
    host: 'Alex Rivera',
    amenities: ['Lake Access', 'Dock', 'Wifi', 'Kitchen', 'Fireplace'],
    description: 'Contemporary glass house with breathtaking lake views and modern amenities.'
  },
  {
    id: '8',
    title: 'Urban Penthouse',
    location: 'Miami, Florida',
    price: 950,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    guests: 6,
    host: 'Isabella Martinez',
    amenities: ['Ocean View', 'Rooftop', 'Pool', 'Wifi', 'Concierge'],
    description: 'Luxurious penthouse with panoramic ocean views and premium amenities.'
  },
  {
    id: '9',
    title: 'Countryside Farmhouse',
    location: 'Tuscany, Italy',
    price: 380,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Farmhouse',
    beds: 4,
    baths: 2,
    guests: 8,
    host: 'Giuseppe Romano',
    amenities: ['Vineyard', 'Garden', 'Wifi', 'Kitchen', 'Wine Cellar'],
    description: 'Authentic Tuscan farmhouse surrounded by vineyards and olive groves.'
  },
  {
    id: '10',
    title: 'Ski Chalet Retreat',
    location: 'Whistler, Canada',
    price: 580,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Chalet',
    beds: 5,
    baths: 3,
    guests: 10,
    host: 'Sophie Laurent',
    amenities: ['Ski-in/Ski-out', 'Hot Tub', 'Fireplace', 'Wifi', 'Mountain View'],
    description: 'Luxury ski chalet with direct slope access and stunning mountain views.'
  },
  {
    id: '11',
    title: 'Floating Houseboat',
    location: 'Amsterdam, Netherlands',
    price: 220,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Houseboat',
    beds: 2,
    baths: 1,
    guests: 4,
    host: 'Lars van der Berg',
    amenities: ['Canal View', 'Bike Rental', 'Wifi', 'Kitchen', 'Unique'],
    description: 'Charming houseboat experience in the heart of Amsterdam\'s canals.'
  },
  {
    id: '12',
    title: 'Safari Lodge',
    location: 'Serengeti, Tanzania',
    price: 420,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Lodge',
    beds: 2,
    baths: 2,
    guests: 4,
    host: 'Amara Kimani',
    amenities: ['Safari Tours', 'Wildlife View', 'Restaurant', 'Wifi', 'Adventure'],
    description: 'Authentic safari experience with incredible wildlife viewing opportunities.'
  },
  {
    id: '13',
    title: 'Cliffside Retreat',
    location: 'Big Sur, California',
    price: 780,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'House',
    beds: 3,
    baths: 2,
    guests: 6,
    host: 'Rachel Green',
    amenities: ['Ocean View', 'Hot Tub', 'Hiking', 'Wifi', 'Secluded'],
    description: 'Dramatic cliffside location with unparalleled Pacific Ocean views.'
  },
  {
    id: '14',
    title: 'Tokyo Micro Apartment',
    location: 'Shibuya, Tokyo',
    price: 150,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Apartment',
    beds: 1,
    baths: 1,
    guests: 2,
    host: 'Yuki Tanaka',
    amenities: ['City Center', 'Metro Access', 'Wifi', 'Compact', 'Modern'],
    description: 'Efficient micro-living in the heart of Tokyo\'s busiest district.'
  },
  {
    id: '15',
    title: 'Northern Lights Cabin',
    location: 'Lapland, Finland',
    price: 340,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Cabin',
    beds: 2,
    baths: 1,
    guests: 4,
    host: 'Elina Virtanen',
    amenities: ['Aurora View', 'Sauna', 'Fireplace', 'Wifi', 'Winter Sports'],
    description: 'Perfect location for viewing the Northern Lights in cozy comfort.'
  },
  {
    id: '16',
    title: 'Santorini Cave House',
    location: 'Oia, Greece',
    price: 450,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Cave House',
    beds: 2,
    baths: 2,
    guests: 4,
    host: 'Dimitris Papadopoulos',
    amenities: ['Sunset View', 'Terrace', 'Traditional', 'Wifi', 'Romantic'],
    description: 'Traditional cave house with world-famous Santorini sunset views.'
  },
  {
    id: '17',
    title: 'Rainforest Treehouse',
    location: 'Costa Rica',
    price: 280,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Treehouse',
    beds: 1,
    baths: 1,
    guests: 2,
    host: 'Carlos Mendez',
    amenities: ['Canopy View', 'Wildlife', 'Eco-friendly', 'Adventure', 'Unique'],
    description: 'Elevated treehouse experience in the heart of the rainforest canopy.'
  },
  {
    id: '18',
    title: 'Parisian Atelier',
    location: 'Montmartre, Paris',
    price: 380,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    type: 'Studio',
    beds: 1,
    baths: 1,
    guests: 2,
    host: 'Marie Dubois',
    amenities: ['Artist Studio', 'Historic', 'Wifi', 'Kitchen', 'Bohemian'],
    description: 'Charming artist\'s atelier in the historic Montmartre district.'
  }
];