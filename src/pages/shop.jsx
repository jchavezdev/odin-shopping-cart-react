import ProductCard from "../components/ProductCard.jsx"; 
import { useState } from "react";

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Shop</h1>
      <ProductCard addToCart={addToCart} />
    </div>
  );
}
