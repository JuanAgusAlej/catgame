import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import "../style/news.css";
import Loading from "../components/Loading";

const News = () => {
  return (
    <>
      <div className="container container-noticias">
        <div className="row">
          <div className="col-12">
            <h2 className="news-header my-3 text-center">News Section</h2>
          </div>
        </div>
        <div className="row">
          <NewsCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
