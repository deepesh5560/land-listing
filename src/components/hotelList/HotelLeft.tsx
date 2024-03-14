import React from "react";
import HotelCard from "./HotelCard";
import CantFind from "./CantFind";
import { BusinessItem } from "@/models/business";

const HotelLeft = ({ data }: { data: any[] }) => {
  return (
    <div className="col-md-8">
      <h5 className="hotel_title">Best Hotels in Prickly Pear Island</h5>
      <div className="hotel_filter">
        <div className="left_filter">
          <button className="btn_verfied">
            <img src="images/mdi_verified-user.png" alt="" /> Verified
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rating
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_filter">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="images/mi_filter.png" alt="" /> All Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hotel_row">
        {data.map((item: any) => {
          return <HotelCard data={item.business} key={item._id} />;
        })}
      </div>

      <div className="pagination_custom">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                ❮
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ❯
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <CantFind />
    </div>
  );
};

export default HotelLeft;
