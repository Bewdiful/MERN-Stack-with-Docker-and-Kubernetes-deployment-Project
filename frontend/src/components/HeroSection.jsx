const HeroSection = () => {
    return (
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Next-Gen Gaming Gear</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elevate your gaming experience with cutting-edge peripherals and components designed for peak performance.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Shop Now
            </button>
            <button className="bg-transparent hover:bg-white hover:text-gray-900 text-white border border-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;