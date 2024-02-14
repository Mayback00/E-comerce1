import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartElement = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cartContent" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3 className="title">{product.title}</h3>
          <h4 className="price">${product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default CartElement;
