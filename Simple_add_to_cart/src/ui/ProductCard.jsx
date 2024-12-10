import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { id, image, name, price } = product;

  function handleAddToCart() {
    dispatch(addItem(product));
  }

  return (
    <div className="flex flex-col items-center  w-60 border border-stone-200 rounded-lg py-2 px-3">
      {/* image */}
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="py-2 text-center">
        {/* brand and model */}

        <p className="text-base mb-5">{name}</p>

        {/* price */}
        <div className=" flex items-center justify-between gap-8">
          <p>₹ {price}</p>
          <button
            className="px-3 py-1 bg-yellow-400 rounded-lg text-base"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
