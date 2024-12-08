import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-stone-800 p-4 px-4 py-4 text-sm md:text-base uppercase text-stone-200 sm:px-6 flex items-center justify-between sticky bottom-0 left-0">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>1 products</span>
        <span>$ 133</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </footer>
  );
}
