import React from "react";
import {Link} from "react-router-dom";
// import PropTypes from "prop-types";

import {SlSocialVkontakte} from "react-icons/sl";
import {SlSocialInstagram} from "react-icons/sl";
import {HiOutlineMenuAlt1} from "react-icons/hi";
import {FaSearch} from "react-icons/fa";

import logo from "../../images/icon3.png"

import "./Header.scss"

const Header = () => {

  return (
    <header className="header-wrapper">
      <div className={"header-content"}>
        <div className={"header-menu-button"}>
          <div className={"header-menu-button-wrapper"}><HiOutlineMenuAlt1/></div>
        </div>

        <div className={"header-logo"}>
          <Link to={"/main"}>
            <div className={"header-logo-content"}>
              <img src={logo} alt="РОСТИНВЕСТГРУПП"/>
            </div>
          </Link>
        </div>

        <div className={"header-search"}>
          <input type="text" placeholder={"Поиск..."}/>
          <div className="m-glass">
            <FaSearch/>
          </div>
        </div>

        <div className={"header-phone"}>
          <div className={"header-phone-content"}>
            <div className={"header-phone-number"}>+7 (999) 123-12-12</div>
            <div className={"header-request-call"}>ЗАКАЗАТЬ ЗВОНОК</div>
          </div>
        </div>

        <div className={"header-socials"}>
          <div className={"header-social-wrapper vk"}><SlSocialVkontakte/></div>
          <div className={"header-social-wrapper insta"}><SlSocialInstagram/></div>
        </div>
      </div>
    </header>
  );
}
//
// Header.propTypes = {
//   logout: PropTypes.func.isRequired,
// };

export default Header;
