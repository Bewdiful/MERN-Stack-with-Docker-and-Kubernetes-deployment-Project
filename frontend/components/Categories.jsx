const Categories = () => {
    const categories = [
      { name: 'Audio', icon: '🎧' },
      { name: 'Peripherals', icon: '🖱️' },
      { name: 'Monitors', icon: '🖥️' },
      { name: 'Components', icon: '💻' },
      { name: 'Accessories', icon: '⌨️' }
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Browse Categories</h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Find the perfect gear for your gaming setup
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center cursor-pointer border border-gray-100"
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <h3 className="font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;