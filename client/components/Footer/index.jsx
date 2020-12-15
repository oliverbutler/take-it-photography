import React from "react";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img
        className="icon-10"
        src={"logo.png"}
        alt="Take it Photohgraphy logo"
      />
      <h1>Take it Photography</h1>
      <h1>‭07765 586735</h1>
      <div className="row center-md ">
        <div className="col-xs-12 col-sm-4 col-md-3 first-md first-sm">
          <Fade left delay={255}>
            <h2>Contact</h2>
            <p>
              07765 586735‬ <br />
              takeitphotography@gmail.com
            </p>
          </Fade>
        </div>
        <div id="social-icons" className="col-xs-12 col-sm-4 col-md-3 first-xs">
          <Pulse>
            <a href="https://www.facebook.com/takeitphotographyripon">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com/takeitphotographyripon">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/takeitphotographyripon">
              <FaTwitter />
            </a>
          </Pulse>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <Fade right delay={255}>
            <h2>Address</h2>
            <p>
              17 The Chase <br />
              Knaresborough <br />
              North Yorkshire <br />
              HG5 OSY
            </p>
          </Fade>
        </div>
      </div>
      <p>@2020 Copyright: Take it Photography ltd</p>
    </footer>
  );
};

export default Footer;
