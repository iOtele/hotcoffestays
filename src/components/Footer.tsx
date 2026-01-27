import { FacebookIcon, Instagram, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 sm:px-6 lg:px-8   px-6 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 ">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-foreground outline-2 rounded-full px-3 shadow-gray-600-300 w-fit hover:shadow-gray-100 transition cursor-pointer">
              HotCoffeStays
            </div>
            <p className="text-gray-400 py-4">
              Effortless Short-Let Stays for Modern Living
            </p>
            <a
              href="https://wa.me/2349048255252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-gray-400 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div>
            <h4 className="font-bold text-foreground text-xl mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              
              <li>
                <a
                  href="#gallery"
                  className="hover:text-gray-600 transition-all duration-500"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-600 transition">
                  Why Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground text-xl mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349048255252"
                  className="hover:text-gray-600 transition"
                >
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
            <h4 className="font-bold text-foreground text-xl mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-background transition p-2 text-blue-600" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-background transition p-2 text-blue-400" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-background transition p-2 text-pink-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 HotCoffeStays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
