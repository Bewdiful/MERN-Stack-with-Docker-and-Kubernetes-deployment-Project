// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-700">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-gray-900 text-blue-400 text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">¥</span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-400">Save ${product.discount.toFixed(2)}</p>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;