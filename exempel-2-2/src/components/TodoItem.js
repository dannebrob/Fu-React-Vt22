import "./TodoItem.css";

//Här kan obj destruction användas som props, för att inte behöva skriva props.task osv
//function TodoItem(props) -> props.done
function TodoItem({ task, done }) {
  return (
    <li className="item">
      {task} - {done ? "Klar" : "Ej Klar"} {/* tenary operator */}
      {/* {task} - {done ? <h2>Hej</h2> : <p>Paragraf</p>}{" "}
      Annat kan läggas in i tenary operator, så som h2 eller p, eller varför inte två komponenter?*/}
    </li>
  );
}

export default TodoItem;
