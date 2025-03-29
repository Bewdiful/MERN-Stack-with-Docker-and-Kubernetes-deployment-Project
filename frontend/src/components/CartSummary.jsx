// Import the useCart hook to access cart state and total
import { useCart } from '../context/CartContext';

const CartSummary = () => {
  // Destructure cartItems and cartTotal from the cart context
  const { cartItems, cartTotal } = useCart();
  
  return (
    // Main container with styling classes for card-like appearance
    <div className="border rounded-lg p-4 mt-4 bg-gray-50">
      {/* Cart summary heading */}
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      
      {/* Conditional rendering based on whether cart is empty */}
      {cartItems.length === 0 ? (
        // Display message when cart is empty
        <p>Your cart is empty</p>
      ) : (
        // Fragment to group multiple elements when cart has items
        <>
          {/* List of cart items with vertical spacing */}
          <ul className="space-y-2 mb-4">
            {/* Map through each item in the cart */}
            {cartItems.map(item => (
              // Each list item needs a unique key (using item._id)
              <li key={item._id} className="flex justify-between">
                {/* Display product name and quantity */}
                <span>
                  {item.name} × {item.quantity}  {/* Shows "Product × 2" format */}
                </span>
                {/* Display line total (price × quantity) formatted to 2 decimal places */}
                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Total section with top border for visual separation */}
          <div className="border-t pt-2 font-bold flex justify-between">
            <span>Total:</span>
            {/* Display the computed cart total formatted to 2 decimal places */}
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;