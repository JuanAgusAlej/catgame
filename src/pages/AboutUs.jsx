import React from "react";
import AboutUsCard from "../components/AboutUsCard";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container container-aboutus">
        <div className="row">
          <div className="col">
            <h2 className="mb-5 tittle">about us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <AboutUsCard />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
