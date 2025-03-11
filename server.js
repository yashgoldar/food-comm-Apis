const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');


//dotenv configuration
dotenv.config();

//Database connection
connectDb();


// Define the express app
const app = express(express.json());

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route
// URL => http://localhost:3000
app.use('/api/v1/test', require("./routes/testRoute"));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use('/api/v1/user', require("./routes/userRoutes"));
app.get("/",(req, res) => {
    return res.status(200).send("<h1>Welcome to Ecomm Server App</h1>");
});

//PORT
const PORT = process.env.PORT || 3000;

//Start the server
app.listen(PORT, () => {
    console.log(`Node Server is running on port ${PORT}`.bgMagenta.bgYellow);
});