import React from "react";
import ServiceCard from "../Services/ServiceCard";
import { Link } from "react-router-dom";
import MoreServices from "../MoreServices";
// import App from "../App";
import "../../CSS/Services.css";
import ViewMore from "../ViewMore";


const Services = () => {
  return (
    <>
      <div className="Container" id="services">
        <div className="headingDiv">
          <center>
            <h2>Services We Offer</h2>
          </center>
          <center>
            <p>
              We offer the best services around - from Algorithmic Trading Setup
              Development, Strategy Development & Backtesting, 1:1 Algorithmic
              Trading Python Mentorship and more!
            </p>
          </center>
          <div className="ServiceCardDiv">
            <ServiceCard />
          </div>
          <center>
          <ViewMore />
          </center>
        </div>
      </div>
    </>
  );
};

export default Services;
