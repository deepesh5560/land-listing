"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

const days = [
  { id: 0, day: "Sun", selected: false },
  { id: 1, day: "Mon", selected: false },
  { id: 2, day: "Tue", selected: false },
  { id: 3, day: "Wed", selected: false },
  { id: 4, day: "Thu", selected: false },
  { id: 5, day: "Fri", selected: false },
  { id: 6, day: "Sat", selected: false },
];

const initialData = {
  days: days,
  checkIn: "Mr.",
  checkOut: "",
};

const BusinessTimings = ({
  setCurrentSection,
}: {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}) => {
  const [detail, setDetail] = useState(initialData);

  const onTextChange = (e: any) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const onSubmit = async (e: any) => {
    const payload = {
      workingDays: detail.days.reduce((acc, it) => {
        if (it.selected) {
          return [...acc, it.day];
        }
        return acc;
      }, [] as string[]),
      workingTime: [detail.checkIn, detail.checkOut],
    };

    const { data, error, success } = await networkInstance(
      "POST",
      "businesses/timing",
      payload
    );

    if (!success) {
      toast.error(error);
      return;
    }
    setCurrentSection("upload");
  };

  const onDaySelect = (id: number) => {
    const newList = detail.days.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });

    setDetail({ ...detail, days: newList });
  };

  return (
    <>
      <section className="mult-step_section py-5">
        <div className="container">
          <div className="multi_step_wrapper">
            <div className="steps step_2 pb-3">
              <img className="step_img" src="images/step2.png" alt="" />
              <h3 className="h3_title">Add Business Timings</h3>
              <p className="paragraph">
                Let your user Know when you are open for business
              </p>
              <h5>Select your Days of week</h5>
              <div className="custom_form">
                <div className="days_of_week">
                  {detail.days.map((item, index) => {
                    return (
                      <div className="input_weak" key={item.id}>
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onClick={() => onDaySelect(item.id)}
                        />
                        <label>{item.day}</label>
                      </div>
                    );
                  })}
                </div>
                <div className="row py-4">
                  <div className="col-md-6">
                    <div className="select_custom">
                      <label>Opening Time</label>
                      <select
                        value={detail.checkIn}
                        name="checkIn"
                        onChange={onTextChange}
                      >
                        {[...new Array(12)].map((_, index) => {
                          const time = `${(index + 1)
                            .toString()
                            .padStart(2, "0")}:00 AM`;
                          return (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          );
                        })}

                        <option value="01:00">09:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="select_custom">
                      <label>Closing Time</label>
                      <select
                        value={detail.checkOut}
                        name="checkOut"
                        onChange={onTextChange}
                      >
                        {[...new Array(12)].map((_, index) => {
                          const time = `${(index + 1)
                            .toString()
                            .padStart(2, "0")}:00 PM`;
                          return (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          );
                        })}

                        <option value="01:00">09:00</option>
                      </select>
                    </div>
                  </div>
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

export default BusinessTimings;
