import "./FormClass.css";

function FormClass({ update }) {
  let userClass = "";

  function handleInputClass(event) {
    userClass = event.target.value;
    update(userClass);
  }

  return (
    <div className="radio-container">
      <div>
        <input
          onClick={handleInputClass}
          name="radio"
          value="1a klass"
          type="radio"
          className="checkbox-round"
        ></input>
        <label>1:a klass</label>
      </div>
      <div>
        <input
          onClick={handleInputClass}
          name="radio"
          value="2a klass"
          type="radio"
          className="checkbox-round"
        ></input>
        <label>2:a klass</label>
      </div>
    </div>
  );
}

export default FormClass;
