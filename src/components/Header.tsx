import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className=" sticky top-0 z-40 bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 text-white shadow-lg px-6 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">GotALot</h1>
      <nav className="flex items-center gap-4">
        <Link to="/" className="text-white font-semibold mr-4 hover:underline">
          Home
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="bg-white text-blue-800 text-xs font-bold rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
