// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import mainrouter from './routes/index.js';
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL (adjust accordingly)
    credentials: true,  // If you're sending cookies or authentication headers
  }));
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT || 8000;
app.use("/api/v1",mainrouter);
app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`); // Corrected the port in the log message
});
