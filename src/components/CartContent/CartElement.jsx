import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

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
          <img src={product.thumbnail} alt={product.title} />
          <h3 className="title">{product.title}</h3>
          <CartItemCounter product={product} />
          <h4 className="price">${product.price * product.quanty}</h4>
          <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>🗑</h3>
        </div>
      ))}
    </div>
  );
};

export default CartElement;
