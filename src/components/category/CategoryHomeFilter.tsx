"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const CategoryHomeFilter = () => {
  const condition = typeof window !== "undefined";

  const [filterDetail, setFilterDetail] = useState({ name: "", location: "" });
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const Limit:any=condition&& localStorage.getItem("Limit");

  useEffect(()=>{
if(!Limit && parseInt(Limit) !=0){
  localStorage.setItem("Limit",'0');
}
  },[])
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterDetail({ ...filterDetail, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (!filterDetail.location.length && !filterDetail.name.length) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("location", filterDetail.location);
    params.set("name", filterDetail.name);
    router.push(`${"/productList"}?${params.toString()}&page=1`);
  };

  return (
    <>
      <div className="location_based_search">
        <div className="search_div">
          <input
            type="text"
            value={filterDetail.location}
            onChange={onChangeText}
            name="location"
            placeholder="Location based Business"
          />

          {/* <button className="btn_location">Location based Business</button> */}
        </div>
        <div className="search_div">
          <input
            type="text"
            value={filterDetail.name}
            onChange={onChangeText}
            name="name"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="btn_common" onClick={onSubmit}>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default CategoryHomeFilter;
