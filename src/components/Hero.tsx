import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-linear-to-br from-gray-50 via-white to-teal-50 bg-[url('/bghotcoffestays.jpg')] bg-cover bg-center ">
      <motion.div
        className="container mx-auto "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="gap-32">
          <div className="space-y-6 p-8 flex flex-col items-center">
            <h1 className="text-5xl md:text-8xl font-bold text-text-color leading-tight text-center">
              Your Staying <br />
              <span className="text-7xl">Simplified</span>
            </h1>
            <p className="text-3xl text-text-color animate-fade-in animation-delay-200">
              <span className="text-foreground font-bold ">Experience </span>
              comfortable, secure, and fully furnished short-let apartments
              designed for stress-free living.
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
      </motion.div>
    </section>
  );
};

export default Hero;
