"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryItem } from "./CategoryLeft";
import Link from "next/link";

const CategoryCard = ({ detail }: { detail: CategoryItem }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const path = `${"productList"}?${params.toString()}`;

  return (
    <Link
      href={`/productList?categoryId=` + detail._id}
      className="category_card"
      // onClick={() => Route.push("/productList?categoryId=" + detail._id)}
    >
      <img className="card_icon" src="images/hotel.png" />
      <h5 className="card_title">{detail.title}</h5>
    </Link>
  );
};

export default CategoryCard;
