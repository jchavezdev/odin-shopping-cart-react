import { useProducts } from "../hooks/useProducts";
import { ItemCounter } from "../hooks/itemCounter";
import { useState } from "react";

export default function ProductCard({ addToCart }) {
  const { products, loading } = useProducts();

  // Este estado guarda las cantidades seleccionadas por ID
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, newAmount) => {
    setQuantities(prev => ({ ...prev, [productId]: newAmount }));
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      {products.map(p => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px"
          }}
        >
          <img src={p.image} alt={p.title} width="100" />
          <h3>{p.title}</h3>
          <p>${p.price}</p>

          {/* Pasamos la función para saber cuántos eligió */}
          <ItemCounter onChangeAmount={amount => handleQuantityChange(p.id, amount)} />

          <button
            onClick={() =>
              addToCart(p, quantities[p.id] || 1) // si no hay cantidad, asume 1
            }
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

