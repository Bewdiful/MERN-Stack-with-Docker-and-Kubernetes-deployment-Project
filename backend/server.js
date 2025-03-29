// Import required libraries
const express = require('express'); // Express framework for building the server
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Middleware for enabling CORS
require('dotenv').config(); // Load environment variables from .env file

// Import route files
const productRoutes = require('./routes/productRoutes'); // Product-related routes

// Initialize Express application
const app = express();
// Set port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

/************************
 * MIDDLEWARE SETUP
 ************************/
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

/************************
 * ROUTE CONFIGURATION
 ************************/
// Mount product routes at /api/products base path
app.use('/api/products', productRoutes);

/************************
 * DATABASE CONNECTION
 ************************/
mongoose.connect(process.env.MONGODB_URI) // Connect using URI from .env
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

/************************
 * BASIC ROUTES
 ************************/
// Health check endpoint
app.get('/', (req, res) => {
  res.send('API is running...'); // Simple response to verify server is up
});

/************************
 * SERVER STARTUP
 ************************/
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log server start
});