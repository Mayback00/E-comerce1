import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import "./Home.css"

const Home = () => {
    return (
        <>
        <Banner />
        <div className="home-texts">
            <h1 className="Prodcuts-title">Products</h1>
        </div>
        <div className="product-card-container">
            <Products />
        </div>
        </>
    )};

export default Home;