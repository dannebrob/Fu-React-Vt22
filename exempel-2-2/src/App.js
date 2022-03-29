import "./App.css";
import ToDoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
//funktionella komponenter bhöver börja med en stor bokstav.
//För att React ska veta att det är en kompoment.
function App() {
  const heading = "My ToDo App";

  let todos = [
    { task: "Köpa kaffe", done: false, id: 0 },
    { task: "Hämta på förskolan", done: false, id: 1 },
    { task: "Köpa blöjor", done: false, id: 2 },
    { task: "Klippa häcken", done: true, id: 3 },
    { task: "Fredagsmys", done: false, id: 4 },
    { task: "Äta kaka", done: false, id: 5 },
  ];

  function updateTodo(newTodo) {
    console.log("i updateTodo");

    const todo = {
      taks: newTodo,
      done: false,
      id: todos.length + 1,
    };
    todos.push(todo);
    console.log(todos);
  }

  return (
    <div className="App">
      <h1>{heading}</h1> {/* Här kan jag skriva en kommentar som valigt i JS */}
      <AddTodo update={updateTodo} />
      {/*Loopar ut med array metoden map så det blir dynamisk. OBS tänk på att Key måste vara unikt */}
      {todos.map((todo) => {
        console.log(todos.task);
        return <ToDoItem task={todo.task} done={todo.done} key={todo.id} />;
      })}
      {/*Hårdkodade komponeter*/}
      {/* <ToDoItem task={todos[0].task} done={todos[0].done} />
      <ToDoItem task={todos[1].task} done={todos[1].done} />
      <ToDoItem task={todos[2].task} done={todos[2].done} />
      <ToDoItem task={todos[3].task} done={todos[3].done} />
      <ToDoItem task={todos[4].task} done={todos[4].done} /> */}
    </div>
  );
}

// {
//   todos.map((todo) => {
//     return todo.id;
//   });
// }

export default App;
