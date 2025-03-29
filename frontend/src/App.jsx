// Import React hooks for state and side effects
import { useState, useEffect } from 'react';
// Import the cart context provider
import { CartProvider } from './context/CartContext';
// Import component for displaying individual products
import Product from './components/Product';
// Import component for displaying cart summary
import CartSummary from './components/CartSummary';

// Base URL for API endpoints
const API_URL = 'http://localhost:5000/api';

function App() {
  // State for storing the current product data
  const [product, setProduct] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State for storing any potential errors
  const [error, setError] = useState(null);

  // useEffect hook runs once when component mounts (empty dependency array [])
  useEffect(() => {
    // Async function to fetch product data from API
    const fetchProduct = async () => {
      try {
        // Make API request to get products
        const response = await fetch(`${API_URL}/products`);
        
        // Check if response was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse JSON response
        const products = await response.json();
        
        // For this demo, we'll just use the first product
        if (products.length > 0) {
          setProduct(products[0]); // Set first product as current product
        } else {
          setError('No products found'); // Handle empty product list
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load product. Please try again later.');
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    // Execute the fetch function
    fetchProduct();
  }, []); // Empty dependency array means this runs only once on mount

  // Display loading state while waiting for data
  if (loading) return <div className="text-center py-10">Loading...</div>;
  
  // Display error message if something went wrong
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  
  // Main app render
  return (
    // Wrap the entire app with CartProvider to make cart functionality available
    <CartProvider>
      {/* Main container with responsive padding */}
      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Mini E-Commerce Store</h1>
        </header>
        
        {/* Responsive grid layout - switches to 2 columns on medium screens */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Product display */}
          <div>
            {/* Only render Product if we have product data */}
            {product && <Product product={product} />}
          </div>
          
          {/* Right column - Cart summary */}
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;