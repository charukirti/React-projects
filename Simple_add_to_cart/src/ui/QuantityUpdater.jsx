import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/CartSlice";

const base =
  "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 px-2.5 py-1 md:px-3.5 md:py-2 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";

export default function QuantityUpdater({ currentQuantity, itemId }) {
  const dispatch = useDispatch();

  function increaseQuantity() {
    dispatch(increaseItemQuantity(itemId));
  }

  function decreaseQuantity() {
    dispatch(decreaseItemQuantity(itemId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button className={base} onClick={decreaseQuantity}>
        -
      </button>
      {currentQuantity}
      <button className={base} onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}
