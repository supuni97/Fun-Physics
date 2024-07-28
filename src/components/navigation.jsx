import React from "react";
import Logo from '../images/Logo.jpg';

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{backgroundColor: "black", height: "60px"}}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a style={{color: "white", paddingTop: "5px"}} className="navbar-brand page-scroll" href="#page-top">
            <img src={Logo} alt="logo" style={{height: "50px", marginTop: "-15px"}} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a style={{color: "bisque"}} href="#header" className="page-scroll">
                Home
              </a>
            </li>

            <li>
              <a style={{color: "bisque"}} href="#ab" className="page-scroll">
                About
              </a>
            </li>

            <li>
              <a style={{color: "bisque"}} href="#gallery" className="page-scroll">
                Game Gallery
              </a>
            </li>

            <li>
              <a style={{color: "bisque"}} href="/feedback" className="page-scroll">
                Contact US
              </a>
            </li>

            <li>
              <a style={{color: "bisque"}} href="/login" className="page-scroll">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
