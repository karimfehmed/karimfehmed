import "./style.css";
import React from "react";
import Mount from "../../assets/images/pic/Images/hunza.jpg";
import SKD from "../../assets/images/pic/Images/skardu.jpg";
import Fairy from "../../assets/images/pic/Images/fairymeadows.jpg";
import Nltr from "../../assets/images/pic/Images/nalter.jpg";

export default function specialoffer() {
  return (
    <div className="special-heading">
      <h4 className="headingTop">Special Offers</h4>
      <hr className="hrheading"></hr>
      <div className="Bg-color">
        <div className="book-now">
          <div className="book-head">
            <h3>Hunza 25% OFF</h3>
            <br></br>
            <br></br>
            <b>5 Days Tour To Hunza Valley</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nunc libero, sagittis non neque id, aliquet pellentesque purus.
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
            <button>Book Now</button>
          </div>
          <div className="book-image">
            <img src={Mount} alt="Img" />
          </div>
        </div>
        <hr className="line"></hr>
        <div className="book-now">
          <div className="book-image">
            <img src={SKD} alt="Img" />
          </div>
          <div className="book-head">
            <h3>Sakrdu 30% OFF</h3>
            <br></br>
            <br></br>
            <b>3 Days Tour To Sakrdu</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nunc libero, sagittis non neque id, aliquet pellentesque purus.
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
            <button>Book Now</button>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="book-now">
          <div className="book-head">
            <h3>Fairy Meadows 40% OFF</h3>

            <b>7 Days Tour To Fairy Meadows</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nunc libero, sagittis non neque id, aliquet pellentesque purus.
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
            <button>Book Now</button>
          </div>
          <div className="book-image">
            <img src={Fairy} alt="Img" />
          </div>
        </div>
        <hr className="line"></hr>
        <div className="book-now">
          <div className="book-image">
            <img src={Nltr} alt="Img" />
          </div>
          <div className="book-head">
            <h3>Nalter Valley 70% OFF</h3>

            <b>4 Days Tour To Nalter Valley</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nunc libero, sagittis non neque id, aliquet pellentesque purus.
              Orci varius natoque penatibus et magnis dis parturient montes.
            </p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
