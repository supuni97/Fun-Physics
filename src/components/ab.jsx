import React, { useState } from "react";

export const Ab = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleToggleClick = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div id="ab" style={{ backgroundColor: "bisque" }} className="text-center">
      <div className="container">
        <div>
          <h2 style={{
            color: "brown",
            fontFamily: 'Arial, sans-serif',
            fontSize: '28px',
            fontWeight: 'bold',
            paddingTop:'5px'
          }}>Little More About Us</h2>
          <img
              src="img/about/aboutUs.jpg"
              alt="Logo"
              style={{ borderRadius: "50%",height:"300px", marginBottom: "5px",marginTop:"20px" }}
            />
        </div>
        
        <div className="columns">
          <div className>
            <h2 style={{
              color: "#F39C5F",
              fontSize: '28px',
              fontWeight: 'bold'
            }}>Unlock the Power of Playful Learning: Dive into a World of Physics Adventures with Fun Physics, Where Learning Meets Fun</h2>
<p style={{ color: "black", fontSize: '16px', marginBottom: "30px",fontWeight:"bold" }}>
                Fun Physics, an innovative hub where education is redefined. Our platform empowers students with cutting-edge technology, engaging content, and personalized feedback, creating a holistic learning experience.
                </p>
            {/* Display the paragraph conditionally */}
            {showParagraph && (
              <>
                <p style={{ color: "black", fontSize: '16px', marginBottom: "30px",fontWeight:"bold" }}>
                From interactive games to advanced analytics for teachers, we revolutionize education delivery.
                At Fun Physics, our passionate team of educators and developers is dedicated to shaping the future of education through collaboration, creativity, and a relentless pursuit of excellence. Join us in exploring a world of transformative educational possibilities, where curiosity meets knowledge, and boundaries of excellence are redefined.
                </p>
              </>
            )}
            
            <button
              style={{
                background: 'linear-gradient(to left, #ff5733, #ffcc33)',
                color: '#ffffff',
                padding: '10px 20px',
                marginBottom: "30px" // Fixed marginBottom for the button
              }}
              className="btn btn-custom btn-lg page-scroll"
              onClick={handleToggleClick}
            >
              {showParagraph ? "Read Less" : "Read More"}
            </button>{" "}
          </div>
          
        </div>
      </div>
    </div>
  );
};
