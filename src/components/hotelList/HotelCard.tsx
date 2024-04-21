'use client'

import React from "react";
import { BusinessItem } from "@/models/business";
import Contact from "./contact";
import Link from "next/link";
import Image from "next/image";
import FilledStar from "../../../public//images/filled-star.svg";
import Star from "../../../public/images/star.svg";
import { Carousel } from "react-bootstrap";
import { useRouter } from "next/navigation";
import useStore from "@/store/loadingState";

const HotelCard = ({
  data,
  id,
  rating,
}: {
  data: BusinessItem;
  id: string;
  rating: { avgRating: number; totalRating: number };
}) => {
  const condition = typeof window !== "undefined";
  const logs = condition &&  localStorage.getItem('LOGGED_IN')
  const visits:any= condition &&  localStorage.getItem('Visits')
  const { count, inc } = useStore()
const Router=useRouter()
  const address = [
    data?.buildingNo,
    data?.address,
    data?.area,
    data?.landmark,
    data?.island,
    data?.country,
  ].join(", ");

  const handleClick =()=>{
    let totalVisits= JSON.parse(visits) || [];

    const isAvailable = totalVisits.includes(id);


   if(logs || isAvailable || count <5){
    Router.push(`/productList/${id}`)
   }
   
     if (!isAvailable) {
      if(totalVisits.length === 5){
        inc();
        return;
       }
      inc();
       totalVisits.push(id);
       localStorage.setItem("Visits", JSON.stringify(totalVisits));

     }
      
     }
  

  const star: number[] = [];
  const maxRate = Math.ceil(rating.totalRating);
  for (let index = 0; index < 5; index++) {
    if (index <= maxRate - 1) {
      star.push(1);
    } else {
      star.push(0);
    }
  }
  return (
    <div  key={id}>

      <div className="hotel_card" style={{cursor:"pointer"}}  onClick={()=>handleClick()}>
      <div className="img_crousel">
   
{data?.images?.length ? <Carousel>
        {data?.images?.map((imgData, i) => {
              const pic =
              process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
              "/" +
              imgData;

              return   <Carousel.Item key={i+'x'}>     
            <img
              src={pic}
              alt={`Slide ${i + 1}`}
              width={410}
              height={269}
            />
          </Carousel.Item> 
      
})}
      </Carousel>:(
            <div >
            <img
               width={410}
               height={269}
              alt="..."
              src={"images/slider1.png"}
            />
          </div>
      )}

      </div>
      <div className="hotel_right_details">
        <h5 className="hotel_name">{data.businessName}</h5>
        <div className="start_rating">
          {star &&
            star.map((num, i) => {
              return (
                <Image
                  src={num === 1 ? FilledStar : Star}
                  height={20}
                  alt="Rating Star"
                  style={{ marginRight: "2px" }}
                  key={i}
                />
              );
            })}
          <span>{rating?.totalRating} rating</span>
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
          <Contact key={id} contact={data.contacts?.[0]} />
          <button className="btn_chat">
            <img className="me-2" src="images/logos_whatsapp-icon.png" alt="" />
            Chat
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HotelCard;
