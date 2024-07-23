import React from "react";

export const Intro = () => {
  return (
    <div id="intro" style={{ backgroundColor: "white" }} className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title"></div>
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
                  marginTop: "10vh",
                }}
              />
            </div>
            <div className="col-xs-8 col-md-8">
              <h2
                style={{
                  color: "#F39C5F",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                Why Fun Physics
              </h2>
              <ul
                style={{
                  color: "black",
                  fontSize: "16px",
                  listStyleType: "disc", // Use bullets
                  textAlign: "left", // Align list to the left
                  paddingLeft: "20px",
                   // Add some left padding for better readability
                }}
              >
                <li>Engaging Learning Adventures: Fun Physics transforms education into exciting adventures, capturing students' interest through interactive games.</li>
                <li>Cutting-Edge Technology: Utilizing state-of-the-art technology, we seamlessly integrate educational content, making learning dynamic and enjoyable.</li>
                <li>Personalized Feedback: Our platform provides tailored feedback, fostering individual growth and academic success.</li>
                <li>evolutionizing Education: From interactive games to advanced analytics, we redefine traditional education, emphasizing creativity and excellence.</li>
                <li>Curiosity-Driven Learning: Fun Physics cultivates a curiosity-driven environment, inspiring both students and educators on a transformative journey toward academic excellence.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
