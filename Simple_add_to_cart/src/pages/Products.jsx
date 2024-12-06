import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../features/productSlice";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import ProductCard from "../ui/ProductCard";

export default function Products() {
  const { items, status, errorMessage } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(loadProducts());
    },
    [dispatch]
  );

  console.log(errorMessage);

  if (status === "loading") return <Loader />;
  if (status === "failed") return <ErrorMessage errorMsg={errorMessage} />;

  return (
    <div className=" flex flex-col items-center sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 sm:px-16">
      {items.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
