import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Main from "./components/page/main/Main";
import Category from "./components/page/category/Category";
import Product from "./components/page/product/Product";

import Header from "./components/pageComponents/Header";
import Footer from "./components/pageComponents/Footer";

import './App.css';



function App() {
  return (
    <div className="main-page-wrapper">
      <Header/>
      <Router>
        <Routes>
          {/* Main Page */}
          <Route path="/main"
                 element={<Main/>
                 }/>

          {/* Category Page */}
          <Route path="/category/:categoryId"
                 element={<Category/>
                 }/>

          {/* Product Page */}
          <Route path="/product/:productId"
                 element={<Product/>
                 }/>

          {/* Navigation */}
          <Route path="*" element={<Navigate to="/main"/>}/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
