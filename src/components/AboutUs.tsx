import React from "react";
import {
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

export default function AboutUs() {
  const stats = [
    { icon: Home, value: "500+", label: "Properties" },
    { icon: Car, value: "200+", label: "Vehicles" },
    { icon: Users, value: "10K+", label: "Happy Guests" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Your security and comfort are our top priorities. All properties and vehicles are thoroughly vetted and maintained.",
    },
    {
      icon: Heart,
      title: "Exceptional Service",
      description:
        "We go above and beyond to ensure every stay and journey exceeds your expectations.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to assist you, any time of day or night.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description:
        "Premium properties and well-maintained vehicles for an unforgettable experience.",
    },
  ];

  const team = [
    {
      name: "Adewale Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Chioma Okafor",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      name: "Ibrahim Musa",
      role: "Fleet Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Ngozi Eze",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <style>
        {`
          :root {
            --background: #0a0a0a;
            --foreground: #ededed;
            --text-color: #232323;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop"
            alt="Luxury accommodation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Coffee size={48} className="text-amber-500" />
            <h1 className="text-6xl md:text-7xl font-bold">
              HotCoffe<span className="text-amber-500">Stays</span>
            </h1>
          </div>
          <p
            className="text-2xl md:text-3xl mb-8"
            style={{ color: "var(--foreground)" }}
          >
            Where Comfort Meets Adventure
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Your premier destination for luxury short-let accommodations and
            reliable car rentals across Nigeria
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-amber-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition">
                  <stat.icon className="text-amber-500" size={36} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg opacity-90 leading-relaxed">
                <p>
                  Founded in 2010, HotCoffeStays began with a simple vision: to
                  revolutionize the way people experience travel and
                  accommodation in Nigeria. What started as a small collection
                  of curated apartments in Lagos has grown into a comprehensive
                  hospitality platform serving thousands of satisfied guests.
                </p>
                <p>
                  We understand that travel is more than just reaching a
                  destination—it`&#39;`s about the entire journey. That`&#39;`s
                  why we expanded our services to include premium car rentals,
                  ensuring our guests have seamless transportation from the
                  moment they arrive.
                </p>
                <p>
                  Today, we pride ourselves on offering hand-picked properties
                  and well-maintained vehicles that combine comfort, style, and
                  affordability. Every property is personally inspected, and
                  every vehicle is meticulously serviced to ensure you have the
                  best possible experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
                  alt="Luxury apartment interior"
                  className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
                <Image
                  src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=500&fit=crop"
                  alt="Modern living space"
                  className="rounded-2xl w-full h-80 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="space-y-4 pt-12">
                <Image
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=500&fit=crop"
                  alt="Luxury car"
                  className="rounded-2xl w-full h-80 object-cover hover:scale-105 transition duration-300"
                />
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                  alt="Apartment exterior"
                  className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-xl opacity-70">
              Two premium services, one exceptional experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Short-Let Stays */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 to-transparent p-8 border border-white/10 hover:border-amber-500/30 transition">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <Home className="text-amber-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">Short-Let Stays</h3>
              <p className="text-lg opacity-80 mb-6 leading-relaxed">
                Discover our curated collection of premium apartments and homes
                across Lagos. From cozy studios to spacious penthouses, each
                property is selected for its comfort, location, and style.
                Perfect for business travelers, tourists, or anyone seeking a
                home away from home.
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
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop"
                  alt="Luxury apartment"
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Car Rentals */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent p-8 border border-white/10 hover:border-blue-500/30 transition">
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
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop"
                  alt="Luxury car"
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-70">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-amber-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition">
                  <value.icon className="text-amber-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl opacity-70">
              The people behind your exceptional experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-amber-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-amber-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Main Office</h3>
                    <p className="opacity-80">
                      123 Admiralty Way, Lekki Phase 1<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock
                    className="text-amber-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                    <p className="opacity-80">
                      Monday - Friday: 8:00 AM - 7:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Coffee
                    className="text-amber-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Get In Touch</h3>
                    <p className="opacity-80">
                      Email: info@hotcoffestays.com
                      <br />
                      Phone: +234 800 HOTCOFFE
                      <br />
                      WhatsApp: +234 901 234 5678
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Office location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Book your perfect stay or rent your ideal vehicle today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-black px-8 py-4 rounded-full hover:bg-amber-400 transition font-bold text-lg flex items-center justify-center gap-2">
              <Home size={20} />
              Browse Stays
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-400 transition font-bold text-lg flex items-center justify-center gap-2">
              <Car size={20} />
              Rent a Car
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="text-amber-500" size={32} />
            <span className="text-2xl font-bold">HotCoffeStays</span>
          </div>
          <p className="opacity-60">
            © 2026 HotCoffeStays. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
