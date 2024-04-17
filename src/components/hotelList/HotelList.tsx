import React from "react";
import HotelLeft from "./HotelLeft";
import HotelRight from "./HotelRight";
import { PageInfo } from "./Pagination";

const HotelList = ({
  data,
  pageInfo,
  searchParams,
}: {
  data: any[];
  pageInfo: PageInfo;
  searchParams: { [key: string]: string | number };
}) => {
  return (
    <section className="best_hotel_section">
      <div className="container">
        <div className="row">
          <HotelLeft data={data} pageInfo={pageInfo} />
          {/* <HotelRight /> */}
        </div>
      </div>
    </section>
  );
};

export default HotelList;
