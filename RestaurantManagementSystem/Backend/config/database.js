const mongoose = require('mongoose'); // Fixed typo
require('dotenv').config();

const dbConnection = async () => {
  try {
    // Log the connection URL to debug if needed
    console.log('Connecting to MongoDB:', process.env.DATABASE_URL);

    await mongoose.connect( process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('DB connected successfully.');
  } catch (error) {
    console.error('DB connection failed:', error.message);
    process.exit(1);  // Exit the process with failure status
  }
};

module.exports = dbConnection;
