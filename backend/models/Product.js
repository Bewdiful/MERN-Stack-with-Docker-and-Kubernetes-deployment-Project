// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the product schema (structure of our product documents)
const productSchema = new mongoose.Schema({
  // Product name field
  name: {
    type: String, // Must be a string
    required: [true, 'Product name is required'], // Mandatory field with custom error message
    trim: true // Automatically removes whitespace from both ends
  },
  
  // Product price field
  price: {
    type: Number, // Must be a number
    required: [true, 'Product price is required'], // Mandatory field
    min: [0, 'Price cannot be negative'] // Minimum value validation
  },
  
  // Product image URL field
  image: {
    type: String, // Must be a string
    required: [true, 'Product image URL is required'] // Mandatory field
  }
}, {
  // Schema options
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create and export the Product model based on the schema
// This makes the model available for import in other files
module.exports = mongoose.model('Product', productSchema);