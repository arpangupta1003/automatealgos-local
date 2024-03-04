import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import course1 from '../Assets/Course_Service/course1.png'
import course2 from '../Assets/Course_Service/course2.png'
import course3 from '../Assets/Course_Service/course3.png'
const data = [
  {
    heading: "Python for Finance (for Beginners)",
    about:
      "Explore the fundamentals of Python programming in the context of finance. This course is perfect for those new to both Python and finance, providing a solid starting point for automating financial tasks and exploring the world of algorithmic trading",
    img:course1,
  },
  {
    heading: "Algorithmic Trading with Python",
    about:
      "Elevate your trading game with our comprehensive Algorithmic Trading with Python course. Dive deep into data analysis, backtesting, and live trading implementation using Python.",
    img:course2,
  },
  {
    heading: "Algorithmic Trading with AmiBroker",
    about:
      "Unleash the full potential of AmiBroker with our specialized course. Learn how to create, optimize, and automate trading strategies using this powerful software. Ideal for traders looking to leverage AmiBroker's capabilities for algorithmic trading success.",
    img:course3,
  },
];
const CourseCard = () => {
  return (
    <>
      {data.map((data, index) => (
        <Card id="cardId">
          <center>
            <img
              // alt="Card cap"
              src={data.img}
              alt="Card cap"
              // src={data.img}
              width="86px"
              height="86px"
              style={{
                marginTop: "40px",
                border: "1px",
                borderRadius: "50%",
                margin: "09px",
                backgroundColor: "white",
              }}
            />
          </center>
          <CardBody>
            {/* <CardTitle tag="h5">Service {index + 1}</CardTitle> */}
            <center><CardSubtitle className="mb-2 text-muted" tag="h6">
              <h4>{data.heading}</h4>
            </CardSubtitle></center>
          </CardBody>

          <CardBody>
            <CardText>{data.about}</CardText>
            {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default CourseCard;
