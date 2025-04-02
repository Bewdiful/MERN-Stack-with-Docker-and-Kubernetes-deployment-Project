// src/components/Navbar.jsx

import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { cartItemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          CYBERGEAR
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`hover:text-gray-300 transition-colors ${
              location.pathname === '/' ? 'text-blue-400' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-gray-300 transition-colors ${
              location.pathname === '/products' ? 'text-blue-400' : ''
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-300 transition-colors ${
              location.pathname === '/about' ? 'text-blue-400' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-300 transition-colors ${
              location.pathname === '/contact' ? 'text-blue-400' : ''
            }`}
          >
            Contact
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-800 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;