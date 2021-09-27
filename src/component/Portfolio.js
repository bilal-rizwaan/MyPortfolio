import React from "react";
import pt1 from "../images/pt-1.jpg";
import pt2 from "../images/pt-2.jpg";
import pt3 from "../images/pt-3.jpg";
import pt4 from "../images/pt-4.jpg";

export default function Gallery() {
  return (
    <div>
      <div className="portfolio_sec">
        <div className="container">
          <div className="portfolio_head text-center">
            <button> Portfolio </button> <h3> See my work </h3>
            <ul className="d-flex align-items-center justify-content-center text-center">
              <li>
                
                <a href="#" className="active">
                  
                  All
                </a>
              </li>
              <li>
                
                <a href="#"> Template </a>
              </li>
              <li>
                
                <a href="#"> UI / UX </a>
              </li>
              <li>
                
                <a href="#"> Graphic </a>
              </li>
            </ul>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt2} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={pt4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> Gaming Dashboard </h5>
                  <p className="card-text">
                    
                    Some quick example text to build on the card title and make
                    up the bulk of the card 's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pft_btn">
            <button className="btn btn-danger">View More </button>
          </div>
        </div>
      </div>
    </div>
  );
}
