// ProductList.jsx
/*
import { useProducts } from '../hooks/useProducts';

export default function ProductList({ addToCart }) {
  const { products, loading } = useProducts();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}*/
