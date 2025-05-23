import express from 'express'

const app = express();

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to URL Shortener API' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
