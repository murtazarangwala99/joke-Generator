import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  let shouldLoad = true;

  async function genreateJoke() {
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }
  useEffect(() => {
    if (shouldLoad) {
      // eslint-disable-next-line
      shouldLoad = false.current;
      genreateJoke();
    }
  }, []);

  return (
    <>
      <div className="container">
        <h3>Don't Laugh Challenge!</h3>
        <div className="joke">{joke}</div>
        <button className="btn" onClick={() => genreateJoke()}>
          Generate Joke
        </button>
      </div>
    </>
  );
}

export default App;
