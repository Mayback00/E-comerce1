import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BBG1 from './images/BBG-01.png'
import BBG2 from './images/BBG-02.png'
import BBG3 from './images/BBG-03.png'
import BBG4 from './images/BBG-04.png'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BannerHero.css';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const BannerHero = () => {
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="banner-swiper"
      >
        
        <div className="banner-img">
        <SwiperSlide>
            {/*<div className='banner-text'>
                <div className="banner-title">
                    <h4>Café de Costa Rica</h4>
                </div>
                <div className="banner-subtitle">
                    <h3>La calidad del café gourmet</h3>
                </div>
                <div className="banner-description">
                    <h2>Hasta febrero de 2018, Costa Rica cultivaba exclusivamente café arábica de variedades Caturra y Catuaí, destacando por su alta calidad. La siembra de café Robusta estaba prohibida desde 1989 para preservar la calidad del grano. Sin embargo, en 2018, el gobierno modificó la ley permitiendo el cultivo de Robusta en ciertas áreas. El café se cultiva en suelos volcánicos con condiciones ideales, y más del 80% de las plantaciones se encuentran entre 800 y 1.600 metros de altitud. Desde 2001, el Instituto del Café de Costa Rica implementó el Plan Nacional Cafetalero para mejorar la producción y comercialización del café. La cosecha manual y selectiva, el beneficio por vía húmeda, y el secado al sol son prácticas comunes. Se destaca la competencia de catación que selecciona los mejores cafés desde 2007, y se menciona la variedad preferida "Caturra" por su adaptabilidad y productividad, con menciones a contribuciones históricas de familias como la de Ibo Bonilla Rojas en 1945.</h2>
                </div>
      </div>*/}
          <img src={BBG1} className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BBG2} className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BBG3} className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BBG4} className='banner-bg' />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default BannerHero
