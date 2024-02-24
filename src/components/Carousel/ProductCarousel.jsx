import ProductCard from "../Products/ProductCard"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { Swiper, SwiperSlide} from "swiper/react";
import "./ProductCarousel.css"

const ProductCarousel = () => {
  return (
    <section id="trading">
    <div className="container">
        <h3 className="text-center section-subheading">- Premium Coffee - </h3>
        <h1 className="text-center section-heading">Select Yours</h1>
    </div>
    <div className="container">
        <div className="swiper tranding-slider">
            <div className="swiper-wrapper">

            {/* Slider start */}
            <div className="swiper-slider tranding-slider">
                <div className="tranding-slide-img">
                    <ProductCard />
                </div>
            </div>
            {/*Slider ends*/}
            </div>

            <div className="tranding-slider-control">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default ProductCarousel
