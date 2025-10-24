// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx"; // Asegúrate de que este componente exista

export default function App() {
    // Define Cart State
    const [cart, setCart] = useState([]);

    // Define AddToCart function
    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
    };

    // Calculates how many articles are in the cart
    const totalItems = cart.length; 

    return (
        <Router>
            {/*Pass the total item count to the NavBar*/}
            <NavBar itemCount={totalItems} /> 
            
            <div style={{ padding: "2rem" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Pass the addToCart function to the Shop component */}
                    <Route 
                        path="/shop" 
                        element={<Shop addToCart={addToCart} />} 
                    />
                    {/* Cart Page*/}
                    <Route 
                        path="/cart" 
                        element={<Cart cartItems={cart} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}
