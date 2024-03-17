import React from "react";
import { BusinessItem } from "@/models/business";
import Contact from "./contact";
import Link from "next/link";
import { getImageURL } from "@/lib/helpers";
import CarouselDialog from "../dialog/carousel-dialog.tsx";

const HotelCard = ({ data }: { data: BusinessItem }) => {
  const address = [
    data?.buildingNo,
    data?.address,
    data?.area,
    data?.landmark,
    data?.island,
    data?.country,
  ].join(", ");

  const pics = getImageURL(data.images) as string[];

  return (
    <div className="hotel_card">
      <div className="img_crousel">
        <div id="carouselExampleIndicators" data-bs-ride="carousel">
          <div className="">
            <div className="carousel-item active relative">
              <img
                src={pics[0] ?? "images/slider1.png"}
                className="d-block w-100"
                alt="..."
              />
              {/* <CarouselDialog pics={pics}/> */}
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
      <Link className="hotel_right_details" href={`/productList/${data._id}`}>
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
      </Link>
    </div>
  );
};

export default HotelCard;
