import Inslut from "./components/Insult";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Inslut />
      <div className="faq">
        <p>
          This is a random Shakespare generator, refresh the page to get a new
          insult
        </p>
      </div>
    </div>
  );
}

export default App;
