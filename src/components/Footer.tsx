import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 sm:px-6 lg:px-8  pt-32 pb-20 px-6 bg-linear-to-br from-teal-50 via-gray-500 to-gray-700">
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
  );
};

export default Footer;
