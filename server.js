import express from 'express'
import connectDB from './config/mongo.config.js'
import dotenv from 'dotenv';
import shortUrlRoutes from './routes/short_url.route.js';

const app = express();

app.use(express.json())

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to URL Shortener API' });
});


// Routes
app.use('/api', shortUrlRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
