
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Navbar from "./Pages/Navbar";
import ImageGrid from "./Pages/Cart";

import SingleItem from "./Pages/SingleItem";
function App() {
  return (
    <Routes>
      <Route path="" element={<Navbar/>}>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singleitem/:productId" element={<SingleItem />} />

      </Route>
     
    </Routes>
  );
}

export default App;
