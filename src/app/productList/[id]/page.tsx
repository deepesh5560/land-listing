import HotelDetail from "@/components/hotelProfile/HotelDetail";
import ProfileBanner from "@/components/hotelProfile/ProfileBanner";
import Quickinfo from "@/components/hotelProfile/quickinfo";
import React from "react";

const Page = () => {
  return (
    <>
      <ProfileBanner />
      <HotelDetail />
      <Quickinfo />
    </>
  );
};

export default Page;
