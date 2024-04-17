import React from "react";
import HotelCard from "./HotelCard";
import CantFind from "./CantFind";
import { BusinessItem } from "@/models/business";
import HotelFilter from "./hotelFilter";
import { cookies } from "next/headers";
import Pagination, { PageInfo } from "./Pagination";

const HotelLeft = ({ data, pageInfo }: { data: any[]; pageInfo: PageInfo }) => {
  const authToken = cookies().get("AUTH_TOKEN")?.value;
  return (
    <div className="col-md-8">
      {/* <h5 className="hotel_title">Best Hotels in Prickly Pear Island</h5> */}
      <HotelFilter />

      <div className="hotel_row">
        {data.length?data.map((item: any) => {
          return <HotelCard data={item.business} key={item._id} id={item._id} rating={{avgRating:item.avgRating,totalRating:item.ratingCount}} />;
        }):<h1>No Business Found</h1>}
      </div>

      <Pagination pageInfo={pageInfo} />

      {!authToken?.length && <CantFind />}
    </div>
  );
};

export default HotelLeft;
