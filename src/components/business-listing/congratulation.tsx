"use client";
import React, { Dispatch, SetStateAction } from "react";

const Congratulations = ({
  setCurrentSection,
}: {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <section className="congratulations py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text_block col-md-7">
              <h3 className="h3_title">Enter Your Business Detail</h3>
              <p className="paragraph">
                Your business is now register with landlisting
              </p>
              <img className="img-fluid" src="images/completed.png" alt="" />
              <p className="paragraph">
                Just need few more steps to complete your business profile
              </p>
              <div className="btn_form">
                <button onClick={() => setCurrentSection("contact-detail")}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Congratulations;
