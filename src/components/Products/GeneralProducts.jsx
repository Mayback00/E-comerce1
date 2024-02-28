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
  return (
    <div className="card-instance">
        <div className="card-instance-space">
            <div className="cardui-header title-block">
                <h2 className="color-base title-block-left">Lo mejor del café</h2>
                <a href="" className="normal-link title-block-right"></a>
            </div>
            <div className="a-section card-instance-internal-space">
                <div className="a-section carousel-viewport">
                <Swiper
        spaceBetween={30}
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
        <SwiperSlide className="card-instances-sipers-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 9</SwiperSlide>
        <SwiperSlide className="card-instances-sipers-slide">Slide 10</SwiperSlide>
        </div>
      </Swiper>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default GeneralProducts
