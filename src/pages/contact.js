import React, { useEffect } from "react";
import herocont from "../assets/contact-hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white" style={{ fontFamily: "cursive" }}>
      <div
        className="relative flex items-center justify-start"
        style={{
          backgroundImage: `url(${herocont})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div
          className="bg-black/40 p-6 md:p-12 rounded-lg ml-4 md:ml-16 text-white max-w-xl"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: "#fb8500" }}
            data-aos="fade-left"
            data-aos-delay="0"
          >
            Contact Us
          </h1>
          <div className="space-y-4 text-base md:text-lg">
            <div data-aos="fade-left" data-aos-delay="2000">
              <h3 className="cont-tit font-semibold">Address:</h3>
              <p className="p-cont">
                Sheraton/ 108 Saqr Quraish, in front of Al Farouq Mosque
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="2500">
              <h3 className="cont-tit font-semibold">Phone:</h3>
              <p className="p-cont">+20 100 123 4567</p>
            </div>
            <div data-aos="fade-left" data-aos-delay="3000">
              <h3 className="cont-tit font-semibold">Email:</h3>
              <p className="p-cont">info@shrimpzone.com</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto px-4 py-12"
        data-aos="fade-up"
        data-aos-delay="3500"
      >
        <h2
          className="text-2xl font-bold text-center text-[#023047] mb-6"
          style={{ color: "#023047" }}
          data-aos="fade-up"
          data-aos-delay="3800"
        >
          Our Location on Google Map
        </h2>
        <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <iframe
            title="Shrimp Zone Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789012!2d31.4391234!3d30.0987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c123456789%3A0xabcdef1234567890!2sShrimp%20Zone%20(Sheraton)!5e0!3m2!1sen!2seg!4v1234567890123"
            width="100%"
            height="450"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <hr
        className="border-t-2 border-gray-500 my-10"
        data-aos="fade"
        data-aos-delay="200"
      />
    </div>
  );
};

export default Contact;
