import React from "react";
import "./style.css";
import CountUp from "react-countup";
import { GiEcology, GiSolarPower, GiGreenhouse } from "react-icons/gi";

const CountUpComponent = () => {
  return (
    <section class="counters">
      <div class="container">
        <div>
          {/* <i class="fab fa-house fa-4x"></i> */}
          {/* <img src="/images-logos/png/001-eco-house.png" alt="" /> */}

          <GiGreenhouse style={{ fontSize: "80px" }} />
          <div class="counter" data-target="60000">
            <CountUp end={50} duration={2.75} />+
          </div>
          <h3>INSTALLED CAPACITY</h3>
        </div>
        <div>
          <GiSolarPower style={{ fontSize: "80px" }} />
          <div class="counter" data-target="15000">
            <CountUp end={12000} duration={2.75} />+
          </div>
          <h3>KW INSTALLED</h3>
        </div>

        <div>
          <GiEcology style={{ fontSize: "80px" }} />
          <div class="counter" data-target="5000">
            <CountUp end={100} duration={2.75} />+
          </div>
          <h3>CUSTOMERS GLOBALLY</h3>
        </div>
      </div>
    </section>
  );
};

export default CountUpComponent;
