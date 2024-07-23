import React from "react";


export function Gallery(props) {
  return (
    <div id="team" style={{backgroundColor:"bisque"}} className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 >Game Gallery</h2>
        </div>
        <div id="row">
          <div>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-3" >
                  <div className="thumbnail" style={{ backgroundColor: "black", padding: "10px" }}>
                    {" "}
                    <img src={d.img} alt="..." className="team-img" style={{ height: "120px" }} />
                    <div className="caption" style={{ color: "beige" }}>
                      <h4 style={{ color:"bisque" }}>{d.name}</h4>
                      
                    </div>
                    <a
                      className="btn"
                      style={{
                  background: 'linear-gradient(to left, #ff5733, #ffcc33)', // Gradient from orange to yellow
                  color: '#ffffff', // Text color
                  padding: '5px 40px',
                  marginBottom:"10px"
                  ,borderRadius:"40px"
                }}
              
                    >play </a>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
}
