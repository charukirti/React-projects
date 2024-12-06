export default function ProductCard({ product }) {
  return (
    <div className="w-72 bg-white border border-zinc-500 shadow-md rounded-lg px-8 py-5 flex items-center justify-center flex-col mt-3 ">
      <img src={product.image} className="h-32 w-20 mb-5" alt={product.title} />
      <div>
        <p className="text-sm font-bold mb-5">{product.title}</p>

        <p className="mb-4">Price: ${product.price}</p>
      </div>
      <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'">
        Add to cart
      </button>
    </div>
  );
}
