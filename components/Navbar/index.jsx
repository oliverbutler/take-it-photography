import React from "react";
// import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = (props) => {
  const [size, setSize] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", getWindowHeight);
    return () => {
      window.removeEventListener("scroll", getWindowHeight);
    };
  }, []);

  function getWindowHeight() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 100;

    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    if (distanceY > shrinkOn) {
      setSize("smaller");
    } else {
      setSize("");
    }
  }

  return (
    <nav className={"nav " + size}>
      <Link href="/">
        <img src={"logo.png"} alt="Take it Photography Logo" />
      </Link>
      <div>
        <Link href="/about">About</Link>
        <Link href="/shows">Shows</Link>
        <Link href="/contact">Contact</Link>
        {/* <Link href="/profile">
          <FaUserCircle />
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
