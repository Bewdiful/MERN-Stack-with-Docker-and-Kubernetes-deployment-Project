// Import required libraries
const mongoose = require('mongoose'); // MongoDB object modeling
const Product = require('./models/Product'); // Product model
require('dotenv').config(); // Load environment variables

/************************
 * SAMPLE DATA
 ************************/
// Define sample product to seed the database
const sampleProduct = {
  name: 'Wireless Headphones',
  price: 89.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
};

/************************
 * DATABASE CONNECTION
 ************************/
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  });

/************************
 * SEEDING FUNCTION
 ************************/
const seedDB = async () => {
  try {
    // 1. Clear existing products
    await Product.deleteMany({});
    console.log('Products collection cleared');
    
    // 2. Add sample product
    const product = await Product.create(sampleProduct);
    console.log('Sample product added:', product);
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // 3. Disconnect from database when done
    mongoose.disconnect();
  }
};

// Execute the seeding function
seedDB();