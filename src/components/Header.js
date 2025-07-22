import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShrimp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
        <div className="container-fluid" style={{ fontFamily: "cursive" }}>
          {/* Left: Logo */}
          <a className="navbar-brand ms-5 fw-semibold" href="#">
            <FontAwesomeIcon icon={faShrimp} className="icon-hed fs-2" />
            <span className="hed-tit ms-2 fs-2">Shrimp Zone</span>
          </a>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}  >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-center text-center ${isOpen ? "bg-white rounded shadow-sm transition-all" : ""}`}
            id="navbarSupportedContent"  >
            <ul className="navbar-nav fw-semibold mb-2 mb-lg-0 fs-4">
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/menu" onClick={() => setIsOpen(false)}>
                  Menu
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active" aria-current="page" to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
            </ul>

            <div className="d-lg-none mt-3">
              <input  className="form-control mb-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn-search w-100" type="submit">
                Search
              </button>
            </div>
          </div>
          <div className="d-none d-lg-flex align-items-center me-5">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"/>
            <button className="btn-search" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
