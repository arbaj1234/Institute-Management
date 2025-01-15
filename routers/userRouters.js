import express from 'express';
import { loginUser, registerUser,  } from '../controller/userControllers.js';





const Userouter=express.Router();


Userouter.post('/register', registerUser)
Userouter.post('/login', loginUser)


export default Userouter