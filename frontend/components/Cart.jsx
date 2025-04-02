import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    cartTotal, 
    cartItemCount,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity
  } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'block' : 'hidden'}`}>
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      <div className="absolute right-0 top-0 h-full bg-white w-full max-w-md shadow-xl overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Your Cart ({cartItemCount})</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y">
                {cartItems.map(item => (
                  <div key={item.id} className="py-4 flex">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border rounded flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-gray-600 ml-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;