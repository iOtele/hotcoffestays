// import React, { useState } from "react";

// import {
//   MapPin,
//   Wifi,
//   Tv,
//   Wind,
//   Utensils,
//   Car,
//   Users,
//   Star,
//   Heart,
// } from "lucide-react";
// import Image from "next/image";

// interface Apartment {
//   id: number;
//   title: string;
//   location: string;
//   price: number;
//   rating: number;
//   reviews: number;
//   image: string;
//   benefits: string[];
//   guests: number;
//   video?: string;
// }

// const apartments: Apartment[] = [
//   {
//     id: 1,
//     title: "Luxury Lekki Penthouse",
//     location: "Lekki Phase 1, Lagos",
//     price: 85000,
//     rating: 4.9,
//     reviews: 127,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/2bedroom.mp4",
//     benefits: ["WiFi", "Air Conditioning", "Smart TV", "Kitchen"],
//     guests: 4,
//   },
//   {
//     id: 2,
//     title: "Cozy Victoria Island Studio",
//     location: "Victoria Island, Lagos",
//     price: 65000,
//     rating: 4.7,
//     reviews: 89,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/2bedroom2.mp4",
//     benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
//     guests: 2,
//   },
//   {
//     id: 3,
//     title: "Spacious Ikeja Apartment",
//     location: "Ikeja GRA, Lagos",
//     price: 55000,
//     rating: 4.8,
//     reviews: 156,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/2bedroom3.mp4",

//     benefits: ["WiFi", "Smart TV", "Air Conditioning", "Kitchen"],
//     guests: 3,
//   },
//   {
//     id: 4,
//     title: "Modern Ikoyi Heights",
//     location: "Ikoyi, Lagos",
//     price: 95000,
//     rating: 5.0,
//     reviews: 203,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/4bedroom.mp4",

//     benefits: ["WiFi", "Parking", "Smart TV", "Air Conditioning"],
//     guests: 5,
//   },
//   {
//     id: 5,
//     title: "Charming Yaba Flat",
//     location: "Yaba, Lagos",
//     price: 45000,
//     rating: 4.6,
//     reviews: 74,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/4bedroom2.mp4",

//     benefits: ["WiFi", "Kitchen", "Air Conditioning", "Smart TV"],
//     guests: 2,
//   },
//   {
//     id: 6,
//     title: "Elegant Banana Island Villa",
//     location: "Banana Island, Lagos",
//     price: 150000,
//     rating: 5.0,
//     reviews: 98,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/4bedroom.mp4",

//     benefits: ["WiFi", "Parking", "Smart TV", "Kitchen"],
//     guests: 6,
//   },
//   {
//     id: 7,
//     title: "Contemporary Surulere Space",
//     location: "Surulere, Lagos",
//     price: 50000,
//     rating: 4.7,
//     reviews: 112,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/4bedroom2.mp4",

//     benefits: ["WiFi", "Air Conditioning", "Kitchen", "Smart TV"],
//     guests: 3,
//   },
//   {
//     id: 8,
//     title: "Serene Ajah Getaway",
//     location: "Ajah, Lagos",
//     price: 40000,
//     rating: 4.5,
//     reviews: 65,
//     image: "/bghotcoffestays.jpg",
//     video: "/Videos/4bedroom.mp4",
//     benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
//     guests: 4,
//   },
// ];

// const BenefitIcon = ({ benefit }: { benefit: string }) => {
//   const icons: { [key: string]: React.ReactNode } = {
//     WiFi: <Wifi size={16} />,
//     "Air Conditioning": <Wind size={16} />,
//     "Smart TV": <Tv size={16} />,
//     Kitchen: <Utensils size={16} />,
//     Parking: <Car size={16} />,
//   };

//   return icons[benefit] || <Wifi size={16} />;
// };

