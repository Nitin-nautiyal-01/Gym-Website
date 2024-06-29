import React from "react";
import { plansData } from "../data/plansData";
import white from "../Images/whiteTick.png"
import "./Plans.css";
export default function Plans() {
  return (
    <div className="plans-container" id="Plans">
      <div className="blur plans-blurs1"></div>
      <div className="blur plans-blurs2"></div>
      
      <div className="program-headers" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={white} />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>


            <div>
                <span>See more benefits </span>
                </div>
                <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
