"use client";
import AddBusinessCategory from "@/components/business-listing/add-business-category";
import AddTin from "@/components/business-listing/add-tin";
import BusinessDetail from "@/components/business-listing/business-detail";
import BusinessTimings from "@/components/business-listing/business-timings";
import Congratulations from "@/components/business-listing/congratulation";
import ContactDetail from "@/components/business-listing/contact-detail";
import MobileDetail from "@/components/business-listing/mobile";
import Upload from "@/components/business-listing/upload";
import React, { Component, ReactNode, useEffect, useState } from "react";

const steps: {
  [index: number]: string;
} = {
  0: "mobile",
  1: "business-detail",
  2: "contact-detail",
  3: "business-timings",
  4: "upload",
  5: "add-business-category",
  6: "add-tin",
  7: "congratulations",
};

const Page = () => {
  const condition = typeof window !== "undefined";
  const [currentSection, setCurrentSection] = useState(0);

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
    <div>
      {steps[currentSection] === "mobile" && <MobileDetail onNext={onNext} />}
      {steps[currentSection] === "business-detail" && (
        <BusinessDetail onNext={onNext} />
      )}

      {steps[currentSection] === "contact-detail" && (
        <ContactDetail onNext={onNext} />
      )}
      {steps[currentSection] === "business-timings" && (
        <BusinessTimings onNext={onNext} />
      )}
      {steps[currentSection] === "upload" && <Upload onNext={onNext} />}
      {steps[currentSection] === "add-business-category" && (
        <AddBusinessCategory onNext={onNext} />
      )}
      {steps[currentSection] === "add-tin" && <AddTin onNext={onNext} />}

      {steps[currentSection] === "congratulations" && (
        <Congratulations onNext={onNext} />
      )}
    </div>
  );
};

export default Page;
