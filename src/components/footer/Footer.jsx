import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="container footer-distributed">
      <div class="footer-left">
        <div>
          <img
            className="logo1"
            src="/images-logos/logo -thager.png"
            alt="IMG-LOGO"
          />
        </div>

        <p class="footer-links text-base">
          “Thaghr Al-Rafidain” was established in Dubai – United Arab Emirates
          in 2006, to work in areas that provide opportunities to contribute to
          the development of the business sector, trade and industry, including
          the transition to clean solar energy and renewable energy projects are
          implementing fully solar-powered urban complexes.
        </p>

        <p class="footer-company-name">Thaghr Al-Rafidain © 2022</p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="footer-right">
        <p className="text-base">GET IN TOUCH</p>
        <p className="text-base">GET INSTANT DEALS AND EXCLUSIVE OFFERS!</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
