import React, { useEffect } from "react";
import whyChooseImage from "../assets/why.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div
        className="about-container  text-gray-800 px-6 py-40 "
        style={{ fontFamily: "cursive", backgroundColor: "#fbfbfbff" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "#ffb703" }}
            data-aos="fade-up"
          >
            About Shrimp Zone
          </h1>
          <p className="text-lg mb-6" data-aos="fade-left" data-aos-delay="200">
            Welcome to <strong style={{ color: "#fb8500" }}>Shrimp Zone</strong>
            , a seafood paradise located in Masaken Sheraton, Cairo. We
            specialize in serving the freshest shrimp and seafood dishes with
            unique flavors and generous portions.
          </p>
          <p className="text-lg mb-6" data-aos="fade-left" data-aos-delay="400">
            Founded in 2018, Shrimp Zone started with a mission to deliver
            high-quality seafood in a cozy, family-friendly environment. Over
            the years, we’ve become a favorite spot for seafood lovers across
            Cairo.
          </p>
          <p className="text-lg mb-6" data-aos="fade-left" data-aos-delay="600">
            Our menu features signature shrimp trays, seafood soups, and a
            variety of grilled and fried options prepared with passion and
            expertise. Whether you dine in or order delivery, we ensure every
            meal is made fresh and full of flavor.
          </p>
        </div>
      </div>
      <hr
        className="border-t-2 border-gray-500 my-10"
        data-aos="fade"
        data-aos-delay="200"
      />
      <div
        className="bg-white py-16 px-4 md:px-12"
        style={{ fontFamily: "cursive" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#ffb703" }}
            >
              Why Choose Us?
            </h2>
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              style={{ color: "#023047" }}
            >
              Providing nourishing, exciting and energising food is what we do.
              Our goal is to restore your natural balance in mind, body and soul
              – regardless of your lifestyle, diet or allergies.
            </p>
            <ul
              className="list-disc list-inside text-gray-800 space-y-2"
              style={{ color: "#023047" }}
            >
              <li data-aos="fade-left" data-aos-delay="200">
                We only use the freshest, all-natural wholefood ingredients.
              </li>
              <li data-aos="fade-left" data-aos-delay="400">
                No compromise on flavour or texture, regardless of diet or
                allergy.
              </li>
              <li data-aos="fade-left" data-aos-delay="600">
                We cater to celiacs, nut allergies, vegans & vegetarian diets.
              </li>
              <li data-aos="fade-left" data-aos-delay="800">
                Weekly menu updates with seasonal ingredients to excite you!
              </li>
              <li data-aos="fade-left" data-aos-delay="1000">
                Our packaging is made from 100% recycled materials.
              </li>
            </ul>
          </div>
          <div  className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="500"  >
            <img
              src={whyChooseImage}
              alt="Healthy Food Plate"
              className="rounded-full shadow-lg h-72 md:h-96 object-cover"  />
          </div>
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

export default About;
