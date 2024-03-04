import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
} from "reactstrap";
const data = [
  {
    heading: "Algorithmic Trading Setup Development",
    about:
      "We assist in setting up a robust algorithmic trading infrastructure, ensuring you have the right tools and platforms to start trading efficiently.",
    img: "   https://automatealgos.github.io/assets/images/service/1.png",
  },
  {
    heading: "Strategy Development and Web Testing",
    about:
      "We help you create and refine winning trading strategies, with thorough historical testing to ensure their effectiveness.",
    img: "https://automatealgos.github.io/assets/images/service/2.png",
  },
  {
    heading: "1:1 Algorithmic Trading Python Mentorship",
    about:
      "Personalized Python mentorship to automate your trading, suitable for both beginners and experienced traders.",
    img: "https://automatealgos.github.io/assets/images/service/3.png",
  },
];
const ServiceCard = () => {
  return (
    <>
      {data.map((data, index) => (
        <Card
          id="cardId"
        >
          <center>
            <img
              alt="Card cap"
              src={data.img}
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
          <br />
          <br />
          <CardBody>
            {/* <CardTitle tag="h5">Service {index + 1}</CardTitle> */}
            <center>
              <CardSubtitle className="mb-1 text-muted" tag="h6">
                <h4>{data.heading}</h4>
              </CardSubtitle>
            </center>
          </CardBody>

          <CardBody>
            <CardText
              style={{
                fontSize: "1.19em",
                textAlign: "center",
                paddingBottom: "30px",
              }}
            >
              {data.about}
            </CardText>
           
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default ServiceCard;
