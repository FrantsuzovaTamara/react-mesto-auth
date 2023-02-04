import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#"></a>
      <nav className="header__entrance">
        <p className=""></p>
        <NavLink to="/sign-up" className={({isActive}) => `header__link ${isActive ? "header__link_inactive" : ""}`}>
            Регистрация
        </NavLink>
        <NavLink to="/sign-in" className={({isActive}) => `header__link ${isActive ? "header__link_inactive" : ""}`}>
            Войти
        </NavLink>
        <NavLink to="/" className={({isActive}) => `header__link header__link_email ${isActive ? "" : "header__link_inactive"}`}>
          t.f.66625262@yandex.ru
        </NavLink>
        <NavLink to="/sign-in" className={({isActive}) => `header__link header__link_exit ${isActive ? "header__link_inactive" : ""}`}>
            Выйти
        </NavLink>
      </nav>
      <button className="header__menu"></button>
    </header>
  );
}

export default Header;
