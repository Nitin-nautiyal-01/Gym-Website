import React from "react";
import "./Reasons.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import nb from "../Images/nb.png";
import adidas from '../Images/adidas.png';
import nike from "../Images/nike.png";
import tick from "../Images/tick.png";
export default function Reasons() {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-R">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </div>

      <div className="right-R">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>

        <div className="deatils-R">

        <div>
          <img src={tick} alt=""></img>
          <span>OVER 140+ EXPERT COACHES</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>RELIABLE PARTNERS</span>
        </div>
        </div>
        <span style={{
          color:"var(--gray)",
          fontWeight: "normal",
        }}>
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
}
