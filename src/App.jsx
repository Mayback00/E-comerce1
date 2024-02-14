import './App.css';
import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import DataProvider from './components/Context/DataContext';
import UserLogin from './components/Users/UserLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path="/user" element={<UserLogin />} />
        </Routes>
        </>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;
