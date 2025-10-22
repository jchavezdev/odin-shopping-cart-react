// ProductList.jsx

import { useProducts } from '../hooks/useProducts';

export default function ProductCard({ addToCart }) {
  const { products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
  {products.map(p => (
    <div key={p.id} style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <img src={p.image} alt={p.title} width="100" />
      <h3>{p.title}</h3>
      <p>${p.price}</p>
      <button onClick={() => addToCart(p)}>Add to cart</button>
    </div>
  ))}
</div>

  );
}
