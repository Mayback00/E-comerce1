import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BBG1 from "./images/BBG-01.png";
import BBG2 from "./images/BBG-02.png";
import BBG3 from "./images/BBG-03.png";
import BBG4 from "./images/BBG-04.png";
import CoffeeCups from "./CoffeeCups";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css";

import "./BannerHero.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const BannerHero = () => {
  return (
    <>
      <div className="hero-content">
        {/* Call to Action */}
        <div className="call-to-action">
          <h4>PUEDES SENTIR LA ENERGÍA</h4>
          <h1>Comienza tu día con un café</h1>
          <button className="call-to-action-button">COMPRA AHORA</button>
        </div>

        {/* Coffee Cups Section */}
        <div className="coffee-cup-container">
          <CoffeeCups />
        </div>
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, EffectFade, Navigation]}
        className="banner-swiper"
      >
        <div className="banner-img">
          <SwiperSlide>
            <img src={BBG1} className="banner-bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BBG2} className="banner-bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BBG3} className="banner-bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BBG4} className="banner-bg" />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default BannerHero;
