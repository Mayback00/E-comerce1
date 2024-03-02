import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./SpecialOffers.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SpecialOffers = () => {
  const { data, cart, setCart, buyProducts } = useContext(dataContext);

  return (
    <div className="offer-card-instance">
        <div className="offer-card-instance-space">
            <div className="offer-cardui-header offer-title-block">
                <h2 className="color-base offer-title-block-left">Ofertas especiales.</h2>
                <a href="" className="normal-link offer-title-block-right">Todas las ofertas</a>
            </div>
            <div className="offer-a-section offer-card-instance-internal-space">
                <div className="offer-a-section offer-carousel-viewport">
                <Swiper
      
        navigation={true}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        breakpoints={{
            769: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
        modules={[Navigation]}
        className="offer-instance-swiper"
      >
        <div className="offer-swiper-slide-bg">
        {data.map((product) => (

          <div className="offer-swiper-wrapper">
            {/*sliderstart*/}

            <SwiperSlide className="offer-general-product-card" key={product.id}>
              <div className="offer-general-image-container">
                <img
                  src={product.thumbnail}
                  className="offer-general-product-image"
                  alt={product.title}
                />
              </div>
            </SwiperSlide>
            {/*/!*sliderend*!/*/}
          </div>
          ))}
        </div>
      </Swiper>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SpecialOffers;
