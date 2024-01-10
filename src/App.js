import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="app">
      <h1>Weather Application</h1> <Weather />
      <small>
        This project is{" "}
        <a href="https://github.com/svitlana-tov/my-react-weather-app">
          open-sorced
        </a>{" "}
        on GitHub by Svitlana Tovkaniuk
      </small>
    </div>
  );
}

export default App;
