import "./stylesheets/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("Home");

  function onNav(event) {
    const target = event.target.dataset.target;
    if (!target || target === "GitHub") {
      return;
    }
    event.preventDefault();
    setPage(target);
  }

  return (
    <>
      <a
        href="#main"
        className="skip-to-main"
        title="Click here to skip to main content"
        aria-label="Click here to skip to main content"
      >
        Skip to main content
      </a>
      <div className="app">
        <Header onNav={onNav} />
        <Main onNav={onNav} page={page} />
        <Footer onNav={onNav} />
      </div>
    </>
  );
}

export default App;
