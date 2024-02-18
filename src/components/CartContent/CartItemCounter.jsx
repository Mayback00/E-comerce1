import { useContext } from "react";
import { dataContext } from  "../Context/DataContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const CartItemCounter = ({ product }) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    

    const decrese =  ()=>{
     const productrepeat = cart.find((item) => item.id === product.id);
     productrepeat.quanty !== 1 &&
        setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty: productrepeat.quanty - 1 } : item)));
    };

  return (
    <>
    <p className="counter-button" onClick={()=> buyProducts(product)}><FaPlusCircle /></p>
    <p className="quanty-number">{product.quanty}</p>
    <p className="counter-button" onClick={decrese}><FaMinusCircle /></p>
    </>
  )
}

export default CartItemCounter
