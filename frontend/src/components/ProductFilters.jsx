// src/components/ProductFilters.jsx
const ProductFilters = ({
    priceRange,
    setPriceRange,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    categories,
    filteredProductsCount
  }) => {
    return (
      <div className="lg:w-1/4 bg-gray-800 p-6 rounded-lg">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fill Products</h2>
          <p className="text-gray-400">{filteredProductsCount} products found</p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-medium mb-3">Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="font-medium mb-3">Categories</h3>
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedCategory === category 
                      ? 'bg-blue-600' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Price</h3>
          <div className="flex items-center justify-between mb-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    );
  };
  
  export default ProductFilters;