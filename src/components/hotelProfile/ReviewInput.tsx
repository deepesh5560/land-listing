"use client";
import { networkInstance } from "@/lib/network-instance";
import Image from "next/image";
import React, { useState } from "react";
import FilledStar from "../../../public/images/filled-star.svg";
import Star from "../../../public/images/star.svg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AnyCnameRecord } from "dns";

const ReviewInput = ({ businessId,setAddreview,busdata,addReview }: { businessId: string,setAddreview:React.Dispatch<React.SetStateAction<any[]>> ,busdata:any,addReview:any}) => {
  const router = useRouter();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const onSubmit = async () => {
    if(!review){
      toast.error("Add review");
      return
    }
    const { success, error, data } = await networkInstance(
      "POST",
      `home/businesses/${businessId}/reviews`,
      {
        rating: rating,
        review: review,
      }
    );
    if (!success) {
      toast.error("Please login to post a review");
      return;
    }else{
      toast.success(data?.message)
      setAddreview((prev)=>[...prev,{...data?.data}])
      setReview('')
    }
    // toast.success(data.message);
  };


  const onRatingSelect = (index: number) => {
    setRating(index);
  };

  return (
    <div>
      <div className="row pb-4">
        <div className="col-md-8">
          <div className="rating_block">
            <span className="total_rating">{busdata?.avgRating? parseFloat(busdata?.avgRating).toFixed(1) : 0}</span>
            <div className="rating_number">
              <h5>{addReview?.length || 0} Ratings</h5>
              <p>Total number of rating across the web</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="star_review">
            <h5>Start your Review</h5>
            <span
              className="star_s"
              style={{
                display: "flex",
                gap: 8,
              }}
            >
              {[...new Array(5)].map((_, index) => {
                return (
                  <Image
                    src={index < rating ? FilledStar : Star}
                    height={32}
                    width={32}
                    alt="Rating Star"
                    style={{ marginRight: "2px" }}
                    onClick={() => onRatingSelect(index + 1)}
                    key={index}
                  />
                );
              })}
              {/* <Image
                src={FilledStar}
                height={32}
                width={32}
                alt="Rating Star"
              /> */}
              {/* <img src="/images/star_2.png" alt="" /> */}
            </span>
          </div>
        </div>
      </div>
      <div className="select_custom textarea_custom">
        <label>Write your Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
        ></textarea>
        <button className="btn_sumbit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewInput;
