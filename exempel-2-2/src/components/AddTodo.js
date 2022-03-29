function AddTodo({ update }) {
  let newTodo = "";

  function inputHandler(event) {
    console.log(event.target.value);
    newTodo = event.target.value;
  }

  function handelClick() {
    console.log("lägger till:");
    update(newTodo);
  }

  return (
    <div>
      <input
        onKeyUp={inputHandler}
        type="text"
        placeholder="Vad vill du göra?"
      />
      <button onClick={handelClick}>Lägg till</button>
    </div>
  );
}
export default AddTodo;
