"use client";

import React from "react";
import { Tooltip } from "react-tooltip";

const Contact = ({ contact }: { contact: any }) => {
  return (
    <>
      <Tooltip anchorSelect=".contact-anchor" place="top">
        {contact.countryCode + " " + contact.contact}
      </Tooltip>
      <a className={`btn_number contact-anchor`}>
        <img className="me-2" src="images/phn.png" alt="" />
        Show Number
      </a>
    </>
  );
};

export default Contact;
