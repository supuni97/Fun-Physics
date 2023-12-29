import React from "react";

export const Features = () => {
  return (
    <div id="features" style={{backgroundColor:"black"}} className="text-center">
      <div >
        <div className="col-md-10 col-md-offset-1 section-titl">
         
         <div className="row">
          <div className="col-xs-3"  style={{color:'white'}}>
              <img src="img/about/engagement.png"
                alt="about img"
                style={{ padding:"14px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3 style={{color:'white'}}>Engagement</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div className="col-xs-3"  style={{color:'white'}}>
              <img src="img/about/collaboration.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3 style={{color:'white'}}>Collaboration</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div className="col-xs-3" style={{color:'white'}}>
              <img src="img/about/progress.png"
                alt="about img"
                style={{padding:"10px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}              />
              <h3 style={{color:'white'}}>Progress Tracking</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

            <div  className="col-xs-3"  style={{color:'white',marginBottom:"100px"}}>
              <img src="img/about/customize.png"
                alt="about img"
                style={{ padding:"20px",borderRadius:"0px",width: "100px", marginBottom: "2px" }}
              />
              <h3 style={{color:"white"}}>Customization</h3>
              <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
            </div>

         </div>
         

        </div>
      </div>
    </div>
  );
};
