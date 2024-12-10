import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/CartSlice";

export default function DeleteItem({ itemId }) {
  const dispatch = useDispatch();

  function deleteitem() {
    dispatch(deleteItem(itemId));
  }
  return (
    <button className="text-2xl" onClick={deleteitem}>
      <BsTrash />
    </button>
  );
}
