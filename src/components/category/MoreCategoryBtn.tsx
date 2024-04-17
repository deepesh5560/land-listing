"use client";
import { useRouter ,useParams, useSearchParams} from "next/navigation";
import React from "react";

const MoreCategoryBtn = ({ totalCategories }: { totalCategories: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get("page") ;
  const onMore = () => {

 const query = current ? `/?limit=${totalCategories}&page=${current}`:`/?limit=${totalCategories}`;
    router.push(query);
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
