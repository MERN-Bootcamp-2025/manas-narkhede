const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { logRequest } = require('./logger');

dotenv.config();

const PORT = process.env.PORT || 3000;

const routes = {
  '/': require('./routes/home'),
  '/about': require('./routes/about'),
  '/contact': require('./routes/contact')
};

const server = http.createServer((req, res) => {
  logRequest(req); // log every request

  const routeHandler = routes[req.url] || null;

  if (routeHandler) {
    routeHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
