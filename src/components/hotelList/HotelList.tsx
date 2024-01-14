import React from "react";
import HotelLeft from "./HotelLeft";
import HotelRight from "./HotelRight";

const HotelList = () => {
  return (
    <section className="best_hotel_section">
      <div className="container">
        <div className="row">
          <HotelLeft />
          <HotelRight />
        </div>
      </div>
    </section>
  );
};

export default HotelList;
