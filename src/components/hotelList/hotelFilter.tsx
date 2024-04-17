"use client";
import React, { ChangeEventHandler } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const HotelFilter = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [isVerified, rating] = searchParams?.getAll("isVerified");

  const onVerifiedSelect = () => {
    const params = new URLSearchParams(searchParams);
    params.set("isVerified", isVerified ? "" : "true");
    replace(`${pathName}?${params.toString()}`);
  };

  const onRatingSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("rating", val);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <div className="hotel_filter">
        <div className="left_filter">
          <button
            className={
              isVerified === "true" ? `btn_not_verfied` : `btn_verfied`
            }
            onClick={() => onVerifiedSelect()}
          >
            {!isVerified && <img src="images/mdi_verified-user.png" alt="" />}
            Verified
          </button>
          <div className="dropdown">
            {/* <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rating
            </button> */}
            <select
              value={rating}
              onChange={onRatingSelect}
              className="rating-option"
            >
              <option value={""} className="rating-option">
                Rating
              </option>
              <option value={"1"} className="rating-option">
                1
              </option>
              <option value={"2"} className="rating-option">
                2
              </option>
              <option value={"3"} className="rating-option">
                3
              </option>
              <option value={"4"} className="rating-option">
                4
              </option>
              <option value={"5"} className="rating-option">
                5
              </option>
            </select>
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
            {/* <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="images/mi_filter.png" alt="" /> All Filter
            </button> */}
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
    </>
  );
};

export default HotelFilter;
