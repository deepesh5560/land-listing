import React from "react";
import HotelCard from "./HotelCard";
import CantFind from "./CantFind";
import HotelFilter from "./hotelFilter";
import { cookies } from "next/headers";
import Pagination, { PageInfo } from "./Pagination";

interface Props {
  data: any[];
  pageInfo: PageInfo;
  searchParams: { [key: string]: string | number };
}

const HotelLeft = ({ data, pageInfo, searchParams }: Props) => {
  const authToken = cookies().get("AUTH_TOKEN")?.value;
  return (
    <div className="col-md-8">
      <h5 className="hotel_title">
        Best Hotels {!!searchParams?.location && `in ${searchParams.location}`}
      </h5>
      <HotelFilter />

      <div className="hotel_row">
        {data.map((item: any) => {
          return <HotelCard data={item.business} key={item._id} />;
        })}
      </div>

      <Pagination pageInfo={pageInfo} />

      {!authToken?.length && <CantFind />}
    </div>
  );
};

export default HotelLeft;
