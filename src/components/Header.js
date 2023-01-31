import React from "react";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#"></a>
      <div className="header__entrance">
        <p className="header__email">t.f.66625262@yandex.ru</p>
        <button type="button" className="header__button">Выйти</button>
      </div>
      <button className="header__menu"></button>
    </header>
  );
}

export default Header;
