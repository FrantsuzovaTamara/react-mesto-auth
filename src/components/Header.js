import React from "react";
import { NavLink } from "react-router-dom";

function Header({loggedIn, email}) {
  return (
    <header className="header">
      <a className="header__logo" href="#"></a>
      <nav className="header__entrance">
        {!loggedIn ? (
          <>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link_inactive" : ""}`
              }
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link_inactive" : ""}`
              }
            >
              Войти
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="header__link header__link_email"
            >
              {email}
            </NavLink>
            <NavLink to="/sign-in" className="header__link header__link_exit">
              Выйти
            </NavLink>
          </>
        )}
      </nav>
      <button className="header__menu"></button>
    </header>
  );
}

export default Header;
