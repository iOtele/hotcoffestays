import Image from "next/image";
import React from "react";
import { Home, Car } from "lucide-react";

const Service = () => {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl opacity-70">
            Two premium services, one exceptional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-500/10 to-transparent p-8 border border-white/10 hover:border-amber-500/30 transition">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
            <Home className="text-amber-500 mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Short-Let Stays</h3>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              Discover our curated collection of premium apartments and homes
              across Lagos. From cozy studios to spacious penthouses, each
              property is selected for its comfort, location, and style. Perfect
              for business travelers, tourists, or anyone seeking a home away
              from home.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Fully furnished & equipped</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Prime locations across Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Flexible booking options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>24/7 concierge service</span>
              </li>
            </ul>
            <div className="mt-8">
              <Image
                src="/car3.jpeg"
                width={300}
                height={200}
                alt="Luxury apartment"
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Car Rentals */}
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-500/10 to-transparent p-8 border border-white/10 hover:border-blue-500/30 transition">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            <Car className="text-blue-400 mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Car Rentals</h3>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              Navigate Lagos with confidence in our fleet of well-maintained
              vehicles. From compact cars for city driving to luxury SUVs for
              executive travel, we have the perfect vehicle for every journey.
              All rentals include insurance and 24/7 roadside assistance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Wide range of vehicles</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Regular maintenance & cleaning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Airport pickup available</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Optional chauffeur service</span>
              </li>
            </ul>
            <div className="mt-8">
              <Image
                width={300}
                height={200}
                src="/car2.jpeg"
                alt="Luxury car"
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
