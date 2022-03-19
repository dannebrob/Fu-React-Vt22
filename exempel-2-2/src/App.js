import "./App.css";
import ToDoItem from "./components/TodoItem";

//funktionella komponenter bhöver börja med en stor bokstav.
//För att React ska veta att det är en kompoment.
function App() {
  const heading = "My ToDo App";

  return (
    <div className="App">
      <h1>{heading}</h1> {/* Här kan jag skriva en kommentar som valigt i JS */}
      <ToDoItem task="Köp kaffe" done={false} />
      <ToDoItem task="Hämta på förskolan" done={false} />
      <ToDoItem task="Köp bröd" done={true} />
      <ToDoItem task="Städa huset" done={true} />
      <ToDoItem task="Drick vatten" done={false} />
    </div>
  );
}

export default App;
