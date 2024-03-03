import React, { useState } from "react";
import { PiMinusFill, PiPlusFill } from "react-icons/pi";
import "./ProductCounter.css";

const ProductCounter = ({ buyProducts, product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    buyProducts({...product, quantity});
  };

  return (
    <div className="counter-container">
      <div className="iner-counter-container">
        <h3 className="main-counter-button" onClick={decrement}>
          <PiMinusFill className="counter-icons" />
        </h3>
        <div className="counter-display">{quantity}</div>
        <h3 className="main-counter-button" onClick={increment}>
          <PiPlusFill className="counter-icons" />
        </h3>
      </div>
      <button
        type="button"
        className="main-cta-add-to-cart"
        onClick={() => handleAddToCart(product, quantity)}>
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCounter;
