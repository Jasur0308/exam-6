import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import AllProducts from '../routes/products/all-products/AllProducts';
import ProductPage from './home/product-page/ProductPage';

const RouterController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/all-products/:id' element={<ProductPage />} />
        <Route path='/auth/login' element={<Login />} />
    </Routes>
  );
}

export default RouterController;