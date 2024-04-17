"use client";

import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Contact = ({ contact}: { contact: any }) => {
  const [num, setnum] = useState<any>()

 
  return (
    <>
   <div onMouseEnter={()=>setnum(true)} onMouseLeave={()=>setnum(false)}>

      <a className={`btn_number contact-anchor`}>
        <img className="me-2" src="images/phn.png" alt="" />
        {num && contact?.contact?(contact?.countryCode|| '') + " " +( contact?.contact || ''):"Show Number"}
         
      </a>
   </div>
    </>
  );
};

export default Contact;
