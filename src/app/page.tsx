"use client";

import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import TestimonialSwiper from "@/components/Testimonials";
import Why from "@/components/Why";

const HotCaffestayLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Gallery />
      <Why />
      <TestimonialSwiper />
      <ContactUs />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default HotCaffestayLanding;
