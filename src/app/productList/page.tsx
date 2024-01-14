import HotelList from "@/components/hotelList/HotelList";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className="breadcrumb_section">
        <div className="container">
          <nav className="--bs-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Prickly Pear island</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Hotels
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <HotelList />
    </div>
  );
};

export default Page;
