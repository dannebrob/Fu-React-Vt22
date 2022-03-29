function FormLastName({ update }) {
  let lastName = "";

  function handleInputLast(event) {
    lastName = event.target.value;
    update(lastName);
  }

  return (
    <div>
      <p>Efternamn:</p>
      <input
        type="text"
        onKeyUp={handleInputLast}
        placeholder="Efternamn"
      ></input>
    </div>
  );
}

export default FormLastName;
