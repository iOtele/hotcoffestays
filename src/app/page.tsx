"use client";

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Why from "@/components/Why";

const HotCaffestayLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Gallery />
      <Why />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default HotCaffestayLanding;
