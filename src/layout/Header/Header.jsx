import { Link } from "react-router-dom";
import Add from "../../../public/svg/add.svg";
import Message from "../../../public/svg/message.svg";
import Notification from "../../../public/svg/notification.svg";
import Search from "../../../public/svg/search.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header-left">
          <label htmlFor="search" className="header-search">
            <div className="header-search__content">
              <img className="header-search__icon" src={Search} alt="" />
              <input
                type="text"
                id="search"
                className="header-search__input"
                placeholder="Search or type a command"
                autoComplete="off"
              />
            </div>
            <div className="header-search__shortcut">⌘ F</div>
          </label>
        </div>
        <div className="header-right">
          <div className="header-right__access">
            <div className="header-right__hamburger">
              <span className="header-left__hamburger-line"></span>
              <span className="header-left__hamburger-line"></span>
            </div>
            <div className="header-right__search">
              <img src={Search} alt="" />
            </div>
            <div className="header-create">
              <img src={Add} alt="" />
              Create
            </div>
            <div className="header-message">
              <img src={Message} alt="" />
            </div>
            <div className="header-notification">
              <img src={Notification} alt="" />
            </div>
            <div className="header-profile">
              <img
                className="header-profile__image"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <div className="header-profile__menu">
                <div className="header-profile__menu-section">
                  <Link className="header-profile__menu-link" to="">
                    Profile
                  </Link>
                  <Link className="header-profile__menu-link" to="">
                    Edit profile
                  </Link>
                </div>
                <div className="header-profile__menu-section">
                  <Link className="header-profile__menu-link" to="">
                    Analytics
                  </Link>
                  <Link className="header-profile__menu-link" to="">
                    Affiliate center
                  </Link>
                  <Link className="header-profile__menu-link" to="">
                    Explore authors
                  </Link>
                </div>

                <div className="header-profile__menu-section">
                  <Link className="header-profile__menu-link" to="">
                    Upgrade to Pro
                  </Link>
                </div>

                <div className="header-profile__menu-section">
                  <Link className="header-profile__menu-link" to="">
                    Account settings
                  </Link>
                  <Link className="header-profile__menu-link" to="">
                    Log out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right__auth">
            <div className="header-right__hamburger">
              <span className="header-left__hamburger-line"></span>
              <span className="header-left__hamburger-line"></span>
            </div>
            <div className="header-right__auth-wrapper">
              <div className="header-right__search">
                <img src={Search} alt="" />
              </div>
              <Link to="/login" className="header-right__auth-login">
                Sign in
              </Link>
              <Link to="/register" className="header-right__auth-register">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
