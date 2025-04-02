// src/pages/Products.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

const Products = () => {
  // State management
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  // Data
  const categories = [
    'All Categories',
    'Audio',
    'Peripherals',
    'Mailbox',
    'Components',
    'Accessories',
    'Cooking',
    'Computers'
  ];

  const products = [
    // ... your existing products array ...
  ];

  // Filter logic
  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">CYBERGEAR</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categories={categories}
            filteredProductsCount={filteredProducts.length}
          />
          
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-gray-800 rounded-lg">
                <p className="text-xl text-gray-400">No products match your filters</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setPriceRange([0, 2000]);
                    setSearchQuery('');
                  }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
      <Cart />
    </div>
  );
};

export default Products;