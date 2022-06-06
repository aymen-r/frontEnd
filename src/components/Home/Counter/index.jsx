import React from "react";
import "./style.css";
import CountUp from "react-countup";
import {
  GiEcology,
  GiSolarPower,
  GiGreenhouse,
  GiFactory,
  GiShakingHands,
} from "react-icons/gi";
import { MdOutlineLocalShipping, MdOutlineAddBusiness } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";

const CountUpComponent = () => {
  return (
    <section class="counters">
      <div class="container">
        <div>
          {/* <i class="fab fa-house fa-4x"></i> */}
          {/* <img src="/images-logos/png/001-eco-house.png" alt="" /> */}

          <GiFactory style={{ fontSize: "80px" }} />
          <div class="counter" data-target="60000">
            <CountUp end={3} duration={2.75} />
            GW
          </div>
          <h3>GLOBAL MODULE CAPACITY</h3>
        </div>
        <div>
          <MdOutlineLocalShipping style={{ fontSize: "80px" }} />
          <div class="counter" data-target="15000">
            <CountUp end={2} duration={2.75} /> GW
          </div>
          <h3>GLOBAL SHIPMENT</h3>
        </div>

        <div>
          <MdOutlineAddBusiness style={{ fontSize: "80px" }} />
          <div class="counter" data-target="5000">
            <CountUp end={10} duration={2.75} /> +
          </div>
          <h3>SALES & SERVICE OFFICES</h3>
        </div>
        <div>
          <IoMdGlobe style={{ fontSize: "80px" }} />
          <div class="counter" data-target="5000">
            <CountUp end={200} duration={2.75} />+
          </div>
          <h3>COUNTRIES</h3>
        </div>
        <div>
          <GiShakingHands style={{ fontSize: "80px" }} />
          <div class="counter" data-target="5000">
            <CountUp end={100} duration={2.75} /> +
          </div>
          <h3>PARTNERS</h3>
        </div>
      </div>
    </section>
  );
};

export default CountUpComponent;
