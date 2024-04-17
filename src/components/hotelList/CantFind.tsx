'use client'
import React from "react";
import { useRouter } from "next/navigation";

const CantFind = () => {
  const Router = useRouter()
  return (
    <div className="can_not_find">
      <div className="text_img">
        <img src="images/online-shop.png" />
        <div className="text">
          <h4>Can’t find the business</h4>
          <p>Add businesses at Land Listing for free</p>
        </div>
      </div>
      <div onClick={()=>Router.push('/business-listing')} className="btn_bussiness btn_login">
        Add Business
      </div>
    </div>
  );
};

export default CantFind;
