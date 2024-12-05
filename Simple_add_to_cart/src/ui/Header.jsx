import { NavLink } from "react-router";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex justify-between bg-neutral-200 px-4 py-3">
      <NavLink
        to="/"
        className="text-xl sm:text-3xl font-bold text-neutral-700"
      >
        AddToCart
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `text-2xl sm:text-3xl ${
            isActive ? "text-amber-800" : " text-amber-600"
          }`
        }
      >
        <LuShoppingCart />
      </NavLink>
    </header>
  );
}
