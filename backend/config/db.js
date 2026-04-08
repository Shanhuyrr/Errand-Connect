const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;

    try {
      // Attempt local connection with a short timeout
      const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 1500 });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (localError) {
      console.log('Local MongoDB not running. Starting an In-Memory Database for the demo...');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`In-Memory MongoDB Connected at: ${uri}`);
    }
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
  }
};

module.exports = connectDB;
