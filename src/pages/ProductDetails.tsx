import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="p-6 text-center text-gray-500">Loading...</p>;
  }

  if (!product) {
    return <p className="p-6 text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain bg-white p-4 rounded-md"
      />
      <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-0.5 rounded">
        {product.category}
      </span>
      <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
      <p className="text-gray-500 mt-2">{product.description}</p>
      <p className="text-green-600 font-semibold mt-2">
        ${product.price.toFixed(2)}
      </p>
      <p className="text-sm text-gray-400 mt-1">
        {/* if product.rating is not null access rate */}★
        {product.rating?.rate || 0} ({product.rating?.count || 0} reviews)
      </p>
    </div>
  );
}

export default ProductDetails;
