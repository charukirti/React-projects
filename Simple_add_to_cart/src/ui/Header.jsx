import { BsCart } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 sm:px-10 mt-2 ">
      <h1 className="text-2xl sm:text-4xl font-bold font-oswald text-rose-500">
        Cart
      </h1>
      <button className="px-5 py-4 sm:px-6 sm:py-5  flex items-center gap-1 text-2xl rounded-sm bg-transparent">
        <BsCart className="text-yellow-500 hover:text-yellow-400" />
        <span className="absolute right-8 sm:right-12 lg:right-14 top-3 sm:top-4 text-lg text-rose-400">
          1
        </span>
      </button>
    </header>
  );
}
