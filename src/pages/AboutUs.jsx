import React from "react";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default AboutUs;
