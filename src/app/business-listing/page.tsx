"use client";
import AddBusinessCategory from "@/components/business-listing/add-business-category";
import AddTin from "@/components/business-listing/add-tin";
import BusinessDetail from "@/components/business-listing/business-detail";
import BusinessTimings from "@/components/business-listing/business-timings";
import Congratulations from "@/components/business-listing/congratulation";
import ContactDetail from "@/components/business-listing/contact-detail";
import MobileDetail from "@/components/business-listing/mobile";
import Upload from "@/components/business-listing/upload";
import React, { useState } from "react";

const Page = () => {
  const [currentSection, setCurrentSection] = useState("mobile");

  console.log();
  return (
    <div>
      {currentSection === "mobile" && (
        <MobileDetail setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "business-detail" && (
        <BusinessDetail setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "congratulations" && (
        <Congratulations setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "contact-detail" && (
        <ContactDetail setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "business-timings" && (
        <BusinessTimings setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "upload" && (
        <Upload setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "add-business-category" && (
        <AddBusinessCategory setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "add-tin" && (
        <AddTin setCurrentSection={setCurrentSection} />
      )}
    </div>
  );
};

export default Page;
