import React, { useState, useEffect } from "react";

function Sushi({ name, image, price, setWallet, wallet, setNumEaten, api, id}) {
  const [isEaten, setIsEaten] = useState(false);

  useEffect(() => {
    fetch(`${api}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ isEaten }),
    });
    console.log(isEaten);
  }, [isEaten]);

  function handleIsEatenClick() {
    if (!isEaten && wallet >= price) {
      setIsEaten(true);
      setWallet((w) => w - price);
      setNumEaten((n) => n + 1);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsEatenClick}>
        {isEaten ? null : <img src={image} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
