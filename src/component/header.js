import React from "react";
import { Link } from "react-router-dom";
import pdfile from "../images/bilalcv.pdf";

export default function header() {
  document.title = "Bilal Portfolio ";
  return (
    <div>
      <div className="nav_sec">

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {" "}
              <span> B </span> - Folio{" "}
            </Link>{" "}
            <button className="navbar-toggler" type="button">
              {" "}
              <span className="navbar-toggler-icon"> </span>{" "}
            </button>{" "}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    {" "}
                    Home{" "}
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    {" "}
                    About{" "}
                  </Link>{" "}
                </li>

                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/Blog">
                    {" "}
                    Blog{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/Portfolio">
                    {" "}
                    Portfolio{" "}
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/Contact">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li className="nav-item download_cv">
                  {" "}
                  <a className="nav-link" href={pdfile} download>
                    {" "}
                    Resume <i className="fal fa-download"> </i>
                  </a>{" "}
                </li>
              </ul>{" "}
            </div>{" "}
          </div>
        </nav>{" "}
      </div>
    </div>
  );
}
