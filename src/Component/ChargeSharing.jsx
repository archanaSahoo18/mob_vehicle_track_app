// src/ChargeSharing.js
import React, { useState } from 'react';

const ChargeSharing = () => {
  const [charge, setCharge] = useState(20);

  const handleShareCharge = () => {
    alert(`Shared ${charge}% charge with network!`);
  };

  return (
    <div>
      <h2>Charge Sharing</h2>
      <p>Current Charge Available: {charge}%</p>
      <input
        type="number"
        value={charge}
        onChange={(e) => setCharge(e.target.value)}
        max="100"
        min="0"
      />
      <button onClick={handleShareCharge}>Share Charge</button>
    </div>
  );
};

export default ChargeSharing;
