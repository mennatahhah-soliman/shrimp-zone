import React, { useEffect } from 'react';
import shrimpImage from "../assets/hero.jpg";
import menu from "../Data/D-menu";
import { Link } from "react-router-dom";
import whyChooseImage from "../assets/why.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <div>
      <div className="home" style={{ fontFamily: "cursive" }}>
        <div
          className="hero-section flex items-center text-white"
          style={{
            backgroundImage: `url(${shrimpImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}>
          <div
            className="flex justify-end w-full pr-32"
            data-aos="fade-left">
            <div className="content text-right max-w-lg">
              <h1 className="text-5xl font-bold mb-4"
                style={{ color: "#ffb703" }}
                data-aos="fade-down"
                data-aos-delay="200">
                Shrimp Zone
              </h1>
              <p className="text-lg"
                style={{ color: "#023047" }}
                data-aos="fade-left"
                data-aos-delay="400">
                Get a list of Shrimp Zone branches in Egypt,
                including phone numbers, location on the map, working hours,
                and addresses of Shrimp Zone branches.
              </p>
              <button
                className="learn-btn mt-4 px-6 py-2 text-white rounded-full"
                data-aos="zoom-in"
                data-aos-delay="600">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <sectio className="my-16 px-4"  data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-10"
            style={{ color: "#023047" }}
            data-aos="fade-up"
            data-aos-delay="200">
            New arrivals
          </h2>
          <div className="row justify-content-center">
            {menu.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-delay={300 + index * 200} >
                <div
                  className="card border-0 shadow"
                  style={{ width: "18rem", color: "#023047" }}>
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name} />
                  <div className="card-body text-start">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price} EGP</p>
                    <button className="btn btn-warning w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center w-100 mt-4"
             data-aos="fade-up"  data-aos-delay="600"  >
            <Link to="/menu" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className="view-btn px-6 py-2 rounded-md">
                View Menu
              </button>
            </Link>
          </div>
        </sectio>

        <hr
          className="border-t-2 border-gray-500 my-10"
          data-aos="fade"
          data-aos-delay="200"
        />
        <div
          className="bg-white py-16 px-4 md:px-12"
          style={{ fontFamily: "cursive" }}
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2  className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#ffb703" }}  >
                Why Choose Us?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed"
                style={{ color: "#023047" }}  >
                Providing nourishing, exciting and energising food is what we do. 
                Our goal is to restore your natural balance in mind, body and soul – 
                regardless of your lifestyle, diet or allergies.
              </p>
              <ul
                className="list-disc list-inside text-gray-800 space-y-2"
                style={{ color: "#023047" }} >
                <li data-aos="fade-left" data-aos-delay="400">
                  We only use the freshest, all-natural wholefood ingredients.
                </li>
                <li data-aos="fade-left" data-aos-delay="600">
                  No compromise on flavour or texture, regardless of diet or allergy.
                </li>
                <li data-aos="fade-left" data-aos-delay="800">
                  We cater to celiacs, nut allergies, vegans & vegetarian diets.
                </li>
                <li data-aos="fade-left" data-aos-delay="1000">
                  Weekly menu updates with seasonal ingredients to excite you!
                </li>
                <li data-aos="fade-left" data-aos-delay="1200">
                  Our packaging is made from 100% recycled materials.
                </li>
              </ul>
            </div>

            <div className="flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="500">
              <img src={whyChooseImage} alt="Healthy Food Plate" className="rounded-full shadow-lg h-72 md:h-96 object-cover"/>
            </div>
          </div>
        </div>
      </div>
      <hr  className="border-t-2 border-gray-500 my-10"
          data-aos="fade"
          data-aos-delay="200"  />
    </div>
  );
};

export default Home;
