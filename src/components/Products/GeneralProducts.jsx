import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./GeneralProducts.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GeneralProducts = () => {
  const { data, cart, setCart, buyProducts } = useContext(dataContext);

  return (
    <div className="card-instance">
        <div className="card-instance-space">
            <div className="cardui-header title-block">
                <h2 className="color-base title-block-left">Lo mejor del café.</h2>
                <a href="" className="normal-link title-block-right">Más café</a>
            </div>
            <div className="a-section card-instance-internal-space">
                <div className="a-section carousel-viewport">
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
        className="instance-swiper"
      >
        <div className="swiper-slide-bg">
        {data.map((product) => (

          <div className="swiper-wrapper">
            {/*sliderstart*/}

            <SwiperSlide className="general-product-card" key={product.id}>
              <div className="general-image-container">
                <img
                  src={product.thumbnail}
                  className="general-product-image"
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

export default GeneralProducts
