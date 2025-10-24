// src/components/NavBar.jsx
import { Link } from "react-router-dom";

export default function NavBar({ itemCount }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🛍️ MyShop</h2>
      <ul style={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart
          {itemCount > 0 && 
            
             <span style={{ 
               marginLeft: '5px', 
               padding: '2px 6px', 
               borderRadius: '50%', 
               backgroundColor: 'red', 
               color: 'white', 
              fontSize: '0.8em'
              }}>
                {itemCount}
              </span>
              }
        </Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#eee",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
  },
};
