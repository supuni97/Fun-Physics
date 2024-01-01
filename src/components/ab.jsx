import React from "react";

export const Ab = (props) => {
  return (
    <div id="ab" style={{ backgroundColor: "bisque" }} className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h3 style={{
            color: "brown", // Font color (replace with your preferred color code)
            fontFamily: 'Arial, sans-serif', // Font family (replace with your preferred font)
            fontSize: '24px', // Font size (replace with your preferred size)
            fontWeight: 'bold'
          }}>Little More About Us</h3>
        </div>
        <div>

          <div className="columns">
            <div className="col-xs-8 col-md-8">

              <h2 style={{
                color: "#F39C5F", // Font color (replace with your preferred color code)
                fontSize: '28px', // Font size (replace with your preferred size)
                fontWeight: 'bold'
              }}>Unlock the Power of Playful Learning: Dive into a World of Physics Adventures with Fun Physics, Where Learning Meets Fun</h2>
              <p
                style={{
                  color: "black", // Font color (replace with your preferred color code)
                  fontSize: '18px', // Font size (replace with your preferred size)

                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a
                href="#features"
                style={{
                  background: 'linear-gradient(to left, #ff5733, #ffcc33)', // Gradient from orange to yellow
                  color: '#ffffff', // Text color
                  padding: '10px 20px',
                  marginBottom:"30px"
                }}
                className="btn btn-custom btn-lg page-scroll" 
              >
                Read More
              </a>{" "}
            </div>
            <div className="col-xs-3 col-md-4">
              <img
                src="img/about/aboutUs.jpg"
                alt="Logo"
                className="img-responsive"
                style={{ borderRadius: "50%", height: "50vh",marginBottom:"100px"}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
