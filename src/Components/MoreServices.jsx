import React from "react";
import ServiceCard from "./Services/ServiceCard";
import '../CSS/MoreServices.css'
import Navbar from "./Navbar";
import ModifiedNavbar from './ModifiedNavbar';
import { useNavigate } from 'react-router-dom';
import ParticularServiceCard1 from './Services/ParticularServiceCard1';
import ParticularServiceCard2 from './Services/ParticularServiceCard2';
import ParticularServiceCard3 from './Services/ParticularServiceCard3';

const MoreServices = () => {
  const navigate=useNavigate();

  
  
  const go1 = () => {
    navigate('/service/service1');  
  }
  const go2 = () => {
    navigate('/service/service2');  
  }
  const go3 = () => {
    navigate('/service/service3');  
  }
  return (
    <>
    <ModifiedNavbar/>
    {/* <Navbar/> */}
      <div className="OuterContainer">
        <div className="InnerContainer">
          <div>
            <center><img src="https://automatealgos.github.io/assets/images/service/bg.png" /></center>
          </div>
          <div>
            <center><h1>Services</h1></center>
          </div>
          <div>
            <center><p>
              Are you ready to take your trading skills to the next level? Then,
              you need to explore our range of services for smart trading! With
              our offerings,
              <br /> you'll gain the expertise to analyze market trends and make
              intelligent trading decisions. Whether you're a novice or an
              experienced trader, our
              <br /> services are designed to empower you for success. You'll
              delve into various aspects, from technical analysis to risk
              management, enabling you to,
              <br /> make informed choices for your investments. Elevate your
              trading game with our comprehensive services.
            </p></center>
          </div>
          <div className="ServiceCardDiv">
            <ParticularServiceCard1 />
            <ParticularServiceCard2 />
            <ParticularServiceCard3 />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreServices;
