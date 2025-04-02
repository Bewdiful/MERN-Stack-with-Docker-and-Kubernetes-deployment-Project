import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Home = () => {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Login prompt modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Account Notice</h3>
            <p>This email is already in use. Please log in instead.</p>
            <button 
              onClick={() => setShowLoginPrompt(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <HeroSection />
        <Categories />
        <FeaturedProducts />
        <Newsletter setShowLoginPrompt={setShowLoginPrompt} />
      </main>

      <Footer />
      <Cart />
    </div>
  );
};

export default Home;