import React from "react";
import Jumbotron from "../components/Jumbotron";
import Zoom from "react-reveal/Zoom";
import Button from "../components/Button";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Jumbotron image={"/home-back.jpg"} height="100vh">
      <Zoom>
        <div id="heading">
          <h1>Take it Photography</h1>
          <h2>National Theatre &amp; Dance School Specialists</h2>
          <div>
            <Button size="large" link="/shows">
              Parents
            </Button>
            <Button size="large" link="/about">
              Dance School
            </Button>
          </div>
        </div>
      </Zoom>
    </Jumbotron>
  );
};

export default Home;
