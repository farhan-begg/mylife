import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className="title-footer">MyLyfe</h4>
            <h1 className="list-unstyled">
              <li>Contact Us</li>
              <li>San Francisco, Ca</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          <div className="col">
            <h4 className="title-footer">More Info</h4>
            <h1 className="list-unstyled">
              <li>Habit Tracker</li>
              <li>Authentication</li>
              <li>Progress Tracker</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className="title-footer">Stuff</h4>
            <h1 className="list-unstyled">
              <li>Lorem Ipsum Information and Such</li>
              <li>More Information </li>
              <li>Lorem Ipsum</li>
            </h1>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className="title-footer">MyLyfe Inc</h4>
            <h1 className="list-unstyled">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </h1>
          </div>
        </div>
        
        
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} My Lyfe | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    </div>
 
    </div>
  );
}

export default Footer;