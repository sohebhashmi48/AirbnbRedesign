export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  type: string;
  beds: number;
  baths: number;
  guests: number;
  host: string;
  amenities: string[];
  description: string;
}