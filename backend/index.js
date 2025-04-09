import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

import router from './routers/routers.js';
import connectDB from './config/db.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


connectDB();
 app.use("/",router);

app.listen(3000, () => {
    console.log("http://localhost:3000")
})





