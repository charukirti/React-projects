import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItem from "../ui/CartItem";
import EmptyCart from "../ui/EmptyCart";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart.length);
  console.log(cart);
  return (
    <section className="mx-4 my-3">
      <Link
        to="/products"
        className="flex items-center justify-center gap-1 text-base text-slate-700 bg-yellow-300 px-2 py-1 w-28 rounded-lg"
      >
        <BiArrowBack className="text-base" />
        Products
      </Link>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 &&
          cart.map((item) => <CartItem key={item.id} item={item} />)}
      </ul>
    </section>
  );
}
