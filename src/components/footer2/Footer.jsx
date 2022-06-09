import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="f-container">
          <div class="f-left f-section">
            <h2>About Us</h2>
            <div class="content">
              <p>
                “Thaghr Al-Rafidain” was established in Dubai – United Arab
                Emirates in 2006, to work in areas that provide opportunities to
                contribute to the development of the business sector, trade and
                industry, including the transition to clean solar energy and
                renewable energy projects are implementing fully solar-powered
                urban complexes.
              </p>
              <div class="social">
                <a href="#">
                  <span class="fab fa-facebook-f"></span>
                </a>
                <a href="#">
                  <span class="fab fa-instagram"></span>
                </a>
                <a href="#">
                  <span class="fab fa-twitter"></span>
                </a>
                <a href="#">
                  <span class="fab fa-linkedin"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="center f-section">
            <h2>Contact Us</h2>
            <div class="content">
              <div class="place">
                <span class="fas fa-map-marker-alt"></span>
                <span class="text"> Dubai, UAE</span>
              </div>
              <div class="phone">
                <span class="fas fa-phone-alt"></span>
                <span class="text"> +971 423 463 74</span>
              </div>
              <div class="email">
                <span class="fas fa-envelope"></span>
                <span class="text"> info@Thageralrafedain.ae</span>
                <span class="text"> sales@thageralrafedain.ae</span>
              </div>
            </div>
          </div>

          <div class="right f-section">
            <h2>Subscribe</h2>
            <div class="content">
              <form action="#">
                <div class="email">
                  <div class="text">Email*</div>
                </div>
                <input type="email" required />
                <div class="btn">
                  <button type="submit">SUBSCRIBE</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <center>
            <div>
              <span>Powered By © 2022 | All Rights Reserved | Made By</span>
            </div>
          </center>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
