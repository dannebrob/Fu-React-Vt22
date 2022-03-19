import "./TodoItem.css";

//Här kan obj destruction användas som props, för att inte behöva skriva props.task osv
//function TodoItem(props) -> props.done
function TodoItem({ task, done }) {
  let isDone = "Ej klar";
  if (done) {
    isDone = "Färdig";
  }
  return (
    <li className="item">
      {task} - {isDone}
    </li>
  );
}

export default TodoItem;
