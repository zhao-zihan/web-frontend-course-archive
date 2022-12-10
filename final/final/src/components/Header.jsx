import GlobalNav from "./GlobalNav";

import "../stylesheets/Header.css";

function Header({ onNav }) {
  return (
    <header className="header grid">
      <a className="header__icon-link" href="index.html">
        <img
          className="header__icon-image"
          src="https://images.unsplash.com/photo-1517334039387-b226c9bb90c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80"
          alt="Jellyfish floating in the ocean"
        />
      </a>
      <h1 className="header__title">Jellyfish - Spirit of the Sea</h1>
      <GlobalNav onNav={onNav} />
    </header>
  );
}

export default Header;
