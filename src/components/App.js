import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import ATM from "./ATM";

const API = "http://localhost:3001/sushis";

function App() {
  const [wallet, setWallet] = useState(0);
  const [numEaten, setNumEaten] = useState(0);

  return (
    <div className="app">
      <ATM setWallet={setWallet} />
      <SushiContainer
        api={API}
        setWallet={setWallet}
        wallet={wallet}
        setNumEaten={setNumEaten}
      />
      <Table wallet={wallet} numEaten={numEaten} />
    </div>
  );
}

export default App;
