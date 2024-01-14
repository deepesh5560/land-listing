import React from "react";
import PopularSearchCard from "./PopularSearchCard";
const PopularMain = () => {
  return (
    <section className="popular_search">
      <div className="container">
        <h3>Popular Search</h3>
        <div className="row">
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
          <PopularSearchCard />
        </div>
      </div>
    </section>
  );
};

export default PopularMain;
