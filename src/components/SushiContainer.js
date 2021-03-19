import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ api, setWallet, wallet, setNumEaten }) {
  const [sushiArr, setSushiArr] = useState([]);
  const [sushiSpot, setSushiSpot] = useState(0);

  useEffect(() => {
    fetch(api)
      .then((r) => r.json())
      .then((sushi) => {
        if (sushiSpot > sushi.length - 4) {
          setSushiSpot((sushiSpot) => sushiSpot - sushi.length);
        }
        console.log(sushiSpot);
        setSushiArr(sushi.slice(sushiSpot, sushiSpot + 4));
      });
  }, [sushiSpot]);

  const fourSushi = sushiArr.map((sushi) => {
    return (
      <Sushi
        id={sushi.id}
        name={sushi.name}
        image={sushi.img_url}
        price={sushi.price}
        setWallet={setWallet}
        wallet={wallet}
        setNumEaten={setNumEaten}
        api={api}
      />
    );
  });

  function nextSushiPlz() {
    setSushiSpot(sushiSpot + 4);
  }

  return (
    <div className="belt">
      {fourSushi}
      <MoreButton nextSushiPlz={nextSushiPlz} />
    </div>
  );
}

export default SushiContainer;
