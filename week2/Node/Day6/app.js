
// const express = require('express')
// const adminRoutes = require('./routes/admin')
// const shopRoutes = require('./routes/shop')
// const bodyParser = require('body-parser')
// const path = require('path')

// const app = express()

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/admin',adminRoutes)
// app.use(shopRoutes)

// app.use((req, res, next) =>{
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// })


// app.listen(3000)





//Assignment 

const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

// Global logger middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Body parsers (important for form data!)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use router
app.use('/', mainRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



