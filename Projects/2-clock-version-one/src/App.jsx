import ClockHeading from "./Components/ClockHeading";
import ClockMoto from "./Components/ClockMoto";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockMoto />
      <CurrentTime />
    </center>
  );
}

export default App;
