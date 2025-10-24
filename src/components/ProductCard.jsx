// components/ProductCard.jsx
import { useProducts } from "../hooks/useProducts";
import { ItemCounter } from "../hooks/itemCounter";

export default function ProductCard({ addToCart }) {
  const { products, loading } = useProducts();

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
          <ItemCounter />
          <button onClick={() => addToCart(p)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}
