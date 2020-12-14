import React from "react";
import Image from "next/image";

const Jumbotron = (props) => {
  return (
    <header className="jumbotron" style={{ height: props.height }}>
      <Image src={props.image} alt="header" layout="fill" />
      <div>{props.children}</div>
    </header>
  );
};

export default Jumbotron;
