import React from "react";
import RangeProducts from "../../components/Home/RangeProducts";
import Welcome from "../../components/Home/welcome/Welcome";
import Layout from "../../components/Layout";

import Slides from "../../components/swipes/Slides";

const HomePage = () => {
  return (
    <Layout>
      <Slides />
      <Welcome />
      <RangeProducts />
    </Layout>
  );
};

export default HomePage;