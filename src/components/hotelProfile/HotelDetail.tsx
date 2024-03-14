import { BusinessItem, ReviewItem } from "@/models/business";
import React from "react";
import Contact from "../hotelList/contact";

const HotelDetail = ({
  data,
}: {
  data: { business: any; reviews: ReviewItem[] };
}) => {
  const business: BusinessItem = data.business.business;

  const address = [
    business.buildingNo,
    business.address,
    business.area,
    business.landmark,
    business.island,
    business.country,
  ].join(", ");

  return (
    <>
      <section className="about_hotel_block">
        <div className="container">
          <div className="about_hotel">
            <div className="left_details">
              <div className="">
                <h5 className="hotel_name">{business.businessName}</h5>
                <div className="start_rating">
                  <img src="/images/star.png" alt="" />
                  <span>319 rating</span>
                </div>
                {business.isVerified && (
                  <span className="verified_label">
                    <img src="/images/verfied_label.png" alt="" />
                    verified
                  </span>
                )}
                <p className="location_hotel">
                  <img className="me-3" src="/images/location.png" alt="" />
                  {address}
                </p>
                <div className="btn_connecting">
                  <Contact contact={business.contacts[0]} />
                  <button className="btn_chat">
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
                    Tap to Rate{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="right_star">
              <span className="star">4 Star</span>
              <span className="hotel">Hotel</span>
              <span className="day_night">{business.price}/night</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetail;
