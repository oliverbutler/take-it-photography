import React from "react";
import Jumbotron from "../components/Jumbotron";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import { FaPoundSign, FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/Button";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Jumbotron image={"/back-2.jpg"} height="60vh">
        <Zoom>
          <h1>Take it Photography</h1>
          <h2>National Theatre &amp; Dance School Specialists</h2>
          <Button size="large" link="/contact">
            Book Your Dance Show
          </Button>
        </Zoom>
      </Jumbotron>
      <div className="content">
        <div className="row center-xs">
          <div className="col-sm-12 col-md">
            <FaPoundSign className="icons" />
            <h1>Free Service</h1>
            <p>We offer a free service,</p>
          </div>
          <div className="col-sm-12 col-md">
            <FaCamera className="icons" />
            <h1>Professional</h1>
            <p>
              WWe conduct our service in a professional and appropriate manor.
              All of our staff wear uniform and are fully CRB checked. We also
              take professional head shots with an onsite studio. We also print
              all of the headshots on site with the latest high end quality
              printers.
            </p>
          </div>
          <div className="col-sm-12 col-md">
            <FaMapMarkerAlt className="icons" />
            <h1>Nationwide</h1>
            <p>We cover Nationwide, from church halls to West End theatres.</p>
          </div>
        </div>
      </div>
      <div className="content ">
        <h1>Who we are.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h1>What we do.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <LightSpeed right>
          <Button size="large" link="/contact">
            Book your Dance School
          </Button>
        </LightSpeed>
      </div>
    </div>
  );
};

export default About;
