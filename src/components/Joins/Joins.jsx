import React, { useRef } from 'react';
import './Joins.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1hlqrn', 'template_qtmnfcg', form.current, 'IeEdhvZXTWCJxp1CO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Join' id="join-us">
      <div className='left-j'>
        <hr />
        <div>
          <span>Ready TO </span>
          <span className='stroke-text'>Level Up</span>
        </div>

        <div>
          <span>Your Body </span>
          <span className='stroke-text'>With us</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter your Email Address" />
          <button className='btn btn-j'> Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
