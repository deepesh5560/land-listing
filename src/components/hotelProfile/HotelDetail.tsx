'use client'

import { BusinessItem, ReviewItem } from "@/models/business";
import React from "react";
import Contact from "../hotelList/contact";
import Image from "next/image";
import FilledStar from "../../../public//images/filled-star.svg";
import Star from "../../../public/images/star.svg";
import { useRouter } from "next/navigation";

const HotelDetail = ({
  data,
}: {
  data: { business: any; reviews: ReviewItem[],avgRating:number };
}) => {
  const business: BusinessItem = data.business.business;

  const Router = useRouter()
  const address = [
    business?.buildingNo,
    business?.address,
    business?.area,
    business?.landmark,
    business?.island,
    business?.country,
  ].join(", ");
  
  const star:number[] =[];
  const Review = data?.reviews
  const maxRate = Math.ceil(data.avgRating)
  for (let index = 0; index < 5; index++) {
    if (index <= (maxRate - 1) ) {
      star.push(1)
    }else{
      star.push(0)
    }
  }


  return (
    <>
      <section className="about_hotel_block">
        <div className="container">
          <div className="about_hotel">
            <div className="left_details">
              <div className="">
                <h5 className="hotel_name">{business?.businessName}</h5>
                <div className="start_rating">
                
      
                {
              star && star.map((num,i) => {
                return (
                  <Image
                    src={num === 1 ? FilledStar : Star}
                    height={15}
                   
                    alt="Rating Star"
                    style={{ marginRight: "2px" }}
                    
                    key={i}
                  />
                );
              })
            }
                  <span>{Review?.length}</span>

    
                </div>
                {business?.isVerified && (
                  <span className="verified_label">
                    <img src="/images/verfied_label.png" alt="" />
                    verified
                  </span>
                )}
                <p className="location_hotel">
                  <img className="me-3" src="/images/location.png" alt="" />
                  {address}
                </p>
                <div className="btn_connecting" >
                  <Contact contact={business?.contacts?.[0]} />
                  <button className="btn_chat" onClick={()=>Router.push(`https://wa.me/${business?.contacts?.[0].contact}`)}>
                    <img
                      className="me-2"
                      src="/images/logos_whatsapp-icon.png"
                      alt=""
                      
                    />
                    Chat
                  </button>
                  <button className="btn_share btn_c">
                    <img className="me-2" src="/images/mdi_share.png" alt="" />
                    Share
                  </button>
                  <button className="btn_rate btn_c">
                    <img className="me-2" src="/images/like.png" alt="" />
                    Tap to Rate
                  </button>
                </div>
              </div>
            </div>
            <div className="right_star">
              <span className="star">{maxRate} Star</span>
              <span className="hotel">Hotel</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetail;
