// ItemCounter.jsx
import { useState } from "react";

export function ItemCounter() {
  const [amount, setAmount] = useState(1);

  const addItem = () => setAmount(amount + 1);
  const quitItem = () => amount > 1 && setAmount(amount - 1);

  return (
    <div className="contador">
      <button onClick={quitItem}>-</button>
      <span>{amount}</span>
      <button onClick={addItem}>+</button>
    </div>
  );
}

