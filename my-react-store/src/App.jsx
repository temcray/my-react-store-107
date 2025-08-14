import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Header from "./component/Header";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
