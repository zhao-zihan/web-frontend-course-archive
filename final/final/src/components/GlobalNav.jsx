// Icons used in the following code are adapted from https://heroicons.com/ per MIT license

import { useState } from "react";
import menu from "../utils/menu";
import "../stylesheets/GlobalNav.css";

function GlobalNav({ onNav }) {
  const list = menu.map((item) => {
    return (
      <li className="global-nav__item" key={item.name}>
        <a
          onClick={onNav}
          className="global-nav__link"
          href={item.path}
          data-target={item.name}
        >
          {item.name}
        </a>
      </li>
    );
  });

  const [showMenu, setShowMenu] = useState(false);
  const menuIcon = showMenu ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 global-nav__icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 global-nav__icon"
    >
      <path
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <nav className="global-nav">
      <button
        className="global-nav__button"
        aria-label={showMenu ? "Close Menu" : "Open Menu"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {menuIcon}
      </button>
      {showMenu && <ul className="global-nav__menu">{list}</ul>}
    </nav>
  );
}

export default GlobalNav;
