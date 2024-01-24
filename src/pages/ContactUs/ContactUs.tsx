import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ContactUsInfo } from "./components/ContactUsInfo";
import "./ContactUs.scss";
import { GoogleMapComp } from "../../components/GoogleMap/GoogleMap";

export function ContactUs() {
  return (
    <div className="flex column contact-us">
      <PageHeader title={"Contact Us"} />
      <div className="flex column contact-us-info-main-container">
        <ContactUsInfo />
        <GoogleMapComp />
      </div>
    </div>
  );
}
