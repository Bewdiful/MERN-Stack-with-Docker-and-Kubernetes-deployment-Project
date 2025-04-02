import { useState } from 'react';

const Newsletter = ({ setShowLoginPrompt }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the subscription here
    // For now, we'll just show the login prompt if email isn't empty
    if (email) {
      setShowLoginPrompt(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Elite Gaming Community</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Subscribe to get early access to exclusive deals, new product alerts, and gaming tips.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;