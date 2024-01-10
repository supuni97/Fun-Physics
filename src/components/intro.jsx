import React from "react";

export const Intro = (props) => {
  return (
    <div id="intro" style={{ backgroundColor: "white" }} className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
        </div>
        <div>
          <div className="columns">
            <div className="col-xs-3 col-md-4">
              <img
                src="img/why.jpg"
                alt="Logo"
                className="img-responsive"
                style={{
                  borderRadius: "50%",
                  height: "30vh",
                  marginBottom: "100px",
                }}
              />
            </div>
            <div className="col-xs-8 col-md-8">
              <h2
                style={{
                  color: "#F39C5F", // Font color (replace with your preferred color code)
                  fontSize: "28px", // Font size (replace with your preferred size)
                  fontWeight: "bold",
                }}
              >
                Why Fun Physics
              </h2>
              <p
                style={{
                  color: "black", // Font color (replace with your preferred color code)
                  fontSize: "18px", // Font size (replace with your preferred size)
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#ab"
                style={{
                  background: "linear-gradient(to left, #ff5733, #ffcc33)", // Gradient from orange to yellow
                  color: "#ffffff", // Text color
                  padding: "10px 20px",
                  marginBottom: "30px",
                }}
                className="btn btn-custom btn-lg page-scroll"
              >
                Read More
              </a>{" "}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
