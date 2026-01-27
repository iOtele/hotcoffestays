import React from "react";
import { motion } from "motion/react";

const NavBar = () => {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <motion.div
        className="text-2xl font-bold text-foreground outline-2 rounded-full px-3 py-2 shadow-gray-600-300 hover:shadow-gray-100 transition cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        HotCoffeStays
      </motion.div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#features"
          className="text-foreground hover:text-gray-600 transition"
        >
          Why Us
        </a>
        <a
          href="#download"
          className="text-foreground hover:text-gray-600 transition"
        >
          Download
        </a>
      </div>
      <motion.button
        className="bg-background outline-2 text-foreground px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Get Started
      </motion.button>
    </nav>
  );
};

export default NavBar;
