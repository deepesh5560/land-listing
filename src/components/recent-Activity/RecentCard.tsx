import React from "react";

const RecentCard = () => {
  return (
    <div className="pb-3 col-md-4">
      <div className="activity_card">
        <div className="top_title">
          <span className="title">Beauty and salon </span>
          <div className="star">
            <img src="images/star.png" alt="" />
          </div>
        </div>
        <div className="activity_img">
          <img src="images/activity.jpg" alt="" />
        </div>
        <div className="bottom_activity">
          <div className="name_img">
            <img src="images/profile.png" alt="" />
            <span>Someone wrote review</span>
          </div>
          <p className="text">
            Its best spa in caribbean area , staffs are very nice, cooperatives
            and beautyful must be visit.......❤️❤️❤️❤️❤️
          </p>
          <a className="btn_contact btn_login" href="#">
            Contact now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
