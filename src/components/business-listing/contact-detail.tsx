"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { countryList } from "@/lib/location";



const mobileRegex = /^\d{0,10}$/;

const initialData :any = {
  contactPerson: "",
  gender: "Mr.",
  mobileNumber: "",
  countryCode: "+93",
  email: "",
};

const ContactDetail = ({ onNext,setIsloading }: { onNext: () => void ,setIsloading:any}) => {
  const [detail, setDetail] = useState(initialData);

  const onTextChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "mobileNumber" && !mobileRegex.test(value)) {
      return;
    }

    setDetail({ ...detail, [name]: value });
  };

  const onSubmit = async (e: any) => {
 
    for ( let item in detail ) {
      if ( detail[item] === "" ) {
        toast.error("Please fill all the fields");
        return;
      }
      
    }
    if (detail.mobileNumber.length !== 10) {
      toast.error("10 digit mobile number required");
      return;
    }
    const payload = {
      contactPersion: detail.contactPerson,
      gender: detail.gender === "Mr." ? "Male" : "Female",
      contacts: {
        countryCode: detail.countryCode,
        contact: detail.mobileNumber,
      },
      email: detail.email,
    };
    setIsloading(true)
    const { data, error, success } = await networkInstance(
      "POST",
      "businesses/contactDetails",
      payload
    );
    setIsloading(false)
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
            <div className="steps step_1 stp3 pb-3">
              <img className="step_img" src="images/step1.png" alt="" />
              <h3 className="h3_title">Add contact Details</h3>
              <div className="custom_form">
                <div className="row_form">
                  {/* <div className="small_input select_custom">
                    <label>Title</label>

                    <select name="gender" value={detail.gender}>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                  </div> */}
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      name="contactPerson"
                      value={detail.contactPerson}
                      onChange={onTextChange}
                    />
                    <label className="form-label" style={{ marginLeft: 0 }}>
                      Contact Person
                    </label>
                  </div>
                </div>
                <div className="row_form row_3">
                  <div className="small_input">
                    <select
                      name="countryCode"
                      value={detail.countryCode}
                      onChange={onTextChange}
                    >
                      {countryList.map((item, index) => {
                        return (
                          <option value={item.dial_code} key={index} className="">
                            <p>{item.code + " " + item.dial_code}</p>
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      value={detail.mobileNumber}
                      onChange={onTextChange}
                    />
                    <label className="form-label" style={{ marginLeft: 0 }}>
                      Contact number
                    </label>
                  </div>
                </div>
                {/* <span className="add_number">+Add another number</span> */}
                <div className="form-outline">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={detail.email}
                    onChange={onTextChange}
                  />
                  <label className="form-label" style={{ marginLeft: 0 }}>
                    Email
                  </label>
                </div>
                <div className="btn_form">
                  <button onClick={onSubmit}>Save & Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetail;
