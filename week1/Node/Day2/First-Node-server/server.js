// server.js
// Basic HTTP Server using Node.js

const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  console.log(`Request received: ${req.method} ${path}`);

  res.setHeader("Content-Type", "text/html");

  if (req.method === "GET") {
    if (path === "/") {
      res.writeHead(200);
      res.end(`
        <html>
          <head><title>Home</title></head>
          <body style="font-family:sans-serif;">
            <h1>Welcome to My Node Server</h1>
            <p>This is the home page.</p>
          </body>
        </html>
      `);
    } else if (path === "/about") {
      res.writeHead(200);
      res.end(`
        <html>
          <head><title>About</title></head>
          <body style="font-family:sans-serif;">
            <h1>About Me</h1>
            <p>I am a beginner learning Node.js to build servers and backend logic.</p>
          </body>
        </html>
      `);
    } else if (path === "/contact") {
      res.writeHead(200);
      res.end(`
        <html>
          <head><title>Contact</title></head>
          <body style="font-family:sans-serif;">
            <h1>Contact Me</h1>
            <p>Email: example@example.com</p>
          </body>
        </html>
      `);
    } else {
      res.writeHead(404);
      res.end(`
        <html>
          <head><title>404</title></head>
          <body style="font-family:sans-serif; color:red;">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
          </body>
        </html>
      `);
    }
  } else {
    res.writeHead(405);
    res.end(`<h1>405 Method Not Allowed</h1>`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// README.md

/*
# Node.js Basic HTTP Server

## How to Run
1. Open terminal
2. Run: `node server.js`
3. Visit http://localhost:3000 in your browser

## Routes
- `/` - Home page with welcome HTML
- `/about` - Page with information about the developer
- `/contact` - Basic contact info shown
- Other routes - Custom 404 message

## Features Implemented
- HTML response with inline CSS
- Route handling using Node's built-in http module
- Status codes and logging each request

## Challenges
- Understanding how to parse routes and handle multiple paths without a framework
- Formatting HTML directly in JavaScript strings was tricky initially

*/
