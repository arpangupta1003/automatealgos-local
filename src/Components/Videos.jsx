// Videos.jsx
import React, { useState, Component } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../CSS/VidTestim.css";
import VideoCard from "./VideoCard";

const viddata = [
  {
    url: "H02ZQhxihgA",
    desc: "Single Biggest Trading Mistake",
    date: "29 Jan 2024",
  },
  {
    url: "e0e9gp6L3aE",
    desc: "Designing an Algo Trading System.",
    date: "12 Oct 2023",
  },
  {
    url: "wLC806u0kMo",
    desc: "How to create 'Scanners' using Fyers API.    ",
    date: "9 Nov 2023 ",
  },
  {
    url: "dgsm7Jgii_s",
    desc: "Mastering Algo Trading Using FYERS API",
    date: "28 Sept 2023 ",
  },
  {
    url: "IFqiCiRUtT4",
    desc: "What is Algorithmic Trading ? Basics of APIs",
    date: "9 Feb 2024",
  },
  {
    url: "3a3j0nLk0hs",
    desc: "Beginners Guide to Run DhanHQ APIs",
    date: "10 Feb 2024",
  },
  {
    url: "1VqVOO_ueeo",
    desc: "Static Vs. Dynamic APIs Explained for Beginners",
    date: "12 Feb 2024",
  },
  {
    url: "dWinYmYGnNg",
    desc: "How to Fetch Multiple Data at Once?",
    date: "13 Feb 2024",
  },
  {
    url: "ECWCTHcG6WA",
    desc: "How to Place Orders and Key Functions",
    date: "13 Feb 2024",
  },
  {
    url: "fxZee9OhbOU",
    desc: "Introducing Dhan Websockets",
    date: " 15 Feb 2024",
  },
  {
    url: "fzgaV_RkysU",
    desc: "How to use DhanHQ APIs for Order Execution",
    date: "15 Feb 2024",
  },
  {
    url: "YK3AbKJ83Pk",
    desc: "Algorithmic Trading Made Easy",
    date: "15 Feb 2024 ",
  },
];

export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div id="vidTestId" className="vidTestOuterDiv">
          <div className="vidTestInnerDiv">
            <center>
              <h1>Our Videos</h1>
            </center>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
              className="vidCarousel"
            >
              {viddata.map((data, index) => (
                <div>
                  <div className="myCarousel">
                    <iframe
                      title="YouTube Video"
                      width="345"
                      height="370"
                      src={`https://www.youtube.com/embed/${data.url}`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ margin: "30px auto" }}
                    />
                    <h3
                      style={{ fontSize: "1.4em", margin: "15px 0px 10px 0px" }}
                    >
                      {data.desc}
                    </h3>
                    {/* <h4>{data.position}</h4> */}
                    <p style={{ fontSize: "1.2em" }}>{data.date}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </>
      // <div className="VideosPageId" id="videosId">
      //   <center>
      //     <h2 className="headingVideos">Our Videos</h2>
      //   </center>
      //   <center>
      //     <div className="carousel">
      //       <button className="buttClass" onClick={showPreviousVideos}>
      //         <FaAngleLeft style={{ color: "black", fontSize: "20px", height: "270px" }} />
      //       </button>
      //       <div className="videos-container">
      //         {[...data, ...data, ...data]
      //           .slice(currentIndex, currentIndex + videosPerPage)
      //           .map((code, index) => (
      //             <VideoCard key={index} embedCode={code} />
      //           ))}
      //       </div>
      //       <button className="buttClass" id="right" onClick={showNextVideos}>
      //         <FaAngleRight style={{ color: "black", fontSize: "20px", height: "270px" }} />
      //       </button>
      //     </div>
      //   </center>
      // </div>
    );
  }
}
