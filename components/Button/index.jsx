import React from "react";
import Link from "next/link";

const Button = (props) => {
  return (
    <div>
      <button className={props.size + " custom-btn"}>
        {props.link ? (
          <Link href={props.link}>{props.children}</Link>
        ) : (
          props.children
        )}
      </button>
    </div>
  );
};

export default Button;
