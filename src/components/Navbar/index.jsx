import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavCard from "./NavCard";
import { data } from "./NavCard/data";
import "./style.css";

const NavDesktop = () => {
  const [stick, setStick] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(stick);
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
                <img src="/images-logos/logo -thager.png" alt="" srcset="" />
              </div>
            </Link>
          </div>
          <div className="right flex">
            <div className="search-box">
              <button className="btn-search">
                <i className="fas fa-search"></i>
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
            <div className="nav-link-top">
              <span>About Us</span>
            </div>
            <div className="nav-link-top">
              <span>Login</span>
            </div>
          </div>
        </nav>
        <nav className="navbar-second">
          <ul className="navbar-second-list flex">
            <li>
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li className="flex products">
              <Link to={"/products"}>Products & Solutions</Link>
              <ul className="sub-menu sub-menu-open">
                {data.map((el) => (
                  <li key={el.id}>
                    <Link to={"/products"}>
                      <NavCard item={el} />
                    </Link>
                  </li>
                ))}
                {/* <li>
                  <Link to={"/"}>Solar Panels</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Inverters</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Batteries</Link>
                </li>
                <li>
                  <Link to={"/"}>Solar Street light</Link>
                </li>
                <li>
                  <Link to={"/"}>PV Combiner Box & Cables</Link>
                </li>
                <li>
                  <Link to={"/"}>Structure & Fixing</Link>
                </li> */}
              </ul>
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              <a href="#">ON the Way</a>
            </li>
            <li>
              <a href="#">Service & Support</a>
              <i className=" fa-solid fa-angle-down"></i>
            </li>
            <li>
              <a href="#">News & Videos</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavDesktop;
