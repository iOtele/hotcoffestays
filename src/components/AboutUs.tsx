import React from "react";
import { Home, Car, Coffee, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
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
                  width={300}
                  height={200}
                  src="/image1.jpg"
                  alt="Luxury apartment interior"
                  className="rounded-2xl w-full h-64 object-cover hover:scale-115 transition duration-300"
                />
                <Image
                  width={300}
                  height={200}
                  src="/image2.jpg"
                  alt="Modern living space"
                  className="rounded-2xl w-full h-80 object-cover hover:scale-115 transition duration-300"
                />
              </div>
              <div className="space-y-4 pt-12">
                <Image
                  width={300}
                  height={200}
                  src="/car1.jpeg"
                  alt="Luxury car"
                  className="rounded-2xl w-full h-80 object-cover hover:scale-115 transition duration-300"
                />
                <Image
                  width={300}
                  height={200}
                  src="/car2.jpeg"
                  alt="Apartment exterior"
                  className="rounded-2xl w-full h-64 object-cover hover:scale-115 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
