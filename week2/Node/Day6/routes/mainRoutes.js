const express = require('express');
const router = express.Router();

// GET Home page with HTML form
router.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Express!</h1>
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// About route
router.get('/about', (req, res) => {
  res.send('<h2>About this app</h2><p>This is a basic Express app with a form.</p>');
});

// POST /submit
router.post('/submit', (req, res, next) => {
  console.log('Received a POST request');
  next();
}, (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).send('Name is required!');
  }

  res.send(`<h3>Thank you, ${name}!</h3><a href="/">Go back</a>`);
});

module.exports = router;
