import BannerHero from "../Banner/BannerHero";
import ProductCard from "../Products/ProductCard";
import "./Home.css"

const Home = () => {
    return (
        <>
        <div className="banner-container">
        <BannerHero />
        <div className="home-container">
            <h1 className="products-title">Productos</h1>
            <div className="product-card-home">
                <ProductCard />
        </div>
        </div>
        </div>
        </>
    )};

export default Home;