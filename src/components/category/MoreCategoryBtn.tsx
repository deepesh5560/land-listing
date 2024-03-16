"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MoreCategoryBtn = ({ totalCategories }: { totalCategories: number }) => {
  const router = useRouter();
  const onMore = () => {
    const params = new URLSearchParams();
    params.set("limit", totalCategories.toString());
    router.push(`${"/"}?${params.toString()}`);
  };

  return (
    <>
      <button className="category_card" onClick={onMore}>
        <img className="card_icon" src="images/menu-bar.png" />
        <h5 className="card_title">More Category</h5>
      </button>
    </>
  );
};

export default MoreCategoryBtn;
