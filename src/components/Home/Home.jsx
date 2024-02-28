import React from "react";
import BannerHero from "../Banner/BannerHero";
import CoffeeCups from "../Banner/CoffeeCups";
import ProductCard from "../Products/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          {/* Call to Action */}
          <div className="call-to-action">
            <h4>PUEDES SENTIR LA ENERGÍA</h4>
            <h1>Comienza tu día con un café</h1>
            <button className="call-to-action-button">COMPRA AHORA</button>
            <h4></h4>
          </div>

          {/* Coffee Cups Section */}
          <div className="coffee-cup-container">
            <CoffeeCups />
          </div>
        </div>
        {/* Banner Section */}
        <div className="banner-container">
          <BannerHero />
        </div>

        {/* Products Section */}
        <div className="home-container">
          <h1 className="products-title">Productos</h1>
          <div className="product-card-home">
            <ProductCard />
          </div>
          <div className="general-products">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
