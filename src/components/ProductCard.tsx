import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const product = { id, title, price, description, category, image, rating };
  return (
    <div className="flex flex-col h-full p-4 bg-white shadow-md rounded-lg border-t-4 border-blue-500 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      <div className="h-44 flex items-center justify-center bg-white shrink-0">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="inline-block self-start mt-3 text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-0.5 rounded">
        {category}
      </span>
      <Link to={`/product/${id}`}>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </Link>
      <div className="h-[4.5rem] overflow-y-auto pr-2 text-sm text-slate-500 text-sm mt-1 line-clamp-3 leading-relaxed scroll-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded transition-colors hover:bg-gray-50">
        {description}
      </div>

      <div className="flex-1" />
      <p className="text-emerald-600 font-semibold mt-4">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 text-white text-sm font-semibold py-2 rounded hover:from-blue-800 hover:via-blue-500 hover:to-blue-800 active:from-slate-950 active:via-blue-800 active:to-slate-950 transition-all duration-200 cursor-pointer mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
