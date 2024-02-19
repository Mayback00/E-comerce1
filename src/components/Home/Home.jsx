import Banner from "../Banner/Banner";
import ProductCard from "../Products/ProductCard";
import "./Home.css"

const Home = () => {
    return (
        <>
        <Banner />
        <div className="home-texts">
            <h1 className="products-title">Products</h1>
        </div>
        <div className="product-card-container">
            <ProductCard />
        </div>
        </>
    )};

export default Home;