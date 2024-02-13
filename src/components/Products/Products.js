import { useContext } from "react";
import { dataContext } from  "../Context/DataContext";

const Products = () => {
    const { data } = useContext(dataContext);
  return data.map((product)=>{
    return (
        <div className="card">
            <img src={product.img} alt="image-product-card" />
        </div>
    )
  });
};

export default Products;
