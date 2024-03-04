import React from "react";
import Navbar from "../../Navbar";
import ModifiedNavbar from '../../ModifiedNavbar';
import serviceimg from '../../../Assets/service.png'


import { CiBookmarkCheck } from "react-icons/ci";

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  CardBody,
  CardDeck,
} from "reactstrap";

import "./ServicePage.css";
const ServicePage1 = () => {
  return (
    <>
      <ModifiedNavbar/>
      {/* <Navbar /> */}
      <div className="ServiceP1Outer">
        <div className="ServiceP1Inner">
          <div className="headsection">
            <center>
              <h1>1:1 Algorithmic Trading Python Mentorship</h1>
            </center>
          </div>
          <div className="mainDiv">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={serviceimg}
                style={{ maxWidth: "100%", marginTop: "65px" }}
              />
            </div>
            <div>
              <h4 style={{ textAlign: "center", margin: "35px 0px" }}>
                1:1 Algorithmic Trading Python Mentorship
              </h4>
            </div>
            <div>
              <center>
                <p
                  style={{
                    textAlign: "center",
                    width: "88%",
                    fontSize: "1.4em",
                  }}
                >
                  Are you ready to take your trading skills to the next level?
                  Then, you need to explore our "1:1 Algorithmic Trading Python
                  Mentorship" service for smart trading! With this offering,
                  you'll gain personalized expertise and guidance to analyze
                  market trends and make intelligent trading decisions using
                  Python. Whether you're a novice or an experienced trader, this
                  mentorship is designed to empower you for success in
                  algorithmic trading. You'll delve into various aspects of
                  Python programming, from the basics to advanced techniques,
                  and learn how to apply them to automate your trading
                  strategies. Elevate your trading game with our comprehensive
                  "1:1 Algorithmic Trading Python Mentorship" service.
                </p>
              </center>
            </div>
            <div
              className="servicePricingCard"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <CardDeck>
                <Card className="serviceCard">
                  <CardBody
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      justifyContent: "start",
                    }}
                  >
                    <CardTitle tag="h5">Basic</CardTitle>
                    <CardSubtitle
                      tag="h6"
                      className="mb-2"
                      style={{ color: "green", fontSize: "1.4em" }}
                    >
                      Rs.30,000 / month
                    </CardSubtitle>
                    <hr />
                    <CardText style={{ padding: "15px 5px" }}>
                      <div style={{ margin: "10px 15px", fontSize: "1.3em" }}>
                        <CiBookmarkCheck />
                        Assignments
                      </div>
                      <div style={{ margin: "10px 15px", fontSize: "1.3em" }}>
                        <CiBookmarkCheck />
                        Doubt Solving                      </div>
                      <div style={{ margin: "10px 15px", fontSize: "1.3em" }}>
                        <CiBookmarkCheck />
                        Hand Holding Sessions                      </div>
                      <div style={{ margin: "10px 15px", fontSize: "1.3em" }}>
                        <CiBookmarkCheck />
                        Weekly 1 classes 2 hrs                      </div>
                    </CardText>
                    <Button color="success">Choose Plan</Button>
                  </CardBody>
                </Card>
              </CardDeck>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage1;
