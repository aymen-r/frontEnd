import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ScrollButton from "./components/Home/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
        <ScrollButton />
      </Router>
    </>
  );
};

export default App;
