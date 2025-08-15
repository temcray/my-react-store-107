//imports
import { useState } from "react";

//logic
function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function decrease() {
    console.log("decreasing");
    let val = quantity - 1;
    setQuantity(val);
  }

  function increase() {
    console.log("increasing");
    let val = quantity + 1;
    setQuantity(val);
  }
  return (
    <div className="qt-picker">
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={decrease}
        disabled={quantity === 1}
      >
        {" "}
        -{" "}
      </button>
      <label>{quantity}</label>
      <button type="button" class="btn btn-primary btn-sm" onClick={increase}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}
//export
export default QuantityPicker;
