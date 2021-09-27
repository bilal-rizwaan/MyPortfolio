import React from "react";
import aboutImg from "../images/person.jpg";
import pdfile from "../images/bilalcv.pdf";

export default function About() {
  return (
    <div>
      <div className="about_me">
        <div className="container">
          <div className="txt_pf">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <div className="about_img">
                  <img src={aboutImg} alt="About Me" className="img-fluid" />
                </div>{" "}
              </div>{" "}
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <div className="about_txt">
                  <h2> Bilal Muhammad Rizwaan </h2>{" "}
                  <h4> UI / UX & Front End Developer </h4>{" "}
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form but the majority have suffered alteration in some{" "}
                  </p>{" "}
                  <ul>
                    <li>
                      {" "}
                      <span> From: </span> Karachi, PK
                    </li>
                    <li>
                      {" "}
                      <span> Lives In: </span> Karachi, PK
                    </li>
                    <li>
                      {" "}
                      <span> Age: </span> 23
                    </li>
                    <li>
                      {" "}
                      <span> Gender </span> Male
                    </li>
                  </ul>{" "}
                  <a href={pdfile} download>
                    {" "}
                    Download CV{" "}
                  </a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
