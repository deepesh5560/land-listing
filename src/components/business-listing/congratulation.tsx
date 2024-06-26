"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

const Congratulations = ({ onNext }: { onNext: () => void }) => {
  const Router = useRouter()
  const onSubmit = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("BUSINESS_LIST_ACTIVE_SECTION", "0");
    }
    Router.push('/user/profile')
  };

  return (
    <>
      <section className="congratulations py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text_block col-md-7">
              <h3 className="h3_title">Your Business Registered With Us.</h3>
              <p className="paragraph">
                Have A Great Experience Ahead.              </p>
              <img className="img-fluid" src="images/completed.png" alt="" />
              {/* <p className="paragraph">
                Just need few more steps to complete your business profile
              </p> */}
              <div className="btn_form">
                <button onClick={onSubmit}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Congratulations;
