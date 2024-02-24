import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BannerHero.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const BannerHero = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="banner-swiper"
      >
        
        <div className="banner-img">
        <SwiperSlide>
            <div className='banner-text'>
                <div className="banner-title">
                    <h4>Café de Costa Rica</h4>
                </div>
                <div className="banner-subtitle">
                    <h3>La calidad del café gourmet</h3>
                </div>
                <div className="banner-description">
                    <h2>Hasta febrero de 2018, Costa Rica cultivaba exclusivamente café arábica de variedades Caturra y Catuaí, destacando por su alta calidad. La siembra de café Robusta estaba prohibida desde 1989 para preservar la calidad del grano. Sin embargo, en 2018, el gobierno modificó la ley permitiendo el cultivo de Robusta en ciertas áreas. El café se cultiva en suelos volcánicos con condiciones ideales, y más del 80% de las plantaciones se encuentran entre 800 y 1.600 metros de altitud. Desde 2001, el Instituto del Café de Costa Rica implementó el Plan Nacional Cafetalero para mejorar la producción y comercialización del café. La cosecha manual y selectiva, el beneficio por vía húmeda, y el secado al sol son prácticas comunes. Se destaca la competencia de catación que selecciona los mejores cafés desde 2007, y se menciona la variedad preferida "Caturra" por su adaptabilidad y productividad, con menciones a contribuciones históricas de familias como la de Ibo Bonilla Rojas en 1945.</h2>
                </div>
            </div>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Best-hd-costa-rica-wallpaper.jpg" className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://essense.coffee/wp-content/uploads/2019/06/ultimate-coffee.jpg" className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.newyorkgourmetcoffee.com/mm5/graphics/00000001/1/coffee-beans-5928034_1280.jpg" className='banner-bg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://saecocr.com/imag/slider3.png" className='banner-bg' />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}

export default BannerHero
