import './App.css';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import LoginForm from './components/Users/LoginForm';
import UserLogin from './components/Users/UserLogin';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductCard from './components/Products/ProductCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
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
                <Route path="product" element={<ProductCard />} />
                <Route path="/cart" element={<CartContent />} />
                <Route path="/user" element={<UserLogin />} />
                <Route path="/login" element={<LoginForm />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </header>
  );
}

export default App;
