import './App.css';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import LoginForm from './components/Users/LoginForm';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer';
import BannerHero from './components/Banner/BannerHero';
import CardsSwiper from './components/Products/CardsSwiper';

function App() {
  return (
    <>
    <header>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <div className="general-container bg">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <div className="internal-container general-container">
              <Routes>
                <Route path="/hero" element={<BannerHero />} />
                <Route path="/product" element={<CardsSwiper />} />
                <Route path="/cart" element={<CartContent />} />
                <Route path="/user" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/cardswiper" element={<CardsSwiper />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </DataProvider>
    </header>
          <div className='footer-app'>
          <Footer />
          </div>
          </>
  );
}

export default App;
