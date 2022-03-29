function FormTitle({ update }) {
  let title = "";

  function handleInputTitle(event) {
    title = event.target.value;
    update(title);
  }

  return (
    <div>
      <p>Titel:</p>
      <select onClick={handleInputTitle}>
        <option>Mr.</option>
        <option>Mrs.</option>
        <option>Miss</option>
        <option>Unspecific</option>
      </select>
    </div>
  );
}

export default FormTitle;
