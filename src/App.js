import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> hello </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by Dail Williams and is{" "}
          <a href="https://github.com/drkirkp/dictionary-project">
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://jovial-dasik-26072b.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
