import Banner from "../Banner/Banner";
import ProductCard from "../Products/ProductCard";
import "./Home.css"

const Home = () => {
    return (
        <>
        <Banner />
        <div className="home-container">
            <h1 className="products-title">Productos</h1>
            <ProductCard />
        </div>
        </>
    )};

export default Home;