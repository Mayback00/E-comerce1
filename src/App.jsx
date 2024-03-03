import "./App.css";
import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import LoginForm from "./components/Users/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BannerHero from "./components/Banner/BannerHero";
import GeneralProducts from "./components/Products/GeneralProducts";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <>
      <div className="a-app">
        <DataProvider>
          <BrowserRouter>
            <header>
              <Navbar />
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/general-product" element={<GeneralProducts />} />
              <Route path="/hero" element={<BannerHero />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartContent />} />
              <Route path="/user" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
        <div className="footer-app">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
