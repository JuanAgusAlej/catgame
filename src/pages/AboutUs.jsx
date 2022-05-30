import React from "react";
import AboutUsCard from "../components/AboutUsCard";

const AboutUs = () => {
  return (
    <div className="container container-aboutus">
      <div className="row">
        <div className="col">
          <h2 className="mb-5 tittle">About Us</h2>
        </div>
        <div className="row justify-content-center">
          <AboutUsCard />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
