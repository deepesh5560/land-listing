'use client'
import React, { useEffect, useState } from "react";
import RecentCard from "./RecentCard";
import { networkInstance } from "@/lib/network-instance";
import { useSearchParams,useRouter } from "next/navigation";

const RecentMain = () => {
  const router =useRouter()
  const searchParams = useSearchParams();
 
  const current = parseInt(searchParams.get("page") || '1');
  const catLimit = searchParams.get("limit") 
  const [list, setList] = useState<any>()
  const [totalPage, settotalPage] = useState<any>()
  useEffect(() => {
    getTopRated(current)
  }, [current])
  
const getTopRated = async (limit:number)=>{
  limit = limit*3
  const { data, error, success } = await networkInstance(
    "GET",
    `home/top-businesses?limit=${limit}&page=1`
  );
  settotalPage(data.meta.total_pages)
  setList(data)
  if(!success){
    
  }else{
  }
}


const loadMore = () =>{
  // const query = catLimit? `/?limit=${catLimit}&page=${current+1}`:`/?page=${current+1}`
  router.push(`top-rated/?page=${current+1}`)
}
  return (
    <section className="recent_activity">
      {list?.data.length && <div className="container px-0">
        <h3 style={{marginTop:"32px"}}>Top Rated Business</h3>
        <div className="row">
          {
            list?.data?.map((item:any)=>{
              return <div className="pb-3 col-md-4" key={item?._id}> <RecentCard item={item} /></div> 

            })
          }
          

        {totalPage !== 1 && list?.data > 3 ?  <div className="py-3 col-12 text-center">
            <button className="load_more" onClick={()=> loadMore()}>Load More</button>
          </div>:""}
        </div>
      </div>}
    </section>
  );
};

export default RecentMain;
