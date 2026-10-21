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
    <div className="flex flex-col h-full p-4 bg-white shadow-md rounded-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      <div className="h-44 flex items-center justify-center bg-white shrink-0">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="self-start w-fit text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
        {category}
      </span>
      <Link to={`/product/${id}`}>
        <h3 className="text-sm font-bold text-slate-900 mt-2 hover:text-blue-600 line-clamp-2 transition-colors">
          {title}
        </h3>
      </Link>
      <div className="overflow-y-auto pr-2 text-sm text-slate-500 text-sm mt-1 line-clamp-3 leading-relaxed scroll-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded transition-colors hover:bg-gray-50">
        {description}
      </div>
      <div className="flex-1" />
      {rating && (
        <div className="flex items-center gap-1 mt-1.5">
          <span className="text-amber-400 text-xs">★</span>
          <span className="text-xs font-semibold text-slate-700">
            {rating.rate}
          </span>
          <span className="text-[10px] text-slate-400">({rating.count})</span>
        </div>
      )}

      <p className="text-emerald-600 font-semibold mt-4">${price.toFixed(2)}</p>

      <div className="mt-2 flex items-center justify-between gap-4">
        <button
          onClick={() => addToCart(product)}
          className="flex-2 bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:from-blue-800 hover:via-blue-500 hover:to-blue-800 active:from-slate-950 active:via-blue-800 active:to-slate-950 active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${id}`}
          className="flex-1 text-center border border-slate-300 text-slate-700 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all 
            [background:linear-gradient(white,white)_padding-box,linear-gradient(to_r,theme(colors.slate.900),theme(colors.blue.700),theme(colors.slate.900))_border-box] 
            hover:bg-slate-50 active:scale-[0.98] transition-all"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
