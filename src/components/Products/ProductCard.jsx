import { useContext } from "react";
import { dataContext } from  "../Context/DataContext";
import "./ProductCard.css"

const ProductCard = () => {
    const { data, cart, setCart, buyProducts } = useContext(dataContext);

  return (
    <div className="container-product-card">
        {data.map((product) => (
        <div className="product-card" key={product.id}>
            <div className="top-card">
                {/* image, price */}
                <img src={product.thumbnail} className="product-image" alt={product.title} />
                <span className="product-price">$<b>{product.price}</b></span>
            </div>
            <div className="bottom-card">
                {/* title, description, brand */}
                <div className="product-name">
                    <h6>{product.brand}</h6>
                    <h4>{product.title}</h4>
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                </div>
                <button type="button" className="cta-add-to-cart" onClick={()=> buyProducts(product)}>Añadir al Carrito</button>
            </div>
        </div>
        ))}
    </div>
  );
}

export default ProductCard
