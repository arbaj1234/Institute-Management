import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser';
import connectDB from './connectionDB/connection.js';
import Userouter from './routers/userRouters.js';
import Studentrouter from './routers/studentRouters.js';
import batchrouter from './routers/batchRouters.js';
import feerouter from './routers/feeRouters.js';




const app=express();

// express middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(fileUpload({
    useTempFiles: true,
}))

const PORT=process.env || 5050
app.use(express.json())
app.use(cookieParser())

// console.log(process.env.CLOUDINARY_API_SECRET);


app.use(fileUpload({
    useTempFiles : true,
    // tempFileDir : '/tmp/'
}));

app.use('/user',Userouter)
app.use('/student',Studentrouter)
app.use('/batch',batchrouter)
app.use('/fee',feerouter)
connectDB()

app.use('*',(req,res)=>{
    res.status(404).json({
        massage:'bad request'
    })
})
app.listen(PORT,()=>{
console.log(`server runnimg on PORT ${PORT}`);
})