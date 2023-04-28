import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import profile from "../images/profile.svg";

import "./Header.css";

const Header = ({}) => {
  const handleClick = (id) => () => {
    const sectionElement = document.querySelector(`#${id}`); // #{что_передадим}
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="cinema-logo" />
      <ul className="header-links">
        <li onClick={handleClick("films")}>Фильмы</li>
        <li onClick={handleClick("forum")}>Треды</li>
        <li onClick={handleClick("news")}>Новости</li>
      </ul>
      <div className="header-buttons">
        <button className="header-search-button" type="button">
          <img className="header-search-icon" src={search} alt="Поиск" />
        </button>
        <button className="header-profile-button" type="button">
          <img className="header-profile-icon" src={profile} alt="Профиль" />
        </button>
      </div>
    </header>
  );
};

export default Header;
