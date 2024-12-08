import { Link } from "react-router";

export default function Home() {
  return (
    <section className="text-center my-10 sm:my-16 lg:my-24 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 sm:mb-16 text-teal-500">
        Welcome to our E-commerce App.
      </h1>
      <Link
        to="/products"
        className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-2xl font-oswald font-normal text-white"
      >
        Browse Products
      </Link>
    </section>
  );
}
