function FormFirstName({ update }) {
  let firstName = "";

  function handleInputFirst(event) {
    firstName = event.target.value;
    update(firstName);
    // console.log(firstName);
  }

  return (
    <div>
      <p>Förnamn:</p>
      <input
        type="text"
        placeholder="Förnamn"
        onKeyUp={handleInputFirst}
      ></input>
    </div>
  );
}

export default FormFirstName;
