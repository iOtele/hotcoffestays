import React from "react";
import { Shield, Clock, Heart, Star } from "lucide-react";

const Why = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Our dedicated team is always available to assist you, any time of day or night.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      desc: "Well-secured apartments with 24/7 monitoring for your peace of mind",
    },
    {
      icon: Heart,
      title: "Exceptional Service",
      desc: "We go above and beyond to ensure every stay and journey exceeds your expectations.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      desc: "Premium properties and well-maintained vehicles for an unforgettable experience.",
    },
  ];

  return (
    <section
      id="features"
      className=" py-12 sm:px-6 text-foreground lg:px-8 pt-32 pb-20 px-6 bg-linear-to-br from-amber-500/20 to-blue-500/20"
    >
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, id) => (
            <div
              key={id}
              className="bg-linear-to-br from-gray-500 to-gray-200 p-8 rounded-2xl hover:shadow-2xl hover:shadow-orange-600 transition group"
            >
              <div
                className=" rounded-xl flex items-center justify-center mb-4 group-hover:scale-120 transition 
              w-20 h-20 mx-auto "
              >
                <feature.icon className="text-amber-500" size={28} />
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
