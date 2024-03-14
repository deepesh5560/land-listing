import React from "react";
import HotelLeft from "./HotelLeft";
import HotelRight from "./HotelRight";

const HotelList = ({ data }: { data: any[] }) => {
  return (
    <section className="best_hotel_section">
      <div className="container">
        <div className="row">
          <HotelLeft data={data} />
          <HotelRight />
        </div>
      </div>
    </section>
  );
};

export default HotelList;
