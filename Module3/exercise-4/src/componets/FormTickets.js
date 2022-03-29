function FormTickets({ update }) {
  let amounts = "";

  function handleInputAmount(event) {
    amounts = event.target.value;
    update(amounts);
  }

  return (
    <div>
      <p>Antal Biljetter</p>
      <select onClick={handleInputAmount}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
      </select>
    </div>
  );
}

export default FormTickets;
