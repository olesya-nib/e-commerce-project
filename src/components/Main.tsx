import ProductCard from "./ProductCard";
import type { Product } from "../types";

interface MainProps {
  products: Product[];
}

function Main({ products }: MainProps) {
  return (
    <main className="p-6 bg-indigo-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6 text-slate-700">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
