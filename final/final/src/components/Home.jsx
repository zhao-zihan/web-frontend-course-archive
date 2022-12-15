import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1532191343016-47bf741b8b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="A jellyfish swimming in the deep blue ocean"
        className="home__image"
      />
      <h2 className="home__title">This Website Is All About Jellyfish</h2>
      <p className="home__paragraph">
        Jellyfish might not be the most charismatic ocean animals, but they are
        a natural and important part of life in the Atlantic and in the Celtic
        and Irish Sea. Drifting through the water like translucent aliens, they
        can be mesmerizingly beautiful. We are familiar with the characteristic
        little blobs adorning both Iveragh and Llŷn shorelines. We see them on
        our strolls and often retreat at the site of one. But do we ever stop to
        wonder, what exactly is a jellyfish? Let's find out!
      </p>
    </div>
  );
}

export default Home;
