import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  return (
    <main className="p-6 bg-indigo-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6 text-slate-700">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-600 underline">
            Continue Shopping
          </Link>
        </p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-3">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-3 bg-white p-3 rounded-lg shadow"
            >
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-12 h-12 object-contain"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 line-clamp-1">
                  {item.product.title}
                </p>
                <p className="text-xs text-slate-400 capitalize">
                  {item.product.category}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-slate-900">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                >
                  +
                </button>
              </div>

              <p className="text-green-600 font-semibold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 text-sm font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center bg-slate-900 text-white p-4 rounded-lg mt-4">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-2 w-full text-sm text-slate-500 hover:text-red-600 transition-colors"
          >
            Clear cart
          </button>
        </div>
      )}
    </main>
  );
}

export default CartPage;