// function Gallery() {
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
//     );
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   return (
//     <div
//       id="gallery"
//       className=" py-12 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center min-h-screen pt-32 pb-20 px-6 bg-linear-to-br from-gray-50 via-white to-teal-50"
//     >
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-bold text-text-color mb-6">
//             ShortLet Apartments in Lagos
//           </h1>
//           <p className="text-3xl text-text-color animate-fade-in animation-delay-200 mx-auto">
//             <span className="text-foreground font-bold ">Discover </span> your
//             perfect home away from home with our curated selection of premium
//             apartments
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg shadow-gray-600 p-8 rounded-2xl bg-transparent/80 backdrop-blur-sm">
//           {apartments.map((apartment) => (
//             <div
//               key={apartment.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group shadow-gray-500 p-2"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <Image
//                   height={200}
//                   width={200}
//                   src={apartment.image}
//                   alt={apartment.title}
//                   className="w-full h-full object-cover rounded-xl group-hover:scale-100 transition-transform duration-500"
//                 />
//                 <video
//                   controls
//                   playsInline
//                   muted
//                   loop
//                   poster={apartment.image}
//                   className="absolute inset-0 w-full h-full object-contain z-0"
//                 >
//                   <source src={apartment.video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   onClick={() => toggleFavorite(apartment.id)}
//                   className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition shadow-lg"
//                 >
//                   <Heart
//                     size={20}
//                     className={`${favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : "text-gray-600"} transition`}
//                   />
//                 </button>
//                 <div className="absolute bottom-4 left-4 z-10 bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold">
//                   <Users size={14} className="inline mr-1" />
//                   {apartment.guests} Guests
//                 </div>
//               </div>

//               <div className="p-3">
//                 <div className="mb-3">
//                   <h3 className="text-lg font-bold text-gray-600 mb-1 line-clamp-1">
//                     {apartment.title}
//                   </h3>
//                   <div className="flex items-center justify-between ">
//                     <div className="flex items-center text-gray-600 text-sm">
//                       <MapPin size={14} className="mr-1 text-text-color" />
//                       <span className="line-clamp-1">{apartment.location}</span>
//                     </div>
//                     <div className="flex items-center  gap-2 ">
//                       <div className="flex items-center  bg-gray-100 px-2 py-1 rounded-lg">
//                         <Star
//                           size={12}
//                           className="text-text-color fill-background mr-1"
//                         />
//                         <span className="text-sm font-semibold text-text-color">
//                           {apartment.rating}
//                         </span>
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         ({apartment.reviews} reviews)
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-4 gap-2 mb-4">
//                   {apartment.benefits.map((benefit, id) => (
//                     <div
//                       key={id}
//                       className="flex items-center text-xs text-gray-600 bg-gray-50 px-2 py-1.5 rounded-lg"
//                     >
//                       <span className="mr-1.5 text-text-color">
//                         <BenefitIcon benefit={benefit} />
//                       </span>
//                       <span className="truncate">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between border-t border-gray-100">
//                   <div>
//                     <div className="text-2xl font-bold text-text-color">
//                       {formatPrice(apartment.price)}
//                     </div>
//                     <div className="text-xs text-gray-500">per night</div>
//                   </div>
//                   <button className="bg-text-color text-white px-4 py-2 rounded-xl hover:bg-gray-400 transition font-semibold text-sm">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-gray-400 text-white px-8 py-4 rounded-xl hover:bg-text-color transition font-semibold text-lg shadow-lg">
//             View All Apartments
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;

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
  video?: string;
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
    video: "/Videos/2bedroom.mp4",
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
    video: "/Videos/2bedroom2.mp4",
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
    video: "/Videos/2bedroom3.mp4",

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
    video: "/Videos/4bedroom.mp4",

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
    video: "/Videos/4bedroom2.mp4",

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
    video: "/Videos/4bedroom.mp4",

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
    video: "/Videos/4bedroom2.mp4",

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
    video: "/Videos/4bedroom.mp4",
    benefits: ["WiFi", "Parking", "Kitchen", "Air Conditioning"],
    guests: 4,
  },
  {
    id: 9,
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

export default function Gallery() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [minGuests, setMinGuests] = useState(1);
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const locations = [
    "all",
    ...new Set(apartments.map((apt) => apt.location.split(",")[0].trim())),
  ];
  const allBenefits = [
    "WiFi",
    "Air Conditioning",
    "Smart TV",
    "Kitchen",
    "Parking",
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const toggleBenefit = (benefit: string) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit)
        ? prev.filter((b) => b !== benefit)
        : [...prev, benefit],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setPriceRange([0, 200000]);
    setMinGuests(1);
    setSelectedBenefits([]);
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
      const matchesGuests = apt.guests >= minGuests;
      const matchesBenefits =
        selectedBenefits.length === 0 ||
        selectedBenefits.every((benefit) => apt.benefits.includes(benefit));

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPrice &&
        matchesGuests &&
        matchesBenefits
      );
    });

    // Sorting
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
    selectedLocation,
    priceRange,
    minGuests,
    selectedBenefits,
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
    (selectedLocation !== "all" ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 200000 ? 1 : 0) +
    (minGuests > 1 ? 1 : 0) +
    selectedBenefits.length;

  return (
    <div
      id="gallery"
      className=" py-12 sm:px-6 lg:px-8 bg-[url('/bggalleryhot.jpg')] bg-cover bg-center min-h-screen pt-32 pb-20 px-6 bg-linear-to-br from-gray-500 via-foreground to-teal-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-color mb-4">
            Short-Let Apartments in Lagos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your perfect home away from home with our curated selection
            of premium apartments
          </p>
        </div>

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
                  placeholder="Search by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-text-color focus:outline-none transition"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-12 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:border-text-color focus:outline-none transition appearance-none bg-white cursor-pointer"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc === "all" ? "All Locations" : loc}
                    </option>
                  ))}
                </select>
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
                className="w-full px-4 py-3 border-2 border-gray-600 rounded-xl focus:border-text-color focus:outline-none transition appearance-none bg-foreground cursor-pointer"
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
                className="w-full bg-gray-600 text-foreground px-4 py-3 rounded-xl hover:bg-gray-700 transition font-semibold flex items-center justify-center gap-2 relative"
              >
                <SlidersHorizontal size={20} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-foreground text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
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
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range (per night)
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full accent-gray-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Minimum Guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setMinGuests(Math.max(1, minGuests - 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center bg-gray-100 rounded-lg py-2 font-semibold">
                      {minGuests} {minGuests === 1 ? "Guest" : "Guests"}
                    </div>
                    <button
                      onClick={() => setMinGuests(Math.min(10, minGuests + 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Amenities
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allBenefits.map((benefit) => (
                      <button
                        key={benefit}
                        onClick={() => toggleBenefit(benefit)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                          selectedBenefits.includes(benefit)
                            ? "bg-gray-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <BenefitIcon benefit={benefit} />
                        {benefit}
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

        <div className="mb-6 text-gray-600">
          Showing{" "}
          <span className="font-bold text-text-color">
            {filteredApartments.length}
          </span>{" "}
          of{" "}
          <span className="font-bold text-text-color">{apartments.length}</span>{" "}
          apartments
        </div>

        {filteredApartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg shadow-gray-600 p-8 rounded-2xl bg-transparent/80 backdrop-blur-sm">
            {filteredApartments.map((apartment) => (
              <div
                key={apartment.id}
                className="bg-foreground rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all p-2 duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    height={200}
                    width={200}
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
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => toggleFavorite(apartment.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-foreground transition shadow-lg z-10"
                  >
                    <Heart
                      size={20}
                      className={`${favorites.includes(apartment.id) ? "fill-red-500 text-red-500" : "text-gray-600"} transition`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-gray-600 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    <Users size={14} className="inline mr-1" />
                    {apartment.guests} Guests
                  </div>
                </div>
                <div className="p-3">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-600 mb-1 line-clamp-1">
                      {apartment.title}
                    </h3>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-1 text-text-color" />
                        <span className="line-clamp-1">
                          {apartment.location}
                        </span>
                      </div>
                      <div className="flex items-center  gap-2 ">
                        <div className="flex items-center  bg-gray-100 px-2 py-1 rounded-lg">
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
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-4">
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

                  <div className="flex items-center justify-between border-t border-gray-300">
                    <div>
                      <div className="text-2xl font-bold text-text-color">
                        {formatPrice(apartment.price)}
                      </div>
                      <div className="text-xs text-gray-500">per night</div>
                    </div>
                    <button className="bg-background text-foreground px-4 py-2 rounded-xl hover:bg-gray-400 transition font-semibold text-sm">
                      Book Now
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
            <h3 className="text-2xl font-bold text-text-color mb-2">
              No apartments found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <button
              onClick={clearFilters}
              className="bg-gray-600 text-foreground px-6 py-3 rounded-xl hover:bg-gray-700 transition font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {filteredApartments.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-background text-foreground px-8 py-4 rounded-xl hover:bg-gray-600 transition font-semibold text-lg shadow-lg cursor-pointer">
              View All Apartments
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
