import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
  const { cart } = useContext(dataContext);

return (
  <>
    <Navbar />
    {cart.length > 0 ? (
      <>
        <CartElement />
        <CartTotal/>
      </>
    ) : (
      <h2 className="cart-message-center">Your cart is empty</h2>
    )}
  </>
);
}
export default CartContent;
