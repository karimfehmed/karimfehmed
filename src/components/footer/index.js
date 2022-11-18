import "./style.css";
import React from "react";
import logo from "../../assets/images/logo.webp";

export default function Footersection() {
  return (
    <div className="footer">
      <div className="Main-Footer">
        <div className="Logo">
          <img src={logo} alt="logoimg" />
          <h3>Heaven Explorers Pakistan</h3>
          <b>Local And Tour Website</b>
        </div>
        <div className="Contact">
          <h5>Contact Us</h5>
          <ul>
            <li>fehmedkarim@gmail.com</li>
            <li>+923412349580</li>
            <li>
              Office#1 Hunza Plaza, Hunza, GB, <br></br> Pakistan
            </li>
          </ul>
        </div>
        <div className="socialmedia">
          <h5>Follow Us</h5>
          <div className="Icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <p>Copyright 2022 Heaven &#169; Explorers Pakistan</p>
    </div>
  );
}
