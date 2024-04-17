'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FilledStar from "../../../public//images/filled-star.svg";
import Star from "../../../public/images/star.svg";
import Image from "next/image";

const RecentCard = ({item}:{item:any}) => {
  const Router = useRouter()
  const [star,setStar]=useState<any[]>([])
  const pic =
    process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
    "/" + (item.business.images[0] ? item.business.images[0]:'') ;
  useEffect(()=>{
    let val=[]
    for (let index = 0; index < 5 ; index++) {
      if(index <= (Math.ceil(item?.avgRating)-1)){
        val.push(1)
      }else{
        val.push(0)
    
      }
      
     }
     setStar(val)
  },[item])



  return (
    <div >
      <div className="activity_card">
        <div className="top_title">
          <span className="title">{item?.business?.businessName} </span>
          <div className="star">
            {
              star && star.map((num,i) => {
                return (
                  <Image
                    src={num === 1 ? FilledStar : Star}
                    height={20}
                   
                    alt="Rating Star"
                    style={{ marginRight: "2px" }}
                    
                    key={i}
                  />
                );
              })
            }
          </div>
        </div>
        <div className="activity_img">
          <img src={item.business.images[0]?pic:"images/activity.jpg"} style={{height:"240px"}} alt="" />
        </div>
        <div className="bottom_activity">
          <span className="btn_contact btn_login"  onClick={()=>{Router.push(`productList/${item._id}`)}}>
          View Business
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
