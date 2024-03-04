import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the threshold value as needed
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-blur' : ''} sticky-top`}>
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="https://automatealgos.in/assets/images/logo/logo.png" alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Courses
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <button class="navButton">
                  <a class="nav-link" href="/">
                    Login
                  </a>
                </button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
