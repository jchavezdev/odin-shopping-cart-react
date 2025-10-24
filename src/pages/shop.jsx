// pages/Shop.jsx
import ProductCard from "../components/ProductCard";

export default function Shop({ addToCart }) {
  
  return (
    <div>
        <h1>Shop</h1>
        {/* La prop ya está siendo pasada correctamente */}
        <ProductCard addToCart={addToCart} />
    </div>
);
}
