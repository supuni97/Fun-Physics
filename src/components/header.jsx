import React from "react";

export const Header = () => (
  <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h2 style={{color:"#F5E4CA"}}>
                Welcome to
                <span></span>
              </h2>
              <h1  style={{color:"#F5E4CA"}}>
                Fun Physics
              </h1>
              <p style={{color:"#F5F5CA"}}><b>Ignite Your Passion For Learning</b></p>
              <a
                href="#ab"
                className="btn btn-lg page-scroll"
                style={{ background: 'linear-gradient(to right, #ff5733, #ffcc33)', // Gradient from orange to yellow
    color: '#ffffff', 
    padding: '10px 20px',
    borderRadius:"40px"}}
              >
                Learn More
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
