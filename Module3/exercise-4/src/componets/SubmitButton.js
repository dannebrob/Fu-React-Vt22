import "./SubmitButton.css";

function SubmitButton({ show }) {
  let ny = "";
  function handleClick() {
    console.log("Du klickade");
    console.log(show());
  }

  return (
    <div className="submit-btn">
      <button onClick={handleClick}>Boka biljetter</button>
    </div>
  );
}

export default SubmitButton;
