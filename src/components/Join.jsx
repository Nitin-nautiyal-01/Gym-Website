import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'
export default function Join() {
    const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ztmq0hl', 'template_zcojcya', form.current, {
        publicKey: 'GA-XNA6hDlbUz634q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr/>
        <div>
            <span className="stroke-text">READY TO</span>
            <span> LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type='text' name='user_email'placeholder="Enter Your Email address"/>
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
