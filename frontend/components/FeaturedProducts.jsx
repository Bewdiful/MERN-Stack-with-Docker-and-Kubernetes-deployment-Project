import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  const featuredProducts = [
    {
      id: 15,
      name: 'HyperX Cloud Alpha Gemini',
      category: 'Audio',
      price: 199.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 13,
      name: 'Razer Huntsman Elite',
      category: 'Peripherals',
      price: 249.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500'
    },
    {
      id: 14,
      name: 'Logitech G Pro Wireless',
      category: 'Peripherals',
      price: 159.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'
    },
    {
      id: 10,
      name: 'Samsung Odyssey G9',
      category: 'Monitor',
      price: 2199.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600">Top-rated gaming gear for serious players</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="relative mb-3">
                <span className="absolute top-0 left-0 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {index === 0 ? 'Featured' : product.category}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
              </div>
              
              <div className="p-2">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;