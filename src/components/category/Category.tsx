import React from "react";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";

const Category = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | number };
}) => {
  return (
    <section className="business_section pt-5">
      <div className="container">
        <div className="row">
          <CategoryLeft searchParams={searchParams} />
          <CategoryRight />
        </div>
      </div>
    </section>
  );
};

export default Category;
