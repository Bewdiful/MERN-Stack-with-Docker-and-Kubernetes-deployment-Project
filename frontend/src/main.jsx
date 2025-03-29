// Import StrictMode from React - a development-only tool that helps identify
// potential problems in your application by performing additional checks
import { StrictMode } from 'react';

// Import the modern ReactDOM client API (introduced in React 18)
// This replaces the old ReactDOM.render() method
import { createRoot } from 'react-dom/client';

// Import global styles that will be applied across the entire application
import './index.css';

// Import the root App component that serves as the entry point to your component tree
import App from './App.jsx';

// Create a root container for your React application
// Targets the DOM element with id="root" (defined in your index.html)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render your React application
root.render(
  // Wrap your app in StrictMode to enable additional development checks:
  // - Identifies unsafe lifecycle methods
  // - Warns about legacy string ref API usage
  // - Detects unexpected side effects
  // - Checks for deprecated APIs
  // Note: StrictMode only runs in development and doesn't affect production
  <StrictMode>
    {/* Your main App component that serves as the root of your component hierarchy */}
    <App />
  </StrictMode>
  // Note: The trailing comma is optional in JSX expressions
);