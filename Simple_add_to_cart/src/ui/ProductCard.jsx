export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center  w-60 border border-stone-200 rounded-lg py-2 px-3">
      {/* image */}
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="py-2 text-center">
        {/* brand and model */}

        <p className="text-base mb-5">{product.model}</p>

        {/* price */}
        <div className=" flex items-center justify-between gap-8">
          <p>₹ {product.price}</p>
          <button className="px-3 py-1 bg-yellow-400 rounded-lg text-base">
            Add to cart
          </button>
        </div>
      </div>
      <div className="px-2"></div>
    </div>
  );
}
