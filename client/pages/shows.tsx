import React from "react";
import Jumbotron from "../components/Jumbotron";
import Zoom from "react-reveal/Zoom";
import { FaSearch, FaKey, FaTruck } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

const shows = ({ data }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="shows">
          {data.map((show, index) => (
            <div>
              <Link href="#">
                <>
                  <img
                    src={process.env.NEXT_PUBLIC_HOST + show.thumbnail.url}
                    alt=""
                  />
                  {/* <div className="show-overlay">
                    <p>Pee pee poo poo</p>
                  </div> */}
                </>
              </Link>
              <p>{show.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default shows;

export const getStaticProps = async () => {
  // const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/shows");
  // var data = [];

  // try {
  //   data = await res.json();
  // } catch (err) {
  //   console.log("Server error");
  // }

  var instance = axios.create({
    baseURL: "http://localhost:1337",
    timeout: 1000,
  });
  var data = await instance
    .get("/shows")
    .then((res) => res.data)
    .catch(() => []);

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
