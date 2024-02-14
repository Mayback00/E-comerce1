import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import "./Home.css"

const Home = () => {
    return (
        <>
        <Navbar />
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