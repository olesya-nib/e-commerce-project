import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 text-white shadow-lg px-6 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">GotALot</h1>
      <nav>
        <Link to="/" className="text-white mr-4 hover:underline">
          Home
        </Link>
        <Link to="/cart" className="text-white font-semibold hover:underline">
          Cart: {cart.length}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
