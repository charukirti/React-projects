import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white shadow-lg rounded-lg p-8 md:w-1/2 w-4/5">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          It seems you've taken a wrong turn. Maybe you want to go back to the
          homepage?
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go back to Homepage
        </Link>
      </div>
    </section>
  );
}
