"use client";
import React, { useState, useMemo } from "react";
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
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Gauge,
  Fuel,
  Settings,
  Shield,
  Home,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Apartment {
  type: "apartment";
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  benefits: string[];
  guests: number;
  video?: string;
}

interface CarRental {
  type: string;
  id: number;
  title: string;

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

const apartments: Apartment[] = [
  {
    type: "apartment",
    id: 1,
    title: "Luxury Lekki Penthouse",
    location: "Lekki Phase 1, Lagos",
    price: 85000,
    rating: 4.9,
    reviews: 127,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/2bedroom.mp4",
    benefits: ["WiFi", "Air Conditioning", "Smart TV", "Kitchen"],
    guests: 4,
  },
  {
    type: "apartment",
    id: 2,
    title: "Cozy Victoria Island Studio",
    location: "Victoria Island, Lagos",
    price: 65000,
    rating: 4.7,
    reviews: 89,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/2bedroom2.mp4",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 2,
  },
  {
    type: "apartment",
    id: 3,
    title: "Spacious Ikeja Apartment",
    location: "Ikeja GRA, Lagos",
    price: 55000,
    rating: 4.8,
    reviews: 156,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/2bedroom3.mp4",
    benefits: ["WiFi", "Smart TV", "Air Conditioning", "Kitchen"],
    guests: 3,
  },
  {
    type: "apartment",
    id: 4,
    title: "Modern Ikoyi Heights",
    location: "Ikoyi, Lagos",
    price: 95000,
    rating: 5.0,
    reviews: 203,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom.mp4",
    benefits: ["WiFi", "Parking", "Smart TV", "Air Conditioning"],
    guests: 5,
  },
  {
    type: "apartment",
    id: 5,
    title: "Charming Yaba Flat",
    location: "Yaba, Lagos",
    price: 45000,
    rating: 4.6,
    reviews: 74,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom2.mp4",
    benefits: ["WiFi", "Kitchen", "Air Conditioning", "Smart TV"],
    guests: 2,
  },
  {
    type: "apartment",
    id: 6,
    title: "Elegant Banana Island Villa",
    location: "Banana Island, Lagos",
    price: 150000,
    rating: 5.0,
    reviews: 98,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom.mp4",
    benefits: ["WiFi", "Parking", "Smart TV", "Kitchen"],
    guests: 6,
  },
  {
    type: "apartment",
    id: 7,
    title: "Contemporary Surulere Space",
    location: "Surulere, Lagos",
    price: 50000,
    rating: 4.7,
    reviews: 112,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom2.mp4",
    benefits: ["WiFi", "Air Conditioning", "Kitchen", "Smart TV"],
    guests: 3,
  },
  {
    type: "apartment",
    id: 8,
    title: "Serene Ajah Getaway",
    location: "Ajah, Lagos",
    price: 40000,
    rating: 4.5,
    reviews: 65,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom.mp4",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 4,
  },
  {
    type: "apartment",
    id: 9,
    title: "Modern Ikoyi Loft",
    location: "Ikoyi, Lagos",
    price: 55000,
    rating: 4.7,
    reviews: 89,
    image: "/bghotcoffestays.jpg",
    video: "/Videos/4bedroom.mp4",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 4,
  },
];

const cars: CarRental[] = [
  {
    id: 1,
    title: "Toyota Camry 2023",
    type: "car",
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
    type: "car",
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
    type: "car",
    price: 30000,
    rating: 4.7,
    reviews: 142,
    image: "/car2.jpeg",
    features: ["Bluetooth", "AC", "Backup Camera", "USB Ports"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 4,
    title: "Range Rover Sport",
    type: "car",
    price: 120000,
    rating: 5.0,
    reviews: 187,
    image: "/car1.jpeg",
    video: "/car3.mp4",
    features: ["Premium Interior", "AC", "GPS", "Panoramic Roof"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 5,
    title: "Toyota Highlander",
    type: "car",
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
    type: "car",
    price: 75000,
    rating: 5.0,
    reviews: 145,
    image: "/car2.jpeg",
    video: "/car3.mp4",
    features: ["Premium Sound", "AC", "GPS", "Heated Seats"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    id: 7,
    title: "Nissan Altima 2023",
    type: "car",
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
    type: "car",
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
    id: 9,
    title: "BMW X3",
    type: "car",
    price: 100000,
    rating: 5.0,
    reviews: 164,
    image: "/car2.jpeg",
    features: ["Premium Interior", "AC", "GPS", "Sporty Design"],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
];

const BenefitIcon = ({ benefit }: { benefit: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    WiFi: <Wifi size={16} />,
    "Air Conditioning": <Wind size={16} />,
    "Smart TV": <Tv size={16} />,
    Kitchen: <Utensils size={16} />,
    Parking: <Car size={16} />,
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
    Gauge: <Gauge size={16} />,
    Fuel: <Fuel size={16} />,
  };
  return icons[benefit] || <Settings size={16} />;
};

const AllRentals = () => {
  const [activeTab, setActiveTab] = useState<"apartments" | "cars">(
    "apartments",
  );
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [minCapacity, setMinCapacity] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const locations = [
    "all",
    ...new Set(apartments.map((apt) => apt.location.split(",")[0].trim())),
  ];
  const carTypes = ["all", ...new Set(cars.map((car) => car.type))];
  const apartmentBenefits = [
    "WiFi",
    "Air Conditioning",
    "Smart TV",
    "Kitchen",
    "Parking",
  ];
  const carFeatures = [
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
    setSelectedLocation("all");
    setSelectedType("all");
    setPriceRange([0, 200000]);
    setMinCapacity(1);
    setSelectedFeatures([]);
    setSortBy("featured");
  };

  const filteredApartments = useMemo(() => {
    const filtered = apartments.filter((apt) => {
      const matchesSearch =
        apt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        selectedLocation === "all" || apt.location.includes(selectedLocation);
      const matchesPrice =
        apt.price >= priceRange[0] && apt.price <= priceRange[1];
      const matchesCapacity = apt.guests >= minCapacity;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => apt.benefits.includes(feature));

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPrice &&
        matchesCapacity &&
        matchesFeatures
      );
    });

    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high")
      filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [
    searchTerm,
    selectedLocation,
    priceRange,
    minCapacity,
    selectedFeatures,
    sortBy,
  ]);

  const filteredCars = useMemo(() => {
    const filtered = cars.filter((car) => {
      const matchesSearch =
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || car.type === selectedType;
      const matchesPrice =
        car.price >= priceRange[0] && car.price <= priceRange[1];
      const matchesCapacity = car.seats >= minCapacity;
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => car.features.includes(feature));

      return (
        matchesSearch &&
        matchesType &&
        matchesPrice &&
        matchesCapacity &&
        matchesFeatures
      );
    });

    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high")
      filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [
    searchTerm,
    selectedType,
    priceRange,
    minCapacity,
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
    ((activeTab === "apartments" ? selectedLocation : selectedType) !== "all"
      ? 1
      : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 200000 ? 1 : 0) +
    (minCapacity > 1 ? 1 : 0) +
    selectedFeatures.length;

  const currentItems =
    activeTab === "apartments" ? filteredApartments : filteredCars;
  const totalItems =
    activeTab === "apartments" ? apartments.length : cars.length;

  const handleBooking = (id: number, type: "apartment" | "car") => {
    const query = type === "apartment" ? `apartmentId=${id}` : `carId=${id}`;
    router.push(`/booking?${query}`);
  };

  return (
    <div
      id="gallery"
      className="py-12 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center min-h-screen pt-32 pb-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg inline-flex">
            <button
              onClick={() => {
                setActiveTab("apartments");
                clearFilters();
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${
                activeTab === "apartments"
                  ? "bg-gray-800 text-white shadow-lg "
                  : "text-gray-600 hover:bg-gray-200 cursor-pointer"
              }`}
            >
              <Home size={20} />
              Apartments
            </button>
            <button
              onClick={() => {
                setActiveTab("cars");
                clearFilters();
              }}
              className={`px-8 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${
                activeTab === "cars"
                  ? "bg-orange-700 text-white shadow-lg "
                  : "text-gray-700 hover:bg-orange-200 cursor-pointer"
              }`}
            >
              <Car size={20} />
              Car Rentals
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {activeTab === "apartments"
              ? "Short-Let Apartments in Lagos"
              : "Premium Car Rentals in Lagos"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {activeTab === "apartments"
              ? "Discover your perfect home away from home with our curated selection of premium apartments"
              : "Navigate Lagos with confidence in our fleet of well-maintained vehicles"}
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder={
                    activeTab === "apartments"
                      ? "Search by title or location..."
                      : "Search by car name or type..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-600 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                {activeTab === "apartments" ? (
                  <>
                    <MapPin
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-600 focus:outline-none transition appearance-none bg-white cursor-pointer"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc === "all" ? "All Locations" : loc}
                        </option>
                      ))}
                    </select>
                  </>
                ) : (
                  <>
                    <Car
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-600 focus:outline-none transition appearance-none bg-white cursor-pointer "
                    >
                      {carTypes.map((type) => (
                        <option key={type} value={type}>
                          {type === "all" ? "All Types" : type}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-600 rounded-xl focus:outline-none transition appearance-none bg-white cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`w-full px-4 py-3 rounded-xl transition font-semibold flex items-center justify-center gap-2 relative ${
                  activeTab === "apartments"
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-orange-600 hover:bg-gray-700"
                } text-white`}
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

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range (per{" "}
                    {activeTab === "apartments" ? "night" : "day"})
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange[1] ?? 0}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setPriceRange([
                          priceRange[0],
                          isNaN(value) ? 0 : value,
                        ]);
                      }}
                      className={`w-full ${activeTab === "apartments" ? "accent-gray-600" : "accent-orange-700"}`}
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Minimum {activeTab === "apartments" ? "Guests" : "Seats"}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setMinCapacity(Math.max(1, minCapacity - 1))
                      }
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center bg-gray-100 rounded-lg py-2 font-semibold">
                      {minCapacity}{" "}
                      {minCapacity === 1
                        ? activeTab === "apartments"
                          ? "Guest"
                          : "Seat"
                        : activeTab === "apartments"
                          ? "Guests"
                          : "Seats"}
                    </div>
                    <button
                      onClick={() =>
                        setMinCapacity(Math.min(10, minCapacity + 1))
                      }
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {activeTab === "apartments" ? "Amenities" : "Features"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(activeTab === "apartments"
                      ? apartmentBenefits
                      : carFeatures
                    ).map((feature) => (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                          selectedFeatures.includes(feature)
                            ? activeTab === "apartments"
                              ? "bg-gray-600 text-white"
                              : "bg-gray-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <BenefitIcon benefit={feature} />
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

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

        <div className="mb-6 text-gray-600">
          Showing{" "}
          <span className="font-bold text-gray-900">{currentItems.length}</span>{" "}
          of <span className="font-bold text-gray-900">{totalItems}</span>{" "}
          {activeTab === "apartments" ? "apartments" : "vehicles"}
        </div>

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 shadow-lg shadow-gray-600 p-8 rounded-2xl bg-transparent backdrop-blur-sm">
            {activeTab === "apartments"
              ? filteredApartments.map((apartment) => (
                  <div
                    key={apartment.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all p-2 duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        src={apartment.image}
                        alt={apartment.title}
                        className="w-full h-full object-cover group-hover:scale-110 rounded-xl transition-transform duration-500"
                      />
                      <video
                        controls
                        playsInline
                        muted
                        loop
                        poster={apartment.image}
                        className="absolute inset-0 w-full h-full object-contain z-0"
                      >
                        <source src={apartment.video} type="video/mp4" />
                      </video>
                      <button
                        onClick={() => toggleFavorite(apartment.id)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg z-10"
                      >
                        <Heart
                          size={20}
                          className={`${favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : "text-gray-600"} transition`}
                        />
                      </button>
                      <div className="absolute bottom-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                        <Users size={14} className="inline mr-1" />
                        {apartment.guests} Guests
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                          {apartment.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin size={14} className="mr-1 text-gray-800" />
                            <span className="line-clamp-1">
                              {apartment.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                          <Star
                            size={12}
                            className="text-gray-800 fill-gray-600 mr-1"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            {apartment.rating}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          ({apartment.reviews} reviews)
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {apartment.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-center gap-1 text-gray-600 text-sm"
                            title={benefit}
                          >
                            <BenefitIcon benefit={benefit} />
                            <span className="sr-only">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(apartment.price)}{" "}
                        <span className="font-normal text-gray-600 text-sm">
                          / night
                        </span>
                      </div>
                      <button
                        onClick={() => handleBooking(apartment.id, "apartment")}
                        className="w-full mt-2 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))
              : filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all p-2 duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {car.video ? (
                        <video
                          controls
                          playsInline
                          muted
                          loop
                          poster={car.image}
                          className="w-full h-full object-contain rounded-xl transition-transform duration-500"
                        >
                          <source src={car.video} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          width={300}
                          height={300}
                          src={car.image}
                          alt={car.title}
                          className="w-full h-full object-cover group-hover:scale-110 rounded-xl transition-transform duration-500"
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
                      <div className="absolute bottom-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                        <Users size={14} className="inline mr-1" />
                        {car.seats} Seats
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                          {car.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 text-sm">
                            <Car size={14} className="mr-1 text-gray-800" />
                            <span className="line-clamp-1">{car.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                          <Star
                            size={12}
                            className="text-gray-800 fill-gray-600 mr-1"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            {car.rating}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          ({car.reviews} reviews)
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {car.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-1 text-gray-600 text-sm"
                            title={feature}
                          >
                            <BenefitIcon benefit={feature} />
                            <span className="sr-only">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatPrice(car.price)}{" "}
                        <span className="font-normal text-gray-600 text-sm">
                          / day
                        </span>
                      </div>
                      <button
                        onClick={() => handleBooking(car.id, "car")}
                        className="w-full mt-2 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-xl">
              No {activeTab === "apartments" ? "apartments" : "vehicles"} found
              matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AllRentals;

