const mongoose = require('mongoose');
const colors = require('colors');

//function mongodb database connection
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Database, ${mongoose.connection.host}`.bgCyan);
    } catch (error) {
        console.error('Error connecting to MongoDB', error.message);
    }
}

 module.exports = connectDb;
