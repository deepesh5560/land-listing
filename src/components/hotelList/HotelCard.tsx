import React from "react";
import { BusinessItem } from "@/models/business";
import Contact from "./contact";
import Link from "next/link";

const HotelCard = ({ data }: { data: BusinessItem }) => {
  const address = [
    data?.buildingNo,
    data?.address,
    data?.area,
    data?.landmark,
    data?.island,
    data?.country,
  ].join(", ");

  return (
    <Link className="hotel_card" href={`/productList/${data._id}`}>
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
        <h5 className="hotel_name">{data.businessName}</h5>
        <div className="start_rating">
          <img src="images/star.png" alt="" />
          <span>319 rating</span>
        </div>

        {data.isVerified && (
          <span className="verified_label">
            <img src="images/verfied_label.png" alt="" />
            verified
          </span>
        )}
        <p className="location_hotel">
          <img className="me-3" src="images/location.png" alt="" />
          {address}
        </p>
        <div className="btn_connecting">
          <Contact contact={data.contacts[0]} />
          <button className="btn_chat">
            <img className="me-2" src="images/logos_whatsapp-icon.png" alt="" />
            Chat
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
