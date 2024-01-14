"use client";

import React from "react";
import { useRouter } from "next/navigation";

const HotelCard = () => {
  const Router = useRouter();
  return (
    <div className="hotel_card" onClick={() => Router.push("/productList/1")}>
      <div className="img_crousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/slider1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slider1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/slider1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="hotel_right_details">
        <h5 className="hotel_name">Hotel Staywell</h5>
        <div className="start_rating">
          <img src="images/star.png" alt="" />
          <span>319 rating</span>
        </div>
        <span className="verified_label">
          <img src="images/verfied_label.png" alt="" />
          verified
        </span>
        <p className="location_hotel">
          <img className="me-3" src="images/location.png" alt="" />
          Prickly Pear Island
        </p>
        <div className="btn_connecting">
          <button className="btn_number">
            <img className="me-2" src="images/phn.png" alt="" />
            Show Number
          </button>
          <button className="btn_chat">
            <img className="me-2" src="images/logos_whatsapp-icon.png" alt="" />
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
