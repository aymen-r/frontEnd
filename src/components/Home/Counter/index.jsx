import React from "react";
import "./style.css";

const CountUp = () => {
  return (
    <section class="counters">
      <div class="container">
        <div>
          <i class="fab fa-house fa-4x"></i>
          <div class="counter" data-target="60000">
            0
          </div>
          <h3>INSTALLED CAPACITY</h3>
        </div>
        <div>
          <i class="fab fa-house fa-4x"></i>
          <div class="counter" data-target="15000">
            0
          </div>
          <h3>KW INSTALLED</h3>
        </div>

        <div>
          <i class="fab fa-house fa-4x"></i>
          <div class="counter" data-target="5000">
            0
          </div>
          <h3>CUSTOMERS GLOBALLY</h3>
        </div>
      </div>
    </section>
  );
};

export default CountUp;
