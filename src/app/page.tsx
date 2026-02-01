"use client";
import { Suspense } from "react";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import TestimonialSwiper from "@/components/Testimonials";
import Why from "@/components/Why";
import Booking from "@/components/Booking";
import AboutUs from "@/components/AboutUs";
import AllRentals from "@/components/AllRentals";
import Team from "@/components/Team";

const HotCaffestayLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <AllRentals />
      <Why />
      <TestimonialSwiper />
      <AboutUs />
      <Suspense fallback={null}>
        <Booking />
      </Suspense>
      <ContactUs />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
};
export default HotCaffestayLanding;
