import React, { useState } from "react";

function ATM({ setWallet }) {
  const [newAmount, setNewAmount] = useState("");

  function handleChange(e) {
    setNewAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWallet((w) => parseInt(w) + parseInt(newAmount));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="more-money">Enter More Money: </label>
      <input
        type="number"
        name="more-money"
        value={newAmount}
        onChange={handleChange}
      ></input>
      <button type="submit">Go!!</button>
    </form>
  );
}

export default ATM;
