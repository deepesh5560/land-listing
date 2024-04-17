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
    <div className="col-md-12">
      {/* <h5 className="hotel_title">Best Hotels in Prickly Pear Island</h5> */}
      <HotelFilter />

      <div className="hotel_row">
        {data.length?data.map((item: any) => {
          return <HotelCard data={item.business} key={item._id} id={item._id} rating={{avgRating:item.avgRating,totalRating:item.ratingCount}} />;
        }):<>
        <div className="container">
        <h1 className="text-center py-5 lg">No Records found</h1>
        </div>
        </>}
      </div>

       {data.length ? <Pagination pageInfo={pageInfo} />:<></>}

      {!authToken?.length && <CantFind />}
    </div>
  );
};

export default HotelLeft;
