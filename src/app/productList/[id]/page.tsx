import HotelDetail from "@/components/hotelProfile/HotelDetail";
import ProfileBanner from "@/components/hotelProfile/ProfileBanner";
import Quickinfo from "@/components/hotelProfile/quickinfo";
import { networkInstance } from "@/lib/network-instance";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error, success } = await networkInstance(
    "GET",
    `/home/businesses/${params.id}`
  );
  

  if (!data.success) {
    return (
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>{data.message}</h2>
      </div>
    );
  }

  return (
    <>
      <ProfileBanner data={data.data} />
      <HotelDetail data={data.data} />
      <Quickinfo data={data.data} />
    </>
  );
};

export default Page;
