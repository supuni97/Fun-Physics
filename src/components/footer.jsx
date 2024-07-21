import React from "react";

export const Footer = () => {

  return (
    <div id="contact">
      <div className="container">
        <div className="contact-info text-center">
          <div className="contact-item">
            <h3>Contact Info</h3>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Address:
              </span>{" "}
              No 133A, Main Street, Kandy, Sri Lanka
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone:
              </span>{" "}
              +(94) 719 153 533
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email:
              </span>{" "}
              contactus@funphysics.lk
            </p>
          </div>
          <div className="social">
            <ul className="list-inline">
              <li className="list-inline-item">
              
                  <i className="fa fa-facebook"></i>
                
              </li>
              <li className="list-inline-item">
                
                  <i className="fa fa-twitter"></i>
                
              </li>
              <li className="list-inline-item">
             
                  <i className="fa fa-linkedin"></i>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
