import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import connectDB from './connectionDB/connection.js';
import morgan from 'morgan';
import Userouter from './routers/userRouters.js';
import Studentrouter from './routers/studentRouters.js';
import batchrouter from './routers/batchRouters.js';
import feerouter from './routers/feeRouters.js';




const app=express();


const PORT=process.env || 5050
app.use(express.json())
app.use(morgan('dev'))


app.use('/user',Userouter)
app.use('/student',Studentrouter)
app.use('/batch',batchrouter)
app.use('/fee',feerouter)
connectDB()
app.listen(PORT,()=>{
console.log(`server runnimg on PORT ${PORT}`);
})