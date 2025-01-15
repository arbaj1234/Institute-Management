import express from 'express';
import { isAuth } from '../middlewares/isAuth.middleware.js';
import { addCourse, deleteCourseById, getAllCourse, getCourseById, getLatestFiveCourses, updateCourseById } from '../controller/batchControllers.js';


const batchrouter=express.Router();

batchrouter.post('/add-course', isAuth, addCourse)
batchrouter.get('/get-all', isAuth, getAllCourse)
batchrouter.get('/get/:courseId', isAuth, getCourseById)
batchrouter.delete('/delete/:courseId', isAuth, deleteCourseById)
batchrouter.put('/update/:courseId', isAuth, updateCourseById)
batchrouter.get('/latest-courses', isAuth, getLatestFiveCourses)




export default batchrouter