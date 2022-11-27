import './App.css';
import Footerr from './components/general_universal/footer';
import Header from './components/general_universal/header';
import About from './pages/about';
import Catalog from './pages/catalog';
import Contact from './pages/contact';
import Delivery from './pages/delivery';
import Home from './pages/home';
import { Routes, Route, Link } from "react-router-dom";
import Product from './pages/product';
import Prods from './components/catalogComps/prods';


function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="Catalog/:el" element={<Product />} />      
        <Route path="Catalog/:category" element={<Prods />} />      
        <Route path="Delivery" element={<Delivery />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />      
      </Routes>
      <Footerr />
    </div>
  );
}

export default App;
//<Header />
      /* <Home  /> */
      /* <Catalog/> */
      /* <Delivery /> */
      /* <About /> 
      <About />
      <Footerr />*/