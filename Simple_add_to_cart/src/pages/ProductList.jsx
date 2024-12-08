import { products } from "../data/Products";
import ProductCard from "../ui/ProductCard";

export default function ProductList() {
  return (
    <section>
      <div className="flex flex-col items-center my-8 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:place-items-center mx-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
