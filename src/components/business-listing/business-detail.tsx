"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

const initialData = {
  businessName: "",
  postalCode: "",
  buildingNumber: "",
  streetName: "",
  area: "",
  landmark: "",
  country: "",
  subdivision: "",
  island: "",
};

const postalRegex = /^\d{0,10}$/;

const BusinessDetail = ({
  setCurrentSection,
}: {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}) => {
  const [detail, setDetail] = useState(initialData);

  const onTextChange = (e: any) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const onPostalCodeChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, "name", value);
    if (postalRegex.test(value)) {
      setDetail({ ...detail, [name]: value });
    }
  };

  const onSubmit = async () => {
    const payload = {
      businessName: detail.businessName,
      address: detail.streetName,
      buildingNo: detail.buildingNumber,
      area: detail.area,
      postalCode: detail.postalCode,
      landmark: detail.landmark,
      country: detail.country,
      subDivision: detail.subdivision,
      island: detail.island,
    };
    const { data, error, success } = await networkInstance(
      "POST",
      "businesses/store",
      payload
    );
    if (!success) {
      console.error(error, "error");
      toast.error(error);
      return;
    }

    setCurrentSection("congratulations");
  };

  return (
    <>
      <section className="business_details_section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h3 className="h3_title">Enter Your Business Detail</h3>
              <div className="custom_form">
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.businessName}
                    name="businessName"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Business Name
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.postalCode}
                    name="postalCode"
                    onChange={onPostalCodeChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Postal Code
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.buildingNumber}
                    name="buildingNumber"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Block Number / Building Number
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.streetName}
                    name="streetName"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Street / Colony Name
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.area}
                    name="area"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Area
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.landmark}
                    name="landmark"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Land Mark
                  </label>
                </div>
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    value={detail.country}
                    name="country"
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Country
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        value={detail.subdivision}
                        name="subdivision"
                        onChange={onTextChange}
                      />
                      <label className="form-label" style={{ marginLeft: 0 }}>
                        Sub Division
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        value={detail.island}
                        name="island"
                        onChange={onTextChange}
                      />
                      <label className="form-label" style={{ marginLeft: 0 }}>
                        Island
                      </label>
                    </div>
                  </div>
                </div>

                <div className="btn_form">
                  <button className="" onClick={onSubmit}>
                    Save & Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="business_details_img">
                <img
                  className="img-fluid"
                  src="images/bussiness_details.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessDetail;
