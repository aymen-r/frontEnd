import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
