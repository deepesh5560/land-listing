import React from "react";

const CantFind = () => {
  return (
    <div className="can_not_find">
      <div className="text_img">
        <img src="images/online-shop.png" />
        <div className="text">
          <h4>Can’t find the business</h4>
          <p>Add businesses at Land Listing for free</p>
        </div>
      </div>
      <a href="#" className="btn_bussiness btn_login">
        Add Business
      </a>
    </div>
  );
};

export default CantFind;
