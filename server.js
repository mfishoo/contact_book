// initialize the server
const express = require('express');

// db
const connectDB = require('./config/db');

const path = require('path');

// initialize a server object
const app = express();

// Connect Database
connectDB();

// Init Middleware, request can accept body data
app.use(express.json({ extended: false }));

// app.get('/', (req, res) =>
//   res.json({ msg: 'Welcome to the contact book API...' })
// );

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets(React) in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
