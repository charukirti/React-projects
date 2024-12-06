import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Welcome to Simple Add-to-Cart!
      </h1>
      <p className="text-sm sm:text-lg text-gray-600 mb-8">
        Browse our products and manage your cart with ease.
      </p>

      <div className="space-x-4">
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
