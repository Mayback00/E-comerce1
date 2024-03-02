import React from "react";
import BannerHero from "../Banner/BannerHero";
import CoffeeCups from "../Banner/CoffeeCups";
import ProductCard from "../Products/ProductCard";
import GeneralProducts from "../Products/GeneralProducts";
import SpecialOffers from "../Products/SpecialOffers";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero-container">
        {/* Banner Section */}
        <header className="banner-container">
          <BannerHero />
        </header>
        {/* Products Section */}
        <div className="home-container">
          <div className="product-card-home">
            <ProductCard />
          </div>
          <div className="general-products">
            <div className="home-card-instance">
            <GeneralProducts />
            </div>
          </div>
          <div className="general-products">
            <div className="home-card-instance">
            <SpecialOffers />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
