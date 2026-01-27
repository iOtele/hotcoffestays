import React, { useState } from "react";

import {
  MapPin,
  Wifi,
  Tv,
  Wind,
  Utensils,
  Car,
  Users,
  Star,
  Heart,
} from "lucide-react";
import Image from "next/image";

interface Apartment {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  benefits: string[];
  guests: number;
}

const apartments: Apartment[] = [
  {
    id: 1,
    title: "Luxury Lekki Penthouse",
    location: "Lekki Phase 1, Lagos",
    price: 85000,
    rating: 4.9,
    reviews: 127,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Air Conditioning", "Smart TV", "Kitchen"],
    guests: 4,
  },
  {
    id: 2,
    title: "Cozy Victoria Island Studio",
    location: "Victoria Island, Lagos",
    price: 65000,
    rating: 4.7,
    reviews: 89,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 2,
  },
  {
    id: 3,
    title: "Spacious Ikeja Apartment",
    location: "Ikeja GRA, Lagos",
    price: 55000,
    rating: 4.8,
    reviews: 156,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Smart TV", "Air Conditioning", "Kitchen"],
    guests: 3,
  },
  {
    id: 4,
    title: "Modern Ikoyi Heights",
    location: "Ikoyi, Lagos",
    price: 95000,
    rating: 5.0,
    reviews: 203,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Parking", "Smart TV", "Air Conditioning"],
    guests: 5,
  },
  {
    id: 5,
    title: "Charming Yaba Flat",
    location: "Yaba, Lagos",
    price: 45000,
    rating: 4.6,
    reviews: 74,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Kitchen", "Air Conditioning", "Smart TV"],
    guests: 2,
  },
  {
    id: 6,
    title: "Elegant Banana Island Villa",
    location: "Banana Island, Lagos",
    price: 150000,
    rating: 5.0,
    reviews: 98,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Parking", "Smart TV", "Kitchen"],
    guests: 6,
  },
  {
    id: 7,
    title: "Contemporary Surulere Space",
    location: "Surulere, Lagos",
    price: 50000,
    rating: 4.7,
    reviews: 112,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Air Conditioning", "Kitchen", "Smart TV"],
    guests: 3,
  },
  {
    id: 8,
    title: "Serene Ajah Getaway",
    location: "Ajah, Lagos",
    price: 40000,
    rating: 4.5,
    reviews: 65,
    image: "/bghotcoffestays.jpg",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 4,
  },
];

const BenefitIcon = ({ benefit }: { benefit: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    WiFi: <Wifi size={16} />,
    "Air Conditioning": <Wind size={16} />,
    "Smart TV": <Tv size={16} />,
    Kitchen: <Utensils size={16} />,
    Parking: <Car size={16} />,
  };

  return icons[benefit] || <Wifi size={16} />;
};

function Gallery() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className=" py-12 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center min-h-screen pt-32 pb-20 px-6 bg-linear-to-br from-gray-50 via-white to-teal-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-color mb-4">
            ShortLet Apartments in Lagos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your perfect home away from home with our curated selection
            of premium apartments
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  height={250}
                  width={250}
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(apartment.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg"
                >
                  <Heart
                    size={20}
                    className={`${favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : "text-gray-600"} transition`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  <Users size={14} className="inline mr-1" />
                  {apartment.guests} Guests
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-600 mb-1 line-clamp-1">
                    {apartment.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-1 text-text-color" />
                      <span className="line-clamp-1">{apartment.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                    <Star
                      size={12}
                      className="text-text-color fill-background mr-1"
                    />
                    <span className="text-sm font-semibold text-text-color">
                      {apartment.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({apartment.reviews} reviews)
                  </span>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {apartment.benefits.map((benefit, id) => (
                    <div
                      key={id}
                      className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1.5 rounded-lg"
                    >
                      <span className="mr-1.5 text-text-color">
                        <BenefitIcon benefit={benefit} />
                      </span>
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(apartment.price)}
                    </div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-gray-400 transition font-semibold text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-400 text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition font-semibold text-lg shadow-lg">
            View All Apartments
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
