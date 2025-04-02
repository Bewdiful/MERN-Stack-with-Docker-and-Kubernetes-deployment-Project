import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  
  const products = [
    {
      id: 1,
      name: 'HyperX Cloud Alpha Gemini',
      category: 'Audio',
      price: 99.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 2,
      name: 'Razer Huntsman Elite',
      category: 'Peripherals',
      price: 199.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500'
    },
    {
      id: 3,
      name: 'Logitech G Pro Wireless',
      category: 'Peripherals',
      price: 149.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'
    },
    {
      id: 4,
      name: 'Samsung Odyssey G7',
      category: 'Monitors',
      price: 699.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Top-rated gaming gear for serious players
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
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
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1 rounded text-sm transition-colors"
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