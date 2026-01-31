import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Home,
  Car,
  Coffee,
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  service: "stay" | "car";
}

export default function TestimonialSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Blessing Adeyemi",
      role: "Business Executive",
      location: "Lagos",
      image: "/image1.jpg",
      rating: 5,
      text: "The apartment in Lekki was absolutely stunning! Everything was perfect - from the location to the amenities. HotCoffeStays made my business trip feel like a vacation. Will definitely book again!",
      service: "stay",
    },
    {
      id: 2,
      name: "Chukwuma Okonkwo",
      role: "Entrepreneur",
      location: "Abuja",
      image: "/image2.jpg",
      rating: 5,
      text: "Rented a Mercedes for my wedding. The car was immaculate and the service was exceptional. The driver was professional and punctual. Thank you for making our special day even more memorable!",
      service: "car",
    },
    {
      id: 3,
      name: "Fatima Hassan",
      role: "Travel Blogger",
      location: "Port Harcourt",
      image: "/image3.jpg",
      rating: 5,
      text: "As someone who travels frequently, I can say HotCoffeStays offers the best short-let experience in Nigeria. The Victoria Island studio was cozy, clean, and had everything I needed. Highly recommend!",
      service: "stay",
    },
    {
      id: 4,
      name: "Tunde Williams",
      role: "Software Developer",
      location: "Lagos",
      image: "/image4.jpg",
      rating: 4,
      text: "The Ikeja apartment was perfect for my month-long stay. Great WiFi, comfortable workspace, and the 24/7 support team was always helpful. Only minor issue was parking, but overall excellent experience.",
      service: "stay",
    },
    {
      id: 5,
      name: "Amara Nwosu",
      role: "Corporate Lawyer",
      location: "Lagos",
      image: "/image2.jpg",
      rating: 5,
      text: "Needed a reliable car for client meetings across Lagos. The Range Rover was pristine and drove like a dream. Customer service was top-notch. This is now my go-to car rental service!",
      service: "car",
    },
    {
      id: 6,
      name: "David Oladele",
      role: "Film Producer",
      location: "Ibadan",
      image: "/image1.jpg",
      rating: 5,
      text: "Booked the Banana Island villa for our film crew. The space was incredible - luxurious, spacious, and perfect for our production needs. The team at HotCoffeStays went above and beyond to accommodate us.",
      service: "stay",
    },
    {
      id: 7,
      name: "Kemi Adeleke",
      role: "Event Planner",
      location: "Lagos",
      image: "/image3.jpg",
      rating: 5,
      text: "Rented multiple vehicles for a corporate event. Every car arrived on time, clean, and ready to go. The coordination was seamless. Truly professional service that I can count on!",
      service: "car",
    },
    {
      id: 8,
      name: "Samuel Eze",
      role: "Medical Doctor",
      location: "Enugu",
      image: "/image4.jpg",
      rating: 4,
      text: "The Yaba flat was comfortable and affordable. Perfect for my short medical conference stay. Close to the venue, safe neighborhood, and responsive property manager. Great value for money!",
      service: "stay",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[index], offset: i });
    }
    return cards;
  };

  return (
    <div className=" min-h-screen bg-linear-to-br from-gray-400 via-gray-600 to-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real experiences from real people who chose HotCoffeStays
          </p>
        </div>

        {/* Testimonial Cards Swiper */}
        <div className="relative">
          <div
            className="flex items-center justify-center h-150 md:h-100 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleCards().map((testimonial) => {
              const offset = testimonial.offset;
              const isCenter = offset === 0;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute transition-all duration-500 ease-out ${
                    isCenter ? "z-20" : "z-10"
                  }`}
                  style={{
                    transform: `translateX(${offset * 350}px) scale(${isCenter ? 1 : 0.85})`,
                    opacity: isCenter ? 1 : 0.4,
                    pointerEvents: isCenter ? "auto" : "none",
                  }}
                >
                  <div className="bg-linear-to-br from-gray-600 to-background rounded-3xl p-8 shadow-2xl border border-gray-700 w-[90vw] max-w-125 h-127.5 md:h-100 flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="text-gray-400" size={48} />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-200 text-lg leading-relaxed mb-6 grow">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i < testimonial.rating
                              ? "text-gray-400 fill-gray-400"
                              : "text-gray-600"
                          }
                        />
                      ))}
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-500"
                      />
                      <div className="grow">
                        <h4 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.location}
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          testimonial.service === "stay"
                            ? "bg-gray-500/20 text-gray-400 border border-gray-400/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {testimonial.service === "stay"
                          ? "Short-Let"
                          : "Car Rental"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentIndex
                  ? "w-8 h-2 bg-gray-400"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-5">
          {[
            { value: "10,000+", label: "Happy Guests" },
            { value: "500+", label: "Properties" },
            { value: "200+", label: "Vehicles" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "500+", label: "5-Star Reviews" },
          ].map((stat, id) => (
            <div key={id} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <p className="text-gray-300 text-lg mb-6">
            Ready to create your own success story?
          </p>
          <a href="#contactus">
            <button className="bg-gray-400 text-text-color px-8 py-4 rounded-full hover:bg-gray-500 transition font-bold text-lg shadow-lg hover:shadow-gray-400/50">
              Book Your Experience Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
