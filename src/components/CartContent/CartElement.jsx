import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import { FaTrashAlt } from "react-icons/fa";

const CartElement = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => {
      return element !== foundId;
    });
    
    setCart(newCart);
  };
  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cartContent" key={product.id}>
          <span className="cart-delete-button" onClick={() => deleteProduct(product.id)}><FaTrashAlt /></span>
          <img className="thumbnail" src={product.thumbnail} alt={product.title} />
          <div className="info-content">
          <div className="title-box">
          <h3 className="title">{product.title}</h3>
          </div>
          <div className="description">
          <span>{product.description}</span>
          <span>{product.brand}</span>
          </div>
          </div>
          <div className="counter-box">
          <CartItemCounter product={product} />
          </div>
          <h4 className="price">${product.price * product.quanty}</h4>
        </div>
      ))}
    </div>
  );
};

export default CartElement;
