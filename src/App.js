import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />
        <footer>
          This project was coded by Maryn McNamara and is{" "}
          <a
            href="https://github.com/marynmcnamara/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
