import { BsTrash } from "react-icons/bs";
import { getCurrentQuantityById } from "../features/CartSlice";
import QuantityUpdater from "./QuantityUpdater";
import { useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";

export default function CartItem({ item }) {
  const { id, name, image, price, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  console.log(currentQuantity);

  return (
    <li className="py-3 flex justify-evenly items-center">
      <div className="flex items-center justify-between gap-4">
        <img src={image} alt="" className="w-12" />
        <div>
          <p className="text-sm">
            {quantity} x {name}
          </p>
          <p>₹ {price}</p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-6">
        <p className="text-sm font-bold">₹ {totalPrice}</p>

        <QuantityUpdater currentQuantity={currentQuantity} itemId={id} />

        <DeleteItem itemId={id} />
      </div>
    </li>
  );
}
