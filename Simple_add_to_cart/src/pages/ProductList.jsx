import { products } from "../data/Products";
import ProductCard from "../ui/ProductCard";

export default function ProductList (){
    return (
        <article>
            {products.map(product => <ProductCard key={product.id} product={product} />)} 
        </article>
    )
}

