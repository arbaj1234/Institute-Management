import CourseModel from "../models/course.model.js";
import StudentModel from "../models/student.model.js";
import UserModel from "../models/user.model.js";
import FeeModel from "../models/fee.model.js";

export const addFee = async (req, res, next) => {
    try {
        if (!req.body.fullName || !req.body.email || !req.body.phone || !req.body.amount || !req.body.remark || !req.body.courseId) {
            return res.status(400).json({ message: "Please fill all the fields." });
        }

        const newFee = new FeeModel({
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            amount: req.body.amount,
            remark: req.body.remark,
            courseId: req.body.courseId,
            collectByUserId: req.user._id

        })
        const savedFee = await newFee.save();
        res.status(201).json({
            message: "Fee collected successfully",
            collectedFee: savedFee
        })

    } catch (error) {
        next(error);
    }
}

// GET all fee collection data of login user for any student
export const getFeeCollectionData = async (req, res, next) => {
    try {
        const getFeeCollectionData = await FeeModel.find({ collectByUserId: req.user._id })

        res.status(200).json({
            message: "Fee history successfully",
            feeHistory: getFeeCollectionData
        })

    } catch (error) {
        next(error);
    }
}


// GET all fee for any students in a course
export const getAllFeeStudentCourse = async (req, res, next) => {
    try {
        console.log("req.query", req.query);
        const getAllFeeStudentCourse = await FeeModel.find({ collectByUserId: req.user._id, courseId: req.query.courseId, phone: req.query.phone })

        res.status(200).json({
            message: "All fess for srudent course fetched successfully",
            getAllFeeStudentCourse
        })

    } catch (error) {
        next(error);
    }
}