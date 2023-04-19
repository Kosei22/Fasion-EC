import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import MenProducts from './Components/MenProducts';
import WomenProducts from './Components/WomenProducts';
import KidsProducts from './Components/KidsProducts';
import Contact from './Components/Contact';
import Details from './Components/ProductDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/kids" element={<KidsProducts />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
