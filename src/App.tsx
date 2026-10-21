import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import { useCart } from "./context/CartContext";

function App() {
  const { toast } = useCart();

  return (
    <Router>
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-600/70 backdrop-blur-sm text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-lg animate-[fadeIn_0.2s_ease-out]">
          {toast}
        </div>
      )}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
