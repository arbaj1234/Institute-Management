import express from 'express';
import { signupControlles } from '../controller/userControllers.js';





const Userouter=express.Router();


Userouter.post('/signup',signupControlles)


export default Userouter