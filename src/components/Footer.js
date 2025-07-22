import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#023047] text-white py-8" style={{ fontFamily: "cursive" }}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#fb8500" }}>
              Shrimp Zone
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" style={{ color: "#023047" }} className="no-underline block">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" style={{ color: "#023047" }} className="no-underline block">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: "#023047" }} className="no-underline block">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#023047" }} className="no-underline block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: "#fb8500" }}>
              Contact Us
            </h4>
            <p style={{ color: "#023047" }}>Sheraton/ 108 Saqr Quraish</p>
            <p style={{ color: "#023047" }}>+20 100 123 4567</p>
            <p style={{ color: "#023047" }}>info@shrimpzone.com</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-4" style={{ color: "#023047" }}>
        © {new Date().getFullYear()} Shrimp Zone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
