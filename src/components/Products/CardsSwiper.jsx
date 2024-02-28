import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ProductCard.css";


const CardsSwiper = () => {
    const { data, cart, setCart, buyProducts } = useContext(dataContext);

return (
    <div id="container">

     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.map((product) => (
          <div className="swiper-wrapper">
        <SwiperSlide className="product-card" key={product.id}>
              <div className="image-container">
                <img
                  src={product.thumbnail}
                  className="product-image"
                  alt={product.title}
                />
              </div>
              <div className="top-card">
                {/* image, price */}
                <span className="product-price">
                  $<b>{product.price}</b>
                </span>
              </div>
              <div className="bottom-card">
                {/* title, description, brand */}
                <div className="product-name">
                  <h6>{product.brand}</h6>
                  <h4>{product.title}</h4>
                </div>
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                <button
                  type="button"
                  className="cta-add-to-cart"
                  onClick={() => buyProducts(product)}
                >
                  Añadir al Carrito
                </button>
              </div>
            </SwiperSlide>
            </div>
            ))}
            <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CardsSwiper
