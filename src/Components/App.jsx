import React from "react";

import Testimonial1 from "./Testimonaials/Testimonial1";
import ServicePage1 from "./Services/Service Pages/ServicePage1";
import ServicePage2 from "./Services/Service Pages/ServicePage2";
import ServicePage3 from "./Services/Service Pages/ServicePage3";
// import ParticularServiceCard2 from './Services/ParticularServiceCard2';
import MoreServices from "./MoreServices";
import Homepage from "./Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import ServicePage2 from "./Services/Service Pages/ServicePage2";

const App = () => {
  return (
    <>
      {/* <Testi1/> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<MoreServices />} />
        <Route path="/service/service1" element={<ServicePage1 />} />
        <Route path="/service/service2" element={<ServicePage2 />} />
        <Route path="/service/service3" element={<ServicePage3 />} />
      </Routes>
    </>
  );
};

export default App;
