import React from "react";
import Jumbotron from "../components/Jumbotron";
import Zoom from "react-reveal/Zoom";
import { FaSearch, FaKey, FaTruck } from "react-icons/fa";

const Shows = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    // var instance = axios.create({
    //   baseURL: "http://localhost:5000/",
    //   timeout: 1000,
    // });
    // instance
    //   .get("/show/public")
    //   .then((res) => dispatch({ type: "SET_SHOWS", payload: res.data }))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <Jumbotron image={"/home-back.jpg"} height="60vh">
          <Zoom>
            <h1>Find Your Show</h1>
            <h2>Find Photos From Your Show...</h2>
          </Zoom>
        </Jumbotron>
        <div className="content">
          <div className="row center-xs center-sm center-md center-lg">
            <div className="col-sm-12 col-md">
              <FaSearch className="icons" />
              <h1>Click On Your Show</h1>
              <p>When you hover over your show,</p>
            </div>
            <div className="col-sm-12 col-md">
              <FaKey className="icons" />
              <h1>Enter The Password</h1>
              <p>
                This is the password you will have recieved at either the show
                or alternatively contact your school
              </p>
            </div>
            <div className="col-sm-12 col-md">
              <FaTruck className="icons" />
              <h1>Order Your Photos/Video</h1>
              <p>Images can be bought and delivered to your directly</p>
            </div>
          </div>
        </div>
        <div
          className="shows"
          style={{ display: "flex", width: "100vw", flexWrap: "wrap" }}
        >
          {/* {state.shows.map((show, index) => (
            <div style={{ width: "33.3vw" }}>
              <img
                style={{ padding: "1em" }}
                src={
                  "http://localhost:5000/static/shows/" +
                  show.picture +
                  "-med.jpg"
                }
                alt=""
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Shows;
