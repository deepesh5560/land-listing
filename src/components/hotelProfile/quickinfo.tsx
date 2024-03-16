export const dynamic = "force-dynamic";

import React from "react";
import ReviewCards from "./ReviewCards";
import { BusinessItem, ReviewItem } from "@/models/business";
import ReviewInput from "./ReviewInput";
import { cookies } from "next/headers";

const Quickinfo = ({
  data,
}: {
  data: { business: any; reviews: ReviewItem[] };
}) => {
  const authToken = cookies().get("AUTH_TOKEN")?.value;

  const business: BusinessItem = data.business.business;

  const reviews = data.reviews;

  const address = [
    business.buildingNo,
    business.address,
    business.area,
    business.landmark,
    business.island,
    business.country,
  ].join(", ");

  return (
    <section className="information_block">
      <div className="container">
        <div className="row">
          <div className="col-md-9 left">
            <div className="quick_information">
              <h5>Quick Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <span>Mode of Payment</span>
                  <p>Cash/online</p>
                </div>
                <div className="col-md-6">
                  <span>Year of Establishment</span>
                  <p>2021</p>
                </div>
              </div>
            </div>

            <div className="facilities_timing_complimentary">
              <div className="row">
                <div className="col-md-5">
                  <h5>Facilities</h5>
                  {business.facilities.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
                <div className="col-md-3">
                  <h5>Timing</h5>
                  {business.workingTime.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                  {/* <p>Check In-12:00 PM</p>
                  <p>Check Out-11:00 AM</p> */}
                </div>
                <div className="col-md-4 text-right">
                  <h5>Complimentary</h5>
                  <p>Complimentary Breakfast</p>
                </div>
              </div>
              <div className="view_all">
                <button>View All</button>
              </div>
            </div>

            <div className="photos_block">
              <h4 className="h4_title">Photos</h4>
            </div>

            <div className="review_block pt-4">
              {!!authToken?.length && (
                <>
                  <h4 className="h4_title pb-4">Reviews & Ratings</h4>
                  <ReviewInput businessId={business._id} />
                </>
              )}

              <h4 className="h4_title py-4">User Review</h4>

              <div className="user_review_block">
                {reviews.map((item) => {
                  return <ReviewCards review={item} key={item._id} />;
                })}
              </div>
            </div>
          </div>
          <div className="col-md-3 right">
            <div className="hotel_address">
              <div className="site_name">
                <span>www.hotelstaywell.com </span>
                <a href="#" className="copy_here">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M18.1818 11.4091H20V20.5H0V0.5H9.09091V2.31818H1.81818V18.6818H18.1818V11.4091ZM20 0.5V9.59091H18.1818V3.6108L9.73011 12.0483L8.4517 10.7699L16.8892 2.31818H10.9091V0.5H20Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
              <div className="get_direction">
                <div className="left">
                  <a href="#">
                    <img src="/images/mdi_location.png" alt="" />
                    Get Direction
                  </a>
                  <span>{address}</span>
                </div>
                <div className="right">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.298 0.984986L19.015 7.70299C19.6245 8.31247 19.9668 9.13908 19.9668 10.001C19.9668 10.8629 19.6245 11.6895 19.015 12.299L12.298 19.016C11.6885 19.6254 10.8619 19.9678 10 19.9678C9.13813 19.9678 8.31152 19.6254 7.70203 19.016L0.984032 12.3C0.374599 11.6905 0.0322266 10.8639 0.0322266 10.002C0.0322266 9.14008 0.374599 8.31347 0.984032 7.70399L7.70203 0.985986C8.31152 0.376552 9.13813 0.0341797 10 0.0341797C10.8619 0.0341797 11.6885 0.376552 12.298 0.985986M11.591 5.22199L11.507 5.14899C11.3795 5.05457 11.2253 5.00302 11.0667 5.00176C10.908 5.0005 10.753 5.0496 10.624 5.14199L10.53 5.22199L10.458 5.30599C10.3635 5.4334 10.3117 5.58752 10.3103 5.74618C10.3089 5.90485 10.3578 6.05988 10.45 6.18899L10.53 6.28299L11.249 7.00099H9.74903L9.58203 7.00699C8.9131 7.04779 8.28209 7.33146 7.80757 7.8047C7.33304 8.27794 7.04766 8.90817 7.00503 9.57699L7.00003 9.75199V13L7.00703 13.101C7.03173 13.2805 7.12059 13.445 7.25717 13.5641C7.39375 13.6832 7.56883 13.7488 7.75003 13.7488C7.93124 13.7488 8.10631 13.6832 8.2429 13.5641C8.37948 13.445 8.46833 13.2805 8.49303 13.101L8.50003 13V9.74999L8.50603 9.62199C8.53535 9.336 8.66235 9.06886 8.86563 8.86558C9.06891 8.6623 9.33605 8.5353 9.62203 8.50599L9.75003 8.49999H11.25L10.53 9.21999L10.458 9.30399C10.3504 9.44838 10.2983 9.62669 10.3112 9.80634C10.3242 9.98598 10.4014 10.155 10.5287 10.2824C10.656 10.4098 10.8249 10.4871 11.0045 10.5003C11.1842 10.5134 11.3625 10.4615 11.507 10.354L11.591 10.281L13.591 8.28099L13.663 8.19699C13.7576 8.06957 13.8093 7.91545 13.8108 7.75679C13.8122 7.59812 13.7633 7.44309 13.671 7.31399L13.591 7.21999L11.591 5.22199Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="suggest_an_edit ">
                <button>
                  <img src="/images/edit.png" alt="" />
                  suggest an edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quickinfo;
