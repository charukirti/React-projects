import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalCartPrice, getTotalCartQuantity } from "../features/CartSlice";

export default function Footer() {
  const totoalItemsInCart = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  return (
    <footer className="bg-stone-800 p-4 px-4 py-4 text-sm md:text-base uppercase text-stone-200 sm:px-6 flex items-center justify-between sticky bottom-0 left-0">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totoalItemsInCart} products</span>
        <span>₹ {totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </footer>
  );
}
