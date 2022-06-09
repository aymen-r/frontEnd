import React from "react";
// import ProdsGallerie from "../../components/Home/ProdsGalerie";
// import RangeProducts from "../../components/Home/RangeProducts";
import Welcome from "../../components/Home/welcome/Welcome";
import Layout from "../../components/Layout";
import CountUp from "../../components/Home/Counter";

import Slides from "../../components/swipes/Slides";
import Address from "../../components/Home/Address";
import ProdSolutionSlides from "../../components/Home/ProdSolutionSlides";
import Map from "../../components/Home/Map/Map";

const HomePage = () => {
  return (
    <Layout>
      <Slides />
      {/* <ProdsGallerie /> */}
      <Welcome />
      <CountUp />
      <ProdSolutionSlides />
      {/* <RangeProducts /> */}

      <Map />
      <Address />
    </Layout>
  );
};

export default HomePage;
