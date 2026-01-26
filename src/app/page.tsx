"use client";

import { Shield, Leaf, Clock, Smartphone } from "lucide-react";

const HotCaffestayLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-foreground">HotCoffeStays</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-foreground hover:text-gray-600 transition"
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className="text-foreground hover:text-gray-600 transition"
          >
            About Us
          </a>
          <a
            href="#download"
            className="text-foreground hover:text-gray-600 transition"
          >
            Download
          </a>
        </div>
        <button className="bg-background text-foreground px-6 py-2 rounded-full hover:bg-emerald-700 transition">
          Get Started
        </button>
      </nav>

      <section className="min-h-screen pt-32 pb-20 px-6 bg-linear-to-br from-emerald-50 via-white to-teal-50 ">
        <div className="container mx-auto ">
          <div className="gap-32">
            <div className="space-y-6 p-8 flex flex-col items-center">
              <h1 className="text-5xl md:text-8xl font-bold text-text-color leading-tight text-center animate-fade-in">
                Your Staying, <br />
                <span className="text-7xl">Simplified</span>
              </h1>
              <p className="text-xl text-text-color animate-fade-in animation-delay-200">
                Experience comfortable, secure, and fully furnished short-let
                apartments designed for stress-free living.
              </p>
              <div className="flex flex-col sm:flex-row gap-15 mt-20 animate-fade-in animation-delay-400">
                <div className="flex gap-2 items-center bg-black text-foreground rounded-3xl px-8 py-2 hover:bg-gray-900 transition cursor-pointer group">
                  <svg
                    className="w-8 h-8 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <p>Download on the </p>
                    <span className="font-bold text-text-color text-xl">
                      App Store
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 items-center bg-background text-foreground rounded-3xl px-8 py-2 hover:bg-gray-700 transition cursor-pointer group">
                  <svg
                    className="w-8 h-8 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div>
                    <p>Download on the </p>
                    <span className="font-bold text-text-color text-xl">
                      Google Play
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-color mb-4">
              Why Choose HotCoffeStays
            </h2>
            <p className="text-xl text-text-color max-w-2xl mx-auto">
              Say goodbye to stress—enjoy secure, comfortable stays with modern
              amenities and thoughtfully furnished apartments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Check-In",
                desc: "Quick and hassle-free check-in so you can settle in instantly",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                desc: "Well-secured apartments with 24/7 monitoring for your peace of mind",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                desc: "Sustainable living with energy-efficient apartments and amenities",
              },
              {
                icon: Smartphone,
                title: "Easy Booking",
                desc: "Book your stay in seconds through our simple online system",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-gray-100 to-gray-200 p-8 rounded-2xl hover:shadow-xl transition group"
              >
                <div className="bg-background w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="download"
        className="py-20 px-6 bg-linear-to-br from-emerald-50 via-white to-teal-50"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Your Next Short-Stay Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join countless guests enjoying comfortable, secure, and hassle-free
            apartments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foreground mb-4">
                HotCoffeStays
              </div>
              <p className="text-gray-400">
                Effortless Short-Let Stays for Modern Living
              </p>
              <p>+234 904 825 5252</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-gray-600 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600 transition">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                {["facebook", "twitter", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-background transition"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 HotCoffeStays. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HotCaffestayLanding;
