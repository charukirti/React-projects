import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalCartQuantity } from "../features/CartSlice";

export default function Header() {
  const totalCartItems = useSelector(getTotalCartQuantity);
  return (
    <header className="flex justify-between items-center px-5 sm:px-10  sticky top-0 bg-gray-100">
      <Link
        to="/"
        className="text-2xl sm:text-4xl font-bold font-oswald text-rose-500"
      >
        Cart
      </Link>
      <Link
        to="/cart"
        className=" relative px-5 py-4 sm:px-6 sm:py-5  flex items-center gap-1 text-2xl rounded-sm bg-transparent"
      >
        <BsCart className="text-yellow-500 hover:text-yellow-400" />
        <span className="absolute left-11 sm:left-12 lg:left-14 top-0 sm:top-2 text-lg text-rose-200 rounded-lg bg-rose-600 px-2">
          {totalCartItems}
        </span>
      </Link>
    </header>
  );
}
