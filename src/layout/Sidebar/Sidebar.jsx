import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo_Dark from "../../../public/svg/Logo-Dark.svg";
import Logo from "../../../public/svg/Logo.svg";
import Diamond from "../../../public/svg/diamond.svg";
import Home from "../../../public/svg/home.svg";
import Moon from "../../../public/svg/moon.svg";
import Pie_chart from "../../../public/svg/pie_chart.svg";
import Profile_circled from "../../../public/svg/profile_circled.svg";
import Promotion from "../../../public/svg/promotion.svg";
import Store from "../../../public/svg/store.svg";
import Sun from "../../../public/svg/sun.svg";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Sidebar.css";

function Sidebar() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "");
  const dropDownRef = useRef();

  useEffect(() => {
    theme === "light" ? setIsDark(false) : setIsDark(true);
    isDark === true ? document.body.classList.add("dark") : document.body.classList.remove("dark");
  }, [theme, isDark]);

  const lightHandler = () => {
    setIsDark(false);
    setTheme("light");
    document.body.classList.remove("dark");
  };

  const darkHandler = () => {
    setIsDark(true);
    setTheme("dark");
    document.body.classList.add("dark");
  };

  return (
    <div className="sidebar">
      <div className="logo-app">
        <NavLink to="/" className="sidebar__logo">
          <img src={isDark ? Logo_Dark : Logo} alt="" />
        </NavLink>
      </div>
      <div className="sidebar__wrapper">
        <ul className="menu">
          <NavLink to="/" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img src={Home} alt="" />
            <span className="menu__link-text">Home</span>
          </NavLink>
          <NavLink to="/products" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img src={Diamond} alt="" />
            <span className="menu__link-text">Products</span>
          </NavLink>
          {/* 
          <li className="menu__item">
            <div className="menu__item-wrapper" ref={dropDownRef} onClick={dropDownHandler}>
              <span className="menu__item-left">
                <img className="menu__item-icon" src={Diamond} alt="" />
                <span className="menu__item-text">Products</span>
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#6F767E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
              <ul className="menu__item-list">
              <NavLink to="/products/dashboard" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
                <span className="menu__link-text">Dashboard</span>
              </NavLink>
              <NavLink to="/products/drafts" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
                <span className="menu__link-text">Drafts</span>
              </NavLink>
              <NavLink to="/products/released" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
                <span className="menu__link-text">Released</span>
              </NavLink>
              <NavLink to="/products/comments" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
                <span className="menu__link-text">Comments</span>
              </NavLink>
              <NavLink to="/products/scheduled" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
                <span className="menu__link-text">Scheduled</span>
              </NavLink>
              </ul>
          </li>
          */}
          <NavLink to="/customers" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img className="menu__link-icon" src={Pie_chart} alt="" />
            <span className="menu__link-text">Customers</span>
          </NavLink>
          <NavLink to="/shop" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img className="menu__link-icon" src={Profile_circled} alt="" />
            <span className="menu__link-text">Shop</span>
          </NavLink>
          <NavLink to="/income" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img className="menu__link-icon" src={Promotion} alt="" />
            <span className="menu__link-text">Income</span>
          </NavLink>
          <NavLink to="/promote" className={(link) => (link.isActive ? "menu__link menu__link--active" : "menu__link")}>
            <img className="menu__link-icon" src={Store} alt="" />
            <span className="menu__link-text">Promote</span>
          </NavLink>
        </ul>
        <div className="sidebar-theme">
          <div className="sidebar-theme__wrapper">
            <div className="sidebar-theme__content">
              <span className={!isDark ? "sidebar-theme__bg sidebar-theme__bg-light" : "sidebar-theme__bg sidebar-theme__bg-dark"}></span>
              <span className="sidebar-theme__light sidebar-theme__btn sidebar-theme__btn--active" onClick={lightHandler}>
                <span className="sidebar-theme__text">Light</span>
              </span>
              <span className="sidebar-theme__dark sidebar-theme__btn" onClick={darkHandler}>
                <span className="sidebar-theme__text">Dark</span>
              </span>
            </div>
            <div className="sidebar-theme__switch">
              {isDark ? <img onClick={lightHandler} src={Sun} alt="" /> : <img onClick={darkHandler} src={Moon} alt="" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
