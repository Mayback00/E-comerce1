import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ProductCard.css";

const ProductCard = () => {
  const { data, cart, setCart, buyProducts } = useContext(dataContext);

  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- Café de Calidad - </h3>
        <h1 className="text-center section-heading">Elige el tuyo</h1>
      </div>
      <Swiper
        modules={[Navigation, A11y, EffectCoverflow]}
        spaceBetween={30}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="my-swiper"
      >
        {data.map((product) => (
          <div className="swiper-wrapper">
            {/*sliderstart*/}

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
            {/*/!*sliderend*!/*/}
          </div>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCard;
