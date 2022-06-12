import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./nav2.css";

import { AiOutlineGlobal, AiFillCaretRight } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import SearchBox from "./SearchBox";

// submenu
import image1 from "../Home/ProdSolutionSlides/solar-energy-panel.svg";
import image2 from "../Home/ProdSolutionSlides/icons8.png";
import image3 from "../Home/ProdSolutionSlides/setting.svg";
import image5 from "../Home/ProdSolutionSlides/solar-energy.svg";
import { GiStreetLight } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";

const NavDesktop = () => {
  const [stick, setStick] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div className={stick ? "navbar sticky" : "navbar"}>
        <nav className="navbar-one flex">
          <div className="left flex">
            <Link to={"/"}>
              <div className="logo">
                <img src="/logo1.png" alt="" srcset="" />
              </div>
            </Link>
          </div>
          <SearchBox />
          <div className="right flex">
            <div className="nav-link-top flex">
              <RiProfileLine
                style={{ fontSize: "30px", color: "#ccc !important" }}
              />
              <span>About Us</span>
            </div>
            <div
              className="nav-link-top flex lang"
              onClick={() => setOpen(!open)}
            >
              <AiOutlineGlobal
                style={{ fontSize: "30px", color: "#ccc !important" }}
              />
              <span>Language</span>

              <IoIosArrowDown />
              <ul
                className={open ? "language-list lang-open" : "language-list"}
              >
                <li className="language-item">English</li>
                <li className="language-item">French</li>
                <li className="language-item">Arabic</li>
              </ul>
            </div>
            <div className="nav-link-top">
              <span>Login</span>
            </div>
          </div>
        </nav>
        <nav class="nav-bar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={"/products"}>
                Products & Solutions <i className="fa-solid fa-angle-down"></i>
              </Link>
              <div class="mega-menu">
                <ul class="inner-mega-menu">
                  <li className="inner-item">
                    <img className="menu-image" src={image1} alt="" />
                    <p> Solar Panels</p>
                    <ul className="innermenu2">
                      <li className="innermenu2-item">Half Cell</li>
                      <li className="innermenu2-item">Bifacial</li>
                    </ul>
                    <AiFillCaretRight className="right-arrow" />
                  </li>
                  <li className="inner-item">
                    <img className="menu-image" src={image2} alt="" />
                    <p>Solar Inverters</p>
                    <ul className="innermenu2">
                      <li className="innermenu2-item">Off Grid</li>
                      <li className="innermenu2-item">On Grid</li>
                      <li className="innermenu2-item">Pump</li>
                    </ul>
                    <AiFillCaretRight className="right-arrow" />
                  </li>
                  <li className="inner-item">
                    <img className="menu-image" src={image5} alt="" />
                    <p>Solar Batteries</p>
                    <ul className="innermenu2">
                      <li className="innermenu2-item">AGM Batteries</li>
                      <li className="innermenu2-item">Lithium Batteries</li>
                      <li className="innermenu2-item">Gel Batteries</li>
                      <li className="innermenu2-item">Tubular Battery</li>
                    </ul>
                    <AiFillCaretRight className="right-arrow" />
                  </li>
                  <li className="inner-item">
                    <GiStreetLight className="menu-image" />
                    <p>Solar Street Lights</p>
                  </li>
                  <li className="inner-item">
                    {" "}
                    <img className="menu-image" src={image3} alt="" />
                    <p> PV COMBINER BOX & CABLES</p>
                  </li>
                  <li className="inner-item">
                    <MdConstruction className="menu-image" />
                    <p> STRUCTURE & FIXING</p>
                  </li>
                </ul>
              </div>
            </li>

            <li className="navbar-item">
              <a href="#">ON the Way</a>
            </li>

            <li className="navbar-item">
              {" "}
              <a href="#">Service & Support</a>
              <i className=" fa-solid fa-angle-down"></i>
              <div
                class="mega-menu"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                }}
              >
                <div class="inner-mega-menu">
                  <p>Get an estimate</p>
                </div>
                <div class="inner-mega-menu">
                  <p>Track your order</p>
                </div>
                <div class="inner-mega-menu">
                  <p>Downland data sheet</p>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="#">News & Videos</a>
            </li>
            <li className="navbar-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavDesktop;
