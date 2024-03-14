import { ReviewItem } from "@/models/business";
import { format } from "date-fns";
import React from "react";

const ReviewCards = ({ review }: { review: ReviewItem }) => {
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
        <span className="date">
          {format(new Date(review.updatedAt), "dd MMM yyyy")}
        </span>
      </div>
      <div className="card_text">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCards;
