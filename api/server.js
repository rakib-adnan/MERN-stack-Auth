import express from "express";
import colors from 'colors';
import dotenv from "dotenv";
import studentRoute from "./routes/student.js";
import mongoDBConnect from "./config/db.js";
import errorhendler from "./middlewares/errorHandler.js";





//! init express
const app = express();

//! load env file
dotenv.config();


//! init env variables
const port = process.env.SERVER_PORT || 5000;

//! routes 
app.use('/api/student', studentRoute)

//! express error handler
app.use(errorhendler);

//! listen server
app.listen(port, () => {
    mongoDBConnect();
    console.log(`Server is running on port ${port}`.bgCyan.black);
});

