import React from "react";
import "../CSS/Pricing.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const Pricing = () => {
  return (
    <div className="outerContainerPricing" id="pricingId">
      <h2>Pricing</h2>

      <div className="innerContainerPricing">
        <Card className="pricing-card1">
          <CardBody>
            <CardTitle tag="h5" className="heading">
              Features
            </CardTitle>
            <p className="card-text">Price </p>
            <p className="card-text">
              Free Backtest Credit Point(Complementary)
            </p>
            <p className="card-text">Strategy Creation</p>
            <p className="card-text">Strategy Deployment(Live/PT)</p>
            <p className="card-text">Exchanges</p>
          </CardBody>
        </Card>
        <Card className="pricing-card">
          <CardBody>
            <CardTitle tag="h5" className="heading">
              NANO
            </CardTitle>
            <p className="card-text">Rs.599</p>
            <p className="card-text">100</p>
            <p className="card-text">Unlimited </p>
            <p className="card-text">1</p>
            <p className="card-text">NSE, NFO, MCX, CDS</p>
            <center>
              <Button color="primary">Subscribe</Button>
            </center>
          </CardBody>
        </Card>
        <Card className="pricing-card">
          <CardBody>
            <CardTitle tag="h5" className="heading">
              MICRO
            </CardTitle>
            <p className="card-text">1299 </p>
            <p className="card-text">300</p>
            <p className="card-text">Unlimited</p>
            <p className="card-text">4</p>
            <p className="card-text">NSE, NFO, MCX, CDS</p>
            <center>
              <Button color="primary">Subscribe</Button>
            </center>
          </CardBody>
        </Card>
        <Card className="pricing-card">
          <CardBody>
            <CardTitle tag="h5" className="heading">
              MEGA
            </CardTitle>
            <p className="card-text">Rs.2999</p>
            <p className="card-text">1000</p>
            <p className="card-text">Unlimited</p>
            <p className="card-text">15</p>
            <p className="card-text">NSE, NFO, MCX, CDS</p>
            <center>
              <Button color="primary">Subscribe</Button>
            </center>
          </CardBody>
        </Card>
        <Card className="pricing-card">
          <CardBody>
            <CardTitle tag="h5" className="heading">
              GIGA
            </CardTitle>
            <p className="card-text">Rs.3999</p>
            <p className="card-text">2000</p>
            <p className="card-text">Unlimited Point </p>
            <p className="card-text">20</p>
            <p className="card-text">NSE, NFO, MCX, CDS</p>
            <center>
              <Button className="button" color="primary">
                Subscribe
              </Button>
            </center>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
