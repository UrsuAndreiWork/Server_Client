import express from 'express';

const app = express();
const PORT = 3000;

// Serve a simple response for the root URL
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Localhost Webpage!</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
