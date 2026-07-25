import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((count) => count + 1);
  }

  function handleRemoveOne() {
    setCartCount((count) => Math.max(0, count - 1));
  }

  // Nested component
  function ProductCard({ product, onAddToCart }) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "16px",
          width: "180px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>{product.title}</h3>

        <p
          style={{
            color: product.isFruit ? "magenta" : "darkgreen",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ${product.price.toFixed(2)}
        </p>

        {product.popular && (
          <p
            style={{
              color: "goldenrod",
              fontWeight: "bold",
            }}
          >
            ⭐ Popular
          </p>
        )}

        <button
          onClick={onAddToCart}
          style={{
            marginTop: "10px",
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#4caf50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      <h1>🥬 Mini Fruit & Veg Stand</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "25px",
        }}
      >
        <h2 style={{ margin: 0 }}>
          {cartCount === 0
            ? "Cart is empty"
            : `${cartCount} item${cartCount > 1 ? "s" : ""} in cart`}
        </h2>

        <button
          onClick={handleRemoveOne}
          style={{
            padding: "8px 14px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
          }}
        >
          Remove one
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}