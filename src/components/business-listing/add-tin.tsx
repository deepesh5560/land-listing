"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { Dispatch, SetStateAction } from "react";

const AddTin = ({ onNext }: { onNext: () => void }) => {
  const onSubmit = async (e: any) => {
    // const { data, error, success } = await networkInstance(
    //   "POST",
    //   "businesses/category",
    //   {}
    // );

    // if (!success) {
    //   toast.error(error);
    //   return;
    // }

    if (typeof window !== "undefined") {
      localStorage.setItem("BUSINESS_LIST_ACTIVE_SECTION", "0");
    }
  };

  return (
    <>
      <section className="mult-step_section py-5">
        <div className="container">
          <div className="multi_step_wrapper">
            <div className=" row step_5 pb-3">
              <div className="col-md-6">
                <img className="step_img" src="images/step5.png" alt="" />
                <h3 className="h3_title">Add Business TIN Number</h3>
                <p className="paragraph">To get Verified </p>
                <div className="custom_form">
                  <div className="form-outline">
                    <input type="text" className="form-control" />
                    <label className="form-label" style={{ marginLeft: 0 }}>
                      Add TIN Number
                    </label>
                  </div>
                  <div className="btn_form">
                    <button className="btn_skip">Skip</button>
                    <button onClick={onSubmit}>Save & Continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTin;
