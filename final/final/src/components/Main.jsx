import Home from "./Home";
import Cards from "./Cards.jsx";
import Register from "./Register";
import Faq from "./Faq";
import License from "./License";
import Privacy from "./Privacy";
import Feedback from "./Feedback";

function Main({ page }) {
  return (
    <main className="main grid">
      {page === "Home" && <Home />}
      {page === "Cards" && <Cards />}
      {page === "Register" && <Register />}
      {page === "FAQ" && <Faq />}
      {page === "Feedback" && <Feedback />}
      {page === "License" && <License />}
      {page === "Privacy" && <Privacy />}
    </main>
  );
}

export default Main;
