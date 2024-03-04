import React from "react";
import TestimonialCard from "../Components/Testimonaials/TestimonialCard";
import LandingPage from "./LandingPage";
import ScrollButton from "./ScrollButton";
import TestimonialsSection from "../Components/Testimonaials/TestimonialsSection";
import Videos from "./Videos";
import Table from "@mui/material/Table";
import Services from "./Services/Services";
import Courses from "./Courses";
import ServicePage2 from '../Components/Services/Service Pages/ServicePage2';
import Pricing from "./Pricing";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonial1 from "./Testimonaials/Testimonial1";
import VidTest from './VidTest';
// import Test1 from './Test1';
const Homepage = () => {
  return (
    <>
          <Navbar />
          <LandingPage />
          <Services />
          <Courses />
          <Videos />
          <Pricing />
          <Testimonial1/>
          <Footer />
          <ScrollButton />
    </>
  );
};

export default Homepage;
