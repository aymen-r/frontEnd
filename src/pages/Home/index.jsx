import React from "react";
import ProdsGallerie from "../../components/Home/ProdsGalerie";
import RangeProducts from "../../components/Home/RangeProducts";
import Welcome from "../../components/Home/welcome/Welcome";
import Layout from "../../components/Layout";
import CountUp from "../../components/Home/Counter";

import Slides from "../../components/swipes/Slides";
import Address from "../../components/Home/Address";

const HomePage = () => {
  return (
    <Layout>
      {/* <Slides /> */}
      <ProdsGallerie />
      <Welcome />
      <CountUp />

      <RangeProducts />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25689965.964627206!2d18.88519462282848!3d20.818295622771046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71eee59a637d807f!2sThagher%20Alrafedain%20%7C%20Tokkma!5e0!3m2!1sen!2stn!4v1654510004367!5m2!1sen!2stn"
        width={"100%"}
        height={800}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <Address />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42540453.47361431!2d0.9215882643976029!3d13.415366914462258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4317eb315fe3%3A0x71eee59a637d807f!2sThagher%20Alrafedain%20%7C%20Tokkma!5e0!3m2!1sen!2stn!4v1654509738374!5m2!1sen!2stn"
        style={{ border: "0", width: "100%", height: "900px" }}
      /> */}
    </Layout>
  );
};

export default HomePage;
