import React from "react";
import blog from "../images/blog.jpg";
import pt3 from "../images/pt-3.jpg";
import pt4 from "../images/pt-4.jpg";

export default function Blog() {
  return (
    <div>
      <div className="portfolio_sec">
        <div className="container">
          <div className="portfolio_head text-center">
            <button> Blog </button> <h3> Latest Post </h3>
            <ul className="d-flex align-items-center justify-content-center text-center">
              <li>
                
                <a href="#"> All </a>
              </li>
              <li>
                
                <a href="#"> Template </a>
              </li>
              <li>
                
                <a href="#" className="active">
                  
                  UI / UX
                </a>
              </li>
              <li>
                
                <a href="#"> Graphic </a>
              </li>
            </ul>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={blog} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Design </h5>
                  <p className="card-text">
                    
                    Announcing a plan for small teams
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Technology </h5>
                  <p className="card-text">
                    
                    Announcing a plan for small teams
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Business </h5>
                  <p className="card-text">
                    
                    Announcing a plan for small teams
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pft_btn">
            <button className="btn btn-danger">See All Post </button>
          </div>
        </div>
      </div>
    </div>
  );
}
