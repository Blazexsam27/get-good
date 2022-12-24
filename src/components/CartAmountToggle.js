import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function CartAmountToggle({ amount, setIncrease, setDecrease }) {
  return (
    <div className="card-button">
      <div className="amount-toggle">
        <button onClick={setDecrease}>
          <FaMinus />
        </button>
        <h3>{amount}</h3>
        <button onClick={setIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
