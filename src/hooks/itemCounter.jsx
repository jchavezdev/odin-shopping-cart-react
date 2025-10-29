//itemCounter
import { useState } from "react";

export function ItemCounter({ onChangeAmount }) {
  const [amount, setAmount] = useState(1);

  const addItem = () => {
    setAmount(prev => {
      const newValue = prev + 1;
      onChangeAmount?.(newValue);
      return newValue;
    });
  };

  const quitItem = () => {
    setAmount(prev => {
      const newValue = prev > 1 ? prev - 1 : 1;
      onChangeAmount?.(newValue);
      return newValue;
    });
  };

  return (
    <div className="contador">
      <button onClick={quitItem}>-</button>
      <span>{amount}</span>
      <button onClick={addItem}>+</button>
    </div>
  );
}


