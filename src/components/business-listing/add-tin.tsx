"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

const AddTin = ({ onNext }: { onNext: () => void }) => {
  const [tin, setTin] = useState("");
  const onSubmit = async () => {
    if(!tin){
      toast.error("Please enter TIN number!")
      return;
    }
    const { data, error, success } = await networkInstance(
      "POST",
      "businesses/category",
      {"tin":tin}
    );

    if (!success) {
      toast.error(error);
      return;
    }

    onNext();
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
                    <input type="text" className="form-control" onChange={(e)=>setTin(e.target.value)} />
                    <label className="form-label" style={{ marginLeft: 0 }}>
                      Add TIN Number
                    </label>
                  </div>
                  <div className="btn_form">
                    <button style={{marginRight:'10px'}} className="btn_skip" onClick={()=>onNext()}>Skip</button>
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
