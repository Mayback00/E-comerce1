import { useContext } from "react";
import { dataContext } from  "../Context/DataContext";
import './Products.css';

const Products = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="card-container">
      {data.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <button>Add to cart</button>
            </div>
      ))}
    </div>
  );
};

export default Products;
