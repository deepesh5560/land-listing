import { ReviewItem } from "@/models/business";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import FilledStar from "../../../public/images/filled-star.svg";
import Star from "../../../public/images/star.svg";

const ReviewCards = ({ review }: { review: ReviewItem }) => {
  const pic =
    process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
    "/" +
    review.user.avatar;

  return (
    <div className="user_review_card">
      <div className="card_head">
        <div className="profile_img_name">
          <img src={review.user.avatar ? pic : "/images/user.png"} alt="" />
          <div className="name_star">
            <span>{review.user.name}</span>
            {[...new Array(5)].map((_, index) => {
              return (
                <Image
                  src={index < review.rating ? FilledStar : Star}
                  height={18}
                  width={18}
                  alt="Rating Star"
                  style={{ marginRight: "2px" }}
                  key={index}
                />
              );
            })}
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
