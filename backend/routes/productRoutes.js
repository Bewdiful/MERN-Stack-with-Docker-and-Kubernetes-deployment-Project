// Import express for routing
const express = require('express');
// Create a router instance
const router = express.Router();
// Import the Product model
const Product = require('../models/Product');

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    
    // Return products as JSON response
    res.json(products);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ 
      message: error.message // Send error message to client
    });
  }
});

// Export the router to be used in the main server file
module.exports = router;