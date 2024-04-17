import { ReviewItem } from "@/models/business";
import React from "react";

const ProfileBanner = ({
  data,
  setisBanner
}: {
  data: { business: any; reviews: ReviewItem[] };
  setisBanner:any
}) => {
  const pics = data.business?.business?.images.map((item: string) => {
    const pic =
      process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] + "/" + item;
    return pic;
  });
  return (
    <>
      {/* <section className="breadcrumb_section">
        <div className="container">
          <nav className="--bs-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Prickly Pear island</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Hotels</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Best Hotels in Prickly Pear Island
              </li>
            </ol>
          </nav>
        </div>
      </section> */}

      <section className="gallery_images">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left pe-0">
              <img
                src={(pics && pics?.[0]) ?? "/images/gallery1.jpg"}
                className="img-fluid"
                style={{ backgroundColor: "pink" }}
                alt=""
                height={"100%"}
              />
            </div>
            <div className="col-md-6 right ps-0">
              <img
                src={pics?.[1] ?? "/images/Image-3.jpg"}
                className="img-fluid"
                alt=""
              />
              <img
                src={pics?.[2] ?? "/images/image-2.jpg"}
                className="img-fluid"
                alt=""
              />
            </div>
            {!!pics?.[3] && (
              <div className="show_all_photos">
                <button onClick={()=>setisBanner(true)}>Show all Photos</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileBanner;
