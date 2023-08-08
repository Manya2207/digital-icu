import logo from "./assets/logobicu.svg";
import backArrow from "./assets/backArrow.svg";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="inner-container">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="back-button">
          <span>
            <img src={backArrow} className="back-arrow" alt="arrow" />
          </span>
          Add Hospital
        </div>

        <div>
          {" "}
          <Form />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
