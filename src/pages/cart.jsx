export default function Cart({ cartItems }) {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
      <div>
          <h1>Tu carrito</h1>
          {cartItems.length === 0 ? (
              <p>El carrito está vacío</p>
          ) : (
              <>
                  {cartItems.map((item, index) => (
                    <div key={index}>
                      <p>{item.title} - ${item.price} x {item.quantity}</p>
                    </div>
                  ))}

                  <hr />
                  <p><strong>Total:</strong> $
                    {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                  </p>
              </>
          )}
      </div>
  );
}
