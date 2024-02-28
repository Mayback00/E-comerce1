import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoffeeCup from './images/CoffeeCup.png'
import CoffeeCup02 from './images/CoffeeCup02.png'
import './CoffeeCups.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BannerHero.css';

import {EffectFade, Navigation, Pagination } from 'swiper/modules';

const CoffeeCups = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination]}
        className="CoffeeCupSwiper"
      >
        
        <div className="coffee-swipe-container">
        <SwiperSlide className='coffee-container'>
          <img src={CoffeeCup} alt='coffee-01' />
        </SwiperSlide>
        <SwiperSlide className='coffee-container'>
          <img src={CoffeeCup02} alt='coffee-02' />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default CoffeeCups
