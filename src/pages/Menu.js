import React, { useEffect } from "react";
import menu from "../Data/D-menu";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <section className="my-16 px-4 py-12" style={{ fontFamily: "cursive" }}>
        <div className="mb-16" data-aos="fade-right" data-aos-delay="0">
          <h2
            className="text-3xl font-bold text-left md:text-left"
            style={{ color: "#0b4561ff" }}
          >
            Enjoy the most delicious seafood...{" "}
            <span style={{ color: "#fb8500" }}>
              the flavor of the sea in every bite!
            </span>
          </h2>
        </div>
        <div className="row justify-content-center">
          {menu.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={500 + index * 200}
            >
              <div
                className="card border-0 shadow"
                style={{ width: "18rem", color: "#023047" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div
                  className="card-body text-start"
                  style={{ color: "#023047" }}
                >
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price} EGP</p>
                  <button className="btn btn-warning w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr
        className="border-t-2 border-gray-500 my-10"
        data-aos="fade"
        data-aos-delay="200"
      />
    </div>
  );
};

export default Menu;
