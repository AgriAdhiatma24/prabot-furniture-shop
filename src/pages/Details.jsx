import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestions from "../parts/Details/Suggestions";
import Clients from "../parts/Clients";
import Sitemap from "../parts/HomePage/Sitemap";
import Footer from "../parts/Footer";

const Details = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { URL: "/", name: "Home" },
          { URL: "categories/1234", name: "Office Room" },
          { URL: "categories/1234/products/4321", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestions />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Details;
