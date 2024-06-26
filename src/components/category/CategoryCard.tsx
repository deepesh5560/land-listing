"use client";

import React from "react";
import { CategoryItem } from "./CategoryLeft";
import Link from "next/link";


const CategoryCard = ({ detail }: { detail: CategoryItem }) => {
  const pic =
    process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
    "/" +
    detail.icon;

   
   
  return (
    <Link
      href={`/productList?category=` + detail._id}
      className="category_card items-center"
    >
      <img alt="" height={60} className="card_icon" src={ detail.icon?pic :"images/hotel.png"} />
      <h5 className="cart-title-text" style={{overflowWrap:"break-word",width:"100px"}}>{detail.title}</h5>
    </Link>
  );
};

export default CategoryCard;
