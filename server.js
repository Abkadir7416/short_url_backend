import express from 'express'

const app = express();

app.use(express.json())

// app.use('/', urlRoute);

// Routes
app.use('/api', shortUrlRoutes);
// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to URL Shortener API' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
