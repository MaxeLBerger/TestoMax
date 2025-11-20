const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

// Define public directory for static files
const publicDir = path.join(__dirname, 'public');

// Serve static files from the public directory
app.use(express.static(publicDir));

// Serve index.html explicitly for root (optional as express.static handles it, but good for clarity)
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`TestoMax server running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
