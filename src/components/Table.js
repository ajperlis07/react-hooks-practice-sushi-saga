import React, { useState } from "react";

function Table({ numEaten, wallet }) {
  let emptyPlates = [];
  for (let i = 0; i < numEaten; i++) {
    emptyPlates.push(
      <div key={i} className="empty-plate" style={{ top: -7 * i }} />
    );
  }

  // // renders an empty plate for every element in the array
  // const emptyPlates = plates.map((_, index) => (
  //   <div className="empty-plate" style={{ top: -7 * index }} />
  // ));

  return (
    <>
      <h1 className="remaining">You have: ${wallet} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
