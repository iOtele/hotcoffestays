import React, { useState, useMemo } from "react";
import {
  Car,
  Fuel,
  Users,
  Star,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Gauge,
  Settings,
  Shield,
} from "lucide-react";
import Image from "next/image";

interface CarRental {
  id: number;
  title: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  video?: string;
  features: string[];
  seats: number;
  transmission: string;
  fuelType: string;
}

const cars: CarRental[] = [
  {
    id: 1,
    title: "Toyota Camry 2023",
    type: "Sedan",
    price: 35000,
    rating: 4.8,
    reviews: 156,
    image: "/car1.jpeg",
    features: ["Bluetooth", "AC", "GPS", "Leather Seats"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 2,
    title: "Mercedes-Benz GLE",
    type: "SUV",
    price: 85000,
    rating: 5.0,
    reviews: 203,
    image: "/car2.jpeg",
    features: ["Premium Sound", "AC", "GPS", "Sunroof"],
    seats: 7,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 3,
    title: "Honda Accord 2022",
    type: "Sedan",
    price: 30000,
    rating: 4.7,
    reviews: 142,
    image: "/car3.jpeg",
    features: ["Bluetooth", "AC", "Backup Camera", "USB Ports"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 4,
    title: "Range Rover Sport",
    type: "SUV",
    price: 120000,
    rating: 5.0,
    reviews: 187,
    image: "/car1.jpeg",
    video: "/car4.mp4",
    features: ["Premium Interior", "AC", "GPS", "Panoramic Roof"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 5,
    title: "Toyota Highlander",
    type: "SUV",
    price: 65000,
    rating: 4.9,
    reviews: 178,
    image: "/car2.jpeg",
    features: ["Third Row", "AC", "GPS", "Apple CarPlay"],
    seats: 8,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 6,
    title: "Lexus ES 350",
    type: "Luxury Sedan",
    price: 75000,
    rating: 5.0,
    reviews: 145,
    image: "/car3.jpeg",
    features: ["Premium Sound", "AC", "GPS", "Heated Seats"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 7,
    title: "Nissan Altima 2023",
    type: "Sedan",
    price: 28000,
    rating: 4.6,
    reviews: 98,
    image: "/car1.jpeg",
    features: ["Bluetooth", "AC", "Safety Features", "USB Ports"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 8,
    title: "BMW X5",
    type: "Luxury SUV",
    price: 95000,
    rating: 5.0,
    reviews: 164,
    image: "/car2.jpeg",
    features: ["Premium Interior", "AC", "GPS", "Sporty Design"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
   {
    id: 1,
    title: "Toyota Camry 2023",
    type: "Sedan",
    price: 35000,
    rating: 4.8,
    reviews: 156,
    image: "/car1.jpeg",
    features: ["Bluetooth", "AC", "GPS", "Leather Seats"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
];

const FeatureIcon = ({ feature }: { feature: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    Bluetooth: <Settings size={16} />,
    AC: <Settings size={16} />,
    GPS: <Settings size={16} />,
    "Leather Seats": <Settings size={16} />,
    "Premium Sound": <Settings size={16} />,
    Sunroof: <Settings size={16} />,
    "Backup Camera": <Settings size={16} />,
    "USB Ports": <Settings size={16} />,
    "Premium Interior": <Settings size={16} />,
    "Panoramic Roof": <Settings size={16} />,
    "Third Row": <Settings size={16} />,
    "Apple CarPlay": <Settings size={16} />,
    "Heated Seats": <Settings size={16} />,
    "Safety Features": <Shield size={16} />,
    "Sporty Design": <Settings size={16} />,
  };

  return icons[feature] || <Settings size={16} />;
};

export default function CarRentalGallery() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [minSeats, setMinSeats] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const carTypes = ["all", ...new Set(cars.map((car) => car.type))];
  const allFeatures = [
    "Bluetooth",
    "AC",
    "GPS",
    "Leather Seats",
    "Premium Sound",
    "Sunroof",
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setPriceRange([0, 150000]);
    setMinSeats(1);
    setSelectedFeatures([]);
    setSortBy("featured");
  };

  const filteredCars = useMemo(() => {
    const filtered = cars.filter((car) => {
      const matchesSearch =
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || car.type === selectedType;
      const matchesPrice =
        car.price >= priceRange[0] && car.price <= priceRange[1];
      const matchesSeats = car.seats >= minSeats;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => car.features.includes(feature));

      return (
        matchesSearch &&
        matchesType &&
        matchesPrice &&
        matchesSeats &&
        matchesFeatures
      );
    });

    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [
    searchTerm,
    selectedType,
    priceRange,
    minSeats,
    selectedFeatures,
    sortBy,
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const activeFiltersCount =
    (selectedType !== "all" ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 150000 ? 1 : 0) +
    (minSeats > 1 ? 1 : 0) +
    selectedFeatures.length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Car Rentals in Lagos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate Lagos with confidence in our fleet of well-maintained
            vehicles
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-5">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by car name or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div className="lg:col-span-3">
              <div className="relative">
                <Car
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition appearance-none bg-white cursor-pointer"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Sort By */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition appearance-none bg-white cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <div className="lg:col-span-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2 relative"
              >
                <SlidersHorizontal size={20} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range (per day)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="150000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Seats */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Minimum Seats
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setMinSeats(Math.max(1, minSeats - 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center bg-gray-100 rounded-lg py-2 font-semibold">
                      {minSeats} {minSeats === 1 ? "Seat" : "Seats"}
                    </div>
                    <button
                      onClick={() => setMinSeats(Math.min(10, minSeats + 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Features
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allFeatures.map((feature) => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                          selectedFeatures.includes(feature)
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <FeatureIcon feature={feature} />
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              {activeFiltersCount > 0 && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
                  >
                    <X size={18} />
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing{" "}
          <span className="font-bold text-gray-900">{filteredCars.length}</span>{" "}
          of <span className="font-bold text-gray-900">{cars.length}</span>{" "}
          vehicles
        </div>

        {/* Car Cards Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {car.video ? (
                    <video
                      controls
                      playsInline
                      muted
                      loop
                      poster={car.image}
                      className="w-full h-full object-cover"
                    >
                      <source src={car.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      width={300}
                      height={200}
                      src={car.image}
                      alt={car.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg z-10"
                  >
                    <Heart
                      size={20}
                      className={`${favorites.includes(car.id) ? "fill-red-500 text-red-500" : "text-gray-600"} transition`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.type}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                      {car.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{car.seats}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Gauge size={14} />
                          <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel size={14} />
                          <span>{car.fuelType}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
                      <Star
                        size={14}
                        className="text-blue-600 fill-blue-600 mr-1"
                      />
                      <span className="text-sm font-semibold text-blue-700">
                        {car.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      ({car.reviews} reviews)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1.5 rounded-lg"
                      >
                        <span className="mr-1.5 text-blue-600">
                          <FeatureIcon feature={feature} />
                        </span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {formatPrice(car.price)}
                      </div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition font-semibold text-sm">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* View All Button */}
        {filteredCars.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition font-semibold text-lg shadow-lg">
              View All Vehicles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
