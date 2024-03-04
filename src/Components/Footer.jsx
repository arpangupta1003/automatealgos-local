import React from "react";
import "../CSS/Footer.css";
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <>
      <div class="FooterClass">
        <footer
          id="footerId"
          class="text-center text-lg-start bg-body-tertiary text-muted"
        >
          <section
            id="footerSectionId"
            class="d-flex justify-content-center p-4 border-bottom"
          >
            <div class="me-5 d-none d-lg-block">
              Get connected with us on social networks:
            </div>
            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/archit-mittal-analyst/"
                class="me-4 text-reset"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <img src={logo} />
                    Automate Algos
                  </h6>
                  <p>
                    Automate Your Stratgies For Higher Returns. Anyone can
                    invest money to different currency to increase their
                    earnings by the help of AutomateAlgos through online.
                  </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i class="fas fa-home me-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    archit.akg13@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3"></i> +91 91491 74349
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div id="copyrightId" class="text-center p-4">
            © 2024 Copyright:
            <a class="text-reset fw-bold" href="#">
              Automate Algos
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
