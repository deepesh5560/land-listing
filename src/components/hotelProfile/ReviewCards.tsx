import React from "react";

const ReviewCards = () => {
  return (
    <div className="user_review_card">
      <div className="card_head">
        <div className="profile_img_name">
          <img src="/images/user.png" alt="" />
          <div className="name_star">
            <span>Name</span>
            <img src="/images/star.png" alt="" />
          </div>
        </div>
        <span className="date">1 April 2022</span>
      </div>
      <div className="card_text">
        <p>
          Fantasia Oasis Hotel exceeded all expectations! From the luxurious
          room to the exquisite dining and magical entertainment, every moment
          was enchanting. Attentive staff and a dreamlike pool area made this
          stay truly unforgettable. Highly recommend for a magical escape!
        </p>
      </div>
    </div>
  );
};

export default ReviewCards;
