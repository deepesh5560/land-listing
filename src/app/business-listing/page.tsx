"use client";
import AddBusinessCategory from "@/components/business-listing/add-business-category";
import AddTin from "@/components/business-listing/add-tin";
import BusinessDetail from "@/components/business-listing/business-detail";
import BusinessTimings from "@/components/business-listing/business-timings";
import Congratulations from "@/components/business-listing/congratulation";
import ContactDetail from "@/components/business-listing/contact-detail";
import Docs from "@/components/business-listing/docs";
import MobileDetail from "@/components/business-listing/mobile";
import Upload from "@/components/business-listing/upload";
import React, { Component, ReactNode, useEffect, useState } from "react";
import useStore from "@/store/loadingState";
import Loader from "@/models/loader";

const steps: {
  [index: number]: string;
} = {
  0: "mobile",
  1: "add-tin",
  2: "business-detail",
  3: "contact-detail",
  4: "business-timings",
  5: "upload",
  6: "add-business-category",
  7: "Docs",
  8: "congratulations",
};

const Page = () => {
  const condition = typeof window !== "undefined";
  const [currentSection, setCurrentSection] = useState(0);
  const [iseLOading,setIsloading] = useState(false);
  

  

  const onNext = () => {
    if (condition) {
      if (currentSection >= Object.keys(steps).length) {
        return;
      }

      localStorage.setItem(
        "BUSINESS_LIST_ACTIVE_SECTION",
        (currentSection + 1).toString()
      );
      setCurrentSection(currentSection + 1);
    }
  };

  useEffect(() => {
    if (condition) {
      const activeSection = Number(
        localStorage.getItem("BUSINESS_LIST_ACTIVE_SECTION") ?? 0
      );
      setCurrentSection(activeSection);
    }
  }, []);

  return (
    <>
    {iseLOading?<Loader/>:
    <div>
      {steps[currentSection] === "mobile" && <MobileDetail onNext={onNext} />}
      {steps[currentSection] === "business-detail" && (
        <BusinessDetail onNext={onNext}  setIsloading={setIsloading}/>
      )}

      {steps[currentSection] === "contact-detail" && (
        <ContactDetail onNext={onNext} setIsloading={setIsloading}/> 
      )}
      {steps[currentSection] === "business-timings" && (
        <BusinessTimings onNext={onNext} setIsloading={setIsloading}/> 
      )}
      {steps[currentSection] === "upload" && <Upload onNext={onNext}  setIsloading={setIsloading}/>}
      {steps[currentSection] === "add-business-category" && (
        <AddBusinessCategory onNext={onNext} setIsloading={setIsloading}/> 
      )}
      {steps[currentSection] === "add-tin" && <AddTin onNext={onNext}  setIsloading={setIsloading}/>}
      {steps[currentSection] === "Docs" && (
        <Docs onNext={onNext} setIsloading={setIsloading}/> 
      )}
      {steps[currentSection] === "congratulations" && (
        <Congratulations onNext={onNext} />
      )}
    </div>
}
    </>

    
  );
};

export default Page;
