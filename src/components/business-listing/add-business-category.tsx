"use client";
import { networkInstance } from "@/lib/network-instance";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBusinessCategory = ({ onNext,setIsloading }: { onNext: () => void , setIsloading:any}) => {
  const [categories, setCategories] = useState<any[]>([]);

  const onSubmit = async (e: any) => {
    const payload:any = {
      category:  categories.find((category: any) => category.selected)?._id || "",
    };
    if(!payload?.category){
      toast.error('Select a category!')
      return;
    }
    setIsloading(true)
    const { data, error, success } = await networkInstance(
      "POST",
      "businesses/category",
      payload
    );
    setIsloading(false)
    if (!success) {
      toast.error(error);
      return;
    }
    onNext();
  };

  useEffect(() => {
    const getData = async () => {
      const { data, error, success } = await networkInstance(
        "GET",
        "home/categories"
      );
      if (success) {
        const newData = data.data.map((item: any) => {
          return { ...item, selected: false };
        });
        setCategories(newData);
      }
    };
    getData();
  }, []);

  const onCategorySelect = (id: string) => {
    const newList: any = categories.map((item: any) => {
      if (item._id === id) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });

    setCategories(newList);
  };

  return (
    <>
      <section className="mult-step_section py-5">
        <div className="container">
          <div className="multi_step_wrapper">
            <div className=" row step_4 pb-3">
              <div className="col-md-6">
                <img className="step_img" src="images/step4.png" alt="" />
                <h3 className="h3_title">Add Business Category</h3>
                <p className="paragraph">
                  Let your user know what type of your business is
                </p>
                <div className="custom_form">
                <h5 className="h5_title pb-3">Select your Industry Category</h5>
                <div className="industry_category">
                  <div className="category_section">
                    {!!categories?.length &&
                      categories.map((item: any) => {
                        const pic =
    process.env.NEXT_PUBLIC_BASE_API_URL?.split("/api/v1/")[0] +
    "/" +
    item.icon;
                        return (
                          <div
                            className="category_card"
                            key={item._id}
                            onClick={() => onCategorySelect(item._id)}
                            style={{
                              backgroundColor: item.selected
                                ? "silver"
                                : "white",
                            }}
                          >
                            <img height={60}  width={60} className="card_icon" src={item.icon?pic:"images/hotel.png"} />
                            <h5 style={{wordBreak:"break-all"}} className="card_title">{item.title}</h5>
                          </div>
                        );
                      })}
                  </div>
                </div>
                  <div className="btn_form">
                    <button className="btn_skip me-2" onClick={()=>onNext()}>Skip</button>
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

export default AddBusinessCategory;
