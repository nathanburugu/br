/** @format */

import React from 'react';
import './mailList.css';

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Join our mailing list</h1>
      <span className="mailDescription">
        Sign Up and we'll send you the best deals and offers
      </span>
      <div className="mailInputContainer">
        <input type="text" name="email" id="" placeholder="Your Email" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
