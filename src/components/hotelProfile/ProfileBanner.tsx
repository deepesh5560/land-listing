import React from "react";

const ProfileBanner = () => {
  return (
    <>
      <section className="breadcrumb_section">
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
      </section>

      <section className="gallery_images">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left pe-0">
              <img src="/images/gallery1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 right ps-0">
              <img src="/images/Image-3.jpg" className="img-fluid" alt="" />
              <img src="/images/image-2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="show_all_photos">
              <button>Show all Photos</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileBanner;
