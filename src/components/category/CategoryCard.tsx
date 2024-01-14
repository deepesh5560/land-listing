"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CategoryCard = () => {
  const Route = useRouter();
  return (
    <div className="category_card" onClick={() => Route.push("/productList")}>
      <img className="card_icon" src="images/hotel.png" />
      <h5 className="card_title">Hotels</h5>
    </div>
  );
};

export default CategoryCard;
