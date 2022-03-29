import "./FormAproveCheckbox.css";

function FormCheckBox({ update }) {
  let aprove = false;

  function handleInputAprove(event) {
    aprove = event.target.value;
    update(aprove);
    console.log(aprove);
  }

  return (
    <div className="form-checkbox">
      <input
        onClick={handleInputAprove}
        type="checkbox"
        value={true}
        placeholder="Checkbox"
      ></input>
      <p>Jag godkänner vilkoren</p>
    </div>
  );
}

export default FormCheckBox;
