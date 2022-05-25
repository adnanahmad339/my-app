
import Home from './Pages/Home/Home';
import ProductLists from './Pages/ProductLists/ProductLists'
import Product from './Pages/Product/Product'
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

import { Redirect, BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import InvalidUrl from './Pages/InvalidUrl/InvalidUrl';


const Layout = () => {
    return ( <>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductLists />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<InvalidUrl />} />
        



      </Routes>


    </> );
}
 
export default Layout;