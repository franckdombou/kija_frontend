import "./assets/css/templatemo-hexashop.css"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";




import Categorie from './scenes/global/Categorie';
//import './App.css';
import Navbar from './scenes/global/Navbar';
import Features from './scenes/global/Features';
import Explore from "./scenes/global/Explore";
import SocialMedia from "./scenes/global/SocialMedia";
import Suscribe from "./scenes/global/Suscribe";
import Footer from "./scenes/footer/Footer";
import Acceuil from "./vue/Acceuil";
import Produits from "./scenes/produits/Produits";
import SingleProduit from "./scenes/produits/SingleProduit";
import About from "./scenes/about/About";
import VueContact from "./vue/VueContact";
import ContactUs from "./scenes/about/ContactUs";
import { useEffect } from "react";
import CartMenu from "./scenes/global/CartMenu";
const ScrollToTop = () => {
const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="item/:itemId" element={<SingleProduit />} />
          <Route path="produits" element={<Produits />} />
          <Route path="checkout/success" element={<About />} />
        </Routes>
        <CartMenu /> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
