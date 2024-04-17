import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { networkInstance } from "@/lib/network-instance";
import CategoryHomeFilter from "./CategoryHomeFilter";
import { useParams } from "next/navigation";
import MoreCategoryBtn from "./MoreCategoryBtn";

export interface CategoryItem {
  _id: string;
  title: string;
  icon: string;
  status: boolean;
  isDeleted: boolean;
}

const CategoryLeft = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | number };
}) => {
  const { data, error, success } = await networkInstance(
    "GET",
    `home/categories?limit=${searchParams?.limit ?? 11}`
  );

  if (!success) {
    return (
      <div>
        <h2>Retry</h2>
      </div>
    );
  }

  return (
    <div className="col-md-7">
      <div className="left_block">
        <h1 className="">Search across all Caribbean Island</h1>
        <h2>Businesses</h2>

        <CategoryHomeFilter />
        <div className="category_section">
          {data?.data.length?
            [...data.data].map((item: CategoryItem) => {
              return <>{
                item?.title && <CategoryCard detail={item} key={item._id} />
              }</>;
            }):<h1>No business found</h1>}

          {data?.meta.total_records - data?.data.length >= 1 && (
            <MoreCategoryBtn totalCategories={data?.meta.total_records} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryLeft;
