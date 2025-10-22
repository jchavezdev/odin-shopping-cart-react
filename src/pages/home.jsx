import shoppingBag from "../assets/shopping-bag.svg";
// src/pages/Home.jsx
export default function Home() {
    return (
      <>
      <img src={shoppingBag} 
      alt="shopping-bag" 
      width="500" 
      height="600" 
      style={{
        display: "block",
        margin: "0 auto",
        maxWidth: "100%",
        height: "auto",
      }}/>
      <h1>Welcome to ShopStore - Your moddern shopping experience</h1>
      </>
    );
  }
  