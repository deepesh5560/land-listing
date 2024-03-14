import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { getCategories } from "@/app/actions";
import { networkInstance } from "@/lib/network-instance";

export interface CategoryItem {
  _id: string;
  title: string;
  icon: string;
  status: boolean;
  isDeleted: boolean;
}

const CategoryLeft = async () => {
  const { data, error, success } = await networkInstance(
    "GET",
    "home/categories"
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
        <h1 className="bg-purple-200">Search across all Caribbean Island</h1>
        <h2>Businesses</h2>
        <div className="location_based_search">
          <div className="location_div">
            <button className="btn_location">Location based Business</button>
          </div>
          <div className="search_div">
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </div>
        <div className="category_section">
          {data?.data.length &&
            data.data.map((item: CategoryItem, index: number) => {
              return <CategoryCard detail={item} key={item._id} />;
            })}

          <div className="category_card">
            <img className="card_icon" src="images/menu-bar.png" />
            <h5 className="card_title">More Category</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLeft;
