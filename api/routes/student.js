import express from "express";
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from "../controllers/studentControlles.js";

//todo init routes
const router = express.Router();

//todo routes
router.route('/').get(getAllStudents).post(createStudent)
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent)


//todo export routes
export default router;