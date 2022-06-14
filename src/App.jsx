import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ScrollButton from "./components/Home/ScrollToTop";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <ScrollButton />
      </Router>
    </>
  );
};

export default App;
