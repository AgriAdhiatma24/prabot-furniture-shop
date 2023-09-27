import React from "react";
import Header from "../parts/Header";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";
const NotFound = () => {
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
};

export default NotFound;
