import React from "react";

export const Features = () => {
  return (
    <div id="features"  className="text-center">
      <div >
        <div style={{height:"80vh"}}>
         
         <div style={{paddingTop:"100px"}} className="row">
          <div className="col-xs-3">
              <img src="img/about/engagement.png"
                alt="about img"
                style={{ padding:"14px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3>Engagement</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div className="col-xs-3">
              <img src="img/about/collaboration.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3>Collaboration</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div className="col-xs-3">
              <img src="img/about/progress.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}              />
              <h3 >Progress Tracking</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div  className="col-xs-3"   >
              <img src="img/about/customize.png"
                alt="about img"
                style={{ padding:"20px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3 >Customization</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

         </div>
         

        </div>
      </div>
    </div>
  );
};
