import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{backgroundColor:"black"}}>
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
          <a style={{color:"white"}} className="navbar-brand page-scroll" href="#page-top">
            logo
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul  className="nav navbar-nav navbar-right">
            <li>
              <a style={{color:"bisque"}} href="#header" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a style={{color:"bisque"}} href="#ab" className="page-scroll">
                About
              </a>
            </li>
           
            <li>
              <a style={{color:"bisque"}} href="#team" className="page-scroll">
                Game Gallery
              </a>
            </li>
      
            <li>
              <a style={{color:"bisque"}} href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            
            <li>
              <a style={{color:"bisque"}} className="page-scroll">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
