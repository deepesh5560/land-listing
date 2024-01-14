import React from "react";

const HotelDetail = () => {
  return (
    <>
      <section className="about_hotel_block">
        <div className="container">
          <div className="about_hotel">
            <div className="left_details">
              <div className="">
                <h5 className="hotel_name">Hotel Staywell</h5>
                <div className="start_rating">
                  <img src="/images/star.png" alt="" />
                  <span>319 rating</span>
                </div>
                <span className="verified_label">
                  <img src="/images/verfied_label.png" alt="" />
                  verified
                </span>
                <p className="location_hotel">
                  <img className="me-3" src="/images/location.png" alt="" />
                  Prickly Pear Island
                </p>
                <div className="btn_connecting">
                  <button className="btn_number">
                    <img className="me-2" src="/images/phn.png" alt="" />
                    Show Number
                  </button>
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
              <span className="day_night">3,456/night</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetail;
