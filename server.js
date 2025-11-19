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

// Define public directory for static files (restricts access to only public files)
const publicDir = path.join(__dirname);

// Serve static files only from specific directories
app.use('/css', express.static(path.join(publicDir, 'css')));
app.use('/js', express.static(path.join(publicDir, 'js')));
app.use('/images', express.static(path.join(publicDir, 'images')));

// Serve HTML files
app.get('/', limiter, (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/*.html', limiter, (req, res) => {
  const filename = path.basename(req.path);
  res.sendFile(path.join(publicDir, filename));
});

// Start server
app.listen(PORT, () => {
  console.log(`TestoMax server running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
