import React from "react";

export const Features = () => {
  return (
    <div id="features"  className="text-center">
      <div >
        <div style={{height:"80vh"}}>
        <h2 style={{
            color: "brown",
            fontFamily: 'Arial, sans-serif',
            fontSize: '28px',
            fontWeight: 'bold',
            paddingTop:'10px'
          }}>Features</h2>
         <div style={{paddingTop:"10px"}} className="row">
          <div className="col-xs-3">
              <img src="img/about/engagement.png"
                alt="about img"
                style={{ padding:"14px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3>Engagement</h3>
              <p>The platform offers a variety of interactive and educational physics games designed to engage students in learning. By using multimedia, text, and images, the system makes learning physics enjoyable and captivating, encouraging students to explore and understand complex concepts through play.</p>
            </div>

            <div className="col-xs-3">
              <img src="img/about/collaboration.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3>Collaboration</h3>
              <p>Teachers and educational experts can collaborate on the platform to contribute to the development of learning content and physics games. This collaborative environment ensures that the educational materials are comprehensive, up-to-date, and tailored to meet the diverse needs of students.</p>
            </div>

            <div className="col-xs-3">
              <img src="img/about/progress.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}              />
              <h3 >Progress Tracking</h3>
              <p>tudents and teachers can monitor individual learning progress with detailed tracking of scores, completed activities, and achievements. This feature allows users to identify strengths and areas for improvement, fostering a personalized learning experience that promotes continuous growth and development.</p>
            </div>

            <div  className="col-xs-3"   >
              <img src="img/about/customize.png"
                alt="about img"
                style={{ padding:"20px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3 >Customization</h3>
              <p>The platform allows students to personalize their learning journey by selecting preferred topics, difficulty levels, and learning styles. This customization ensures that each student can learn at their own pace and in a way that suits their individual needs, making the educational experience more effective and enjoyable.</p>
            </div>

         </div>
         

        </div>
      </div>
    </div>
  );
};
