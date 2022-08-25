import React from "react";

export default function Home() {
  return (
    <div className="home text-white">
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row row-cols-12g-0">
          <div className="col-11 ps-5 py-5">
            <h1 className="text-center h1 fw-bolder">
              Healthy Food <br />
              Restaurant
            </h1>
            <h4 className="text-center fw-light h4">
              Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit.
            </h4>
          </div>
          <div className="col-1">
            <div className="dots h-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
