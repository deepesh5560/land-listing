
import { networkInstance } from "@/lib/network-instance";
import React from "react";

import ProfoleMain from "@/components/hotelProfile/ProfoleMain";

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, error, success } = await networkInstance(
    "GET",
    `/home/businesses/${params.id}`
  );
  

  if (!data?.success) {
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
        <h2>{data?.message}</h2>
      </div>
    );
  }

  return (
    <>
   
   <ProfoleMain params={params} data={data}/>
     
    </>
  );
};

export default Page;
