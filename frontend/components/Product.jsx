// Import the useCart hook from our CartContext to access cart functionality
import { useCart } from '../context/CartContext';

// Product component that displays individual product information
const Product = ({ product }) => {
  // Destructure addToCart function from our cart context
  // We only need addToCart here, not the full cart context
  const { addToCart } = useCart();
  
  return (
    // Product card container with styling classes
    <div className="border rounded-lg overflow-hidden shadow-md max-w-sm mx-auto">
      {/* Product image */}
      <img 
        src={product.image}  // Image source from product prop
        alt={product.name}   // Accessible alt text using product name
        className="w-full h-64 object-cover"  // Fixed height with object-cover to maintain aspect ratio
      />
      
      {/* Product details section */}
      <div className="p-4">
        {/* Product name */}
        <h2 className="text-xl font-semibold">{product.name}</h2>
        
        {/* Product price formatted to 2 decimal places */}
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
        
        {/* Add to Cart button */}
        <button
          onClick={() => addToCart(product)}  // Calls addToCart with the product when clicked
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full"
          // Style classes breakdown:
          // - mt-4: margin top
          // - bg-blue-500: default blue background
          // - hover:bg-blue-600: darker blue on hover
          // - text-white: white text color
          // - px-4/py-2: padding
          // - rounded: rounded corners
          // - transition-colors: smooth color transition
          // - w-full: full width
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;