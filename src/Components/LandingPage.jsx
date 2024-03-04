// export default LandingPage;

import React from "react";
import "../CSS/LandingPage.css";
import hero from '../Assets/hero-influencer.webp';
import landingPagecomponent1 from '../Assets/landingPagecomponent1.png'

const LandingPage = () => {
  return (
    <>
      <div className="outerContainerLanding">
        <div className="tech-dreamsLanding">
          <h2>
            Automate Your Stratgies For <br />
            <span className="headingSpan">Higher Returns.</span>
          </h2>
          <p>
            Job seekers can create compelling profiles, showcasing their skills,
            experience, and aspirations, while exploring an extensive database
            of tech job openings from top-tier tech companies to exciting
            startups.
          </p>
          <button>Book your seat</button>
          <div className="stats">
            <div className="stat" id="stat1Id">
              <div className="innerStat">
                <span className="number">15k</span>
                <span>
                  <img src={landingPagecomponent1} />
                </span>
              </div>
              <div>
                <span className="label">Satisfied learners</span>
              </div>
            </div>
            <div className="stat">
              <div className="innerStat">
                <span className="number">4.3</span>
                <span>
                  <i
                    class="fa fa-star"
                    style={{ fontSize: "24px", color: "yellow" }}
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ fontSize: "24px", color: "yellow" }}
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ fontSize: "24px", color: "yellow" }}
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ fontSize: "24px", color: "yellow" }}
                  ></i>
                </span>
              </div>
              <span className="label">Average ratings</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={hero}
            height="80%"
            width="100%"
          />
        </div>
      </div>
      <center>
      <h3>Integrated Partners</h3>
        <marquee
          style={{
            height: "100px",
            backgroundColor: "rgb(221 248 250)",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://automatealgos.github.io/assets/images/partner/light/fyers.png"
            />
            <img
              style={{ height: "40px", width: "165px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/Z/zerodha-logo-0F7F62DF1B-seeklogo.com.png"
            />
            <img
              style={{ height: "60px", width: "100px", margin: "10px 25px" }}
              src="https://www.mastertrust.co.in/Content/images/master-logo.svg"
            />
            <img
              style={{ height: "40px", width: "85px", margin: "10px 25px" }}
              src="https://seeklogo.com/images/U/upstox-logo-26AC71FF50-seeklogo.com.png"
            />
            <img
              style={{ height: "55px", width: "85px", margin: "10px 25px" }}
              src="https://asset.brandfetch.io/idDA95rr8l/idWGpFYO3-.png"
            />
          </div>
        </marquee>
      </center>
    </>
  );
};

export default LandingPage;
