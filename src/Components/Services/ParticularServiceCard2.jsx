import React from "react";
import { Card, CardBody, CardText, CardSubtitle } from "reactstrap";
import { useNavigate } from "react-router-dom";
import '../../CSS/ParticularServiceCard.css';
import course2 from '../../Assets/Course_Service/course2.png';

const data = [
  {
    heading: "Strategy Development and Web Testing",
    about:
      "We help you create and refine winning trading strategies, with thorough historical testing to ensure their effectiveness.",
    img:course2,
  },
];
const ServiceCard = () => {
  const navigate = useNavigate();

  const go2 = () => {
    navigate("/service/service2");
  };
  return (
    <>
      {data.map((data, index) => (
        <Card id="cardId">
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
          <center>
            <button
              style={{
                width: "40%",
                borderRadius: "10px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={go2}
            >
              Open
            </button>
          </center>
        </Card>
      ))}
    </>
  );
};

export default ServiceCard;
