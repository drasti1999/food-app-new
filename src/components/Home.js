import React from "react";

export default function Home() {
  return (
    <div className="home text-white" style={{ paddingBottom: "25%" }}>
      {/* <nav className="position-absolute navbar navbar-expand-lg bg-transparent navbar-dark fixed-top"> */}
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark fixed-top">
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row row-cols-12 g-0">
          <div className="col-11 ps-5 pt-5 mt-5">
            <h1 className="text-center h1 fw-bolder display-1">
              Healthy Food <br />
              Restaurant
            </h1>
            <h4 className="text-center fw-light h4 mt-4">
              Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit.
            </h4>
          </div>
          {/* <div className="col-1 dots"></div> */}
        </div>
      </div>
    </div>
  );
}
