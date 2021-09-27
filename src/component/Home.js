import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <div className="home__sec">
        <h3> Welcome </h3>{" "}
        <h2 className="typing">
          {" "}
          I 'm <span>Bilal</span> Rizwaan
        </h2>{" "}
        <Link to="/about"> UI & UX Front - End - Developer </Link>
      </div>{" "}
    </div>
  );
}
