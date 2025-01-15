import express from 'express';

import { isAuth } from '../middlewares/isAuth.middleware.js';
import { addFee, getAllFeeStudentCourse, getFeeCollectionData } from '../controller/feeControllers.js';

const feerouter=express.Router();



feerouter.post('/add-fee', isAuth, addFee)
feerouter.get('/fee-history', isAuth, getFeeCollectionData)
feerouter.get('/all-fee', isAuth, getAllFeeStudentCourse)


export default feerouter