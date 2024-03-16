"use client";
import { countryList } from "@/lib/location";
import React, { Dispatch, SetStateAction, useState } from "react";

const mobileRegex = /^\d{0,10}$/;

const MobileDetail = ({
  setCurrentSection,
}: {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState(countryList[0].dial_code);

  const onSubmit = async (e: any) => {
    if (!mobileNumber.length) {
      return;
    }
    const payload: any = {
      countryCode: countryCode,
      phoneNumber: mobileNumber,
      role: "business",
    };

    setCurrentSection("business-detail");
    // const { data, error, success } = await onSendOTP(payload);

    // if (success) {
    //   setOtpSent(true);
    //   toast.success("OTP Sent");
    // } else {
    //   console.error(error, "error");
    // }
  };

  const onCountryCodeSelect = (e: any) => {
    setCountryCode(e.target.value);
  };

  const onMobileNumberChange = (e: any) => {
    const val: string = e.target.value;
    if (mobileRegex.test(val)) {
      setMobileNumber(val);
    }
  };

  return (
    <>
      <section className="business_free_section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="business_free_text">
                <h3 className="h3_title">
                  Hello! Let’s list your business for free{" "}
                </h3>
                <p className="paragraph">
                  We will use this information to assist you in claiming your
                  business page. If your business is already listed, it will be
                  automatically identified.
                </p>
                <div className="login_input-business">
                  <select value={countryCode} onChange={onCountryCodeSelect}>
                    {countryList.map((item, index) => {
                      return (
                        <option value={item.dial_code} key={index} className="">
                          {item.code + " " + item.dial_code}
                        </option>
                      );
                    })}
                  </select>
                  <input value={mobileNumber} onChange={onMobileNumberChange} />
                  <button className="btn_submit" onClick={onSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="business_free_img">
                <img
                  className="img-fluid"
                  src="images/business_free.png"
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

export default MobileDetail;
