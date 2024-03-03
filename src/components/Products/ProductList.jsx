import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import ProductCounter from "./ProductCounter";
import "./ProductList.css";

const ProductList = () => {
  const { data, cart, setCart, buyProducts } = useContext(dataContext);

  return (
    <div className="main-product-container">
      {data.map((product) => (
        <section className="main-product-list" key={product.id}>
          <div className="main-product-card">
            <img
              src={product.thumbnail}
              className="main-product-image"
              alt={product.title}
            />
            <FaShoppingCart className={"product-card_cart"} />
            <FaRegBookmark className={"product-card_wishlist"} />
            <FaFireAlt className={"product-card_fast-selling"} />
            <div className="product-card_content">
              <div className="main-tite-container">
                <h3 className="main-product-name">{product.title}</h3>
              </div>
              <div className="display-stack_1">
                <div className="main-product-price">
                  $<b>{product.price}</b>
                </div>
                <div className="main-product-sales">
                  {product.totalSales} vendidos
                </div>
              </div>
              <div className="display-stack_2">
                <div className="product-rating">
                  {[...Array(product.rating)].map((index) => (
                    <FaStar id={index + 1} key={index} />
                  ))}
                </div>
                <div className="product-time">
                  {product.timeLeft} días restantes
                </div>
              </div>
              <div className="product-counter">
                <ProductCounter buyProducts={buyProducts} product={product} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
