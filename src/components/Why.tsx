import React from "react";
import { Shield, Leaf, Clock, Smartphone } from "lucide-react";

const Why = () => {
  const features = [
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
  ];

  return (
    <section id="features" className=" py-12 sm:px-6 lg:px-8 bg-cover bg-center pt-32 pb-20 px-6 bg-linear-to-br from-gray-50 via-white to-teal-50">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-color mb-4">
            Why Choose HotCoffeStays
          </h2>
          <p className="text-xl text-text-color max-w-2xl mx-auto">
            Say goodbye to stress enjoy secure, comfortable stays with modern
            amenities and thoughtfully furnished apartments.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, id) => (
            <div
              key={id}
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
  );
};

export default Why;
