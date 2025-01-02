import express from 'express';
import dotenv from 'dotenv'
import connectDB from './connectionDB/connection.js';
import testRouters from './routers/testRouters.js'

dotenv.config()
const app=express();
connectDB()

const PORT=process.env || 5050

app.use('/api/v1/',testRouters)


app.listen(PORT,()=>{
console.log(`server runnimg on PORT ${PORT}`);
})