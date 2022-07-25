import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import createError from "./errorController.js";

/**
 * 
 *? @access public
 * todo @route /api/student/getStudent
 *! @method GET
 */
export const getAllStudents = async (req, res, next ) => {

   try {
    const students = await Student.find()
    res.status(200).json(students);
   } catch (error) {
   next(error)
   } 
   
}
/**
 * 
 * ? @access public
 * todo @route /api/student/:id
 * ! * @method GET
 */
 export const getSingleStudent = async (req, res, next)=> {
    const {id} = req.params;
    try {
        const student = await Student.findById(id);
        res.status(200).json(student)
    } catch (error) {
       next(error)
    }
}

/**
 * 
 * ? @access public
 * todo @route /api/student/getStudent
 *! * @method post
 */
export const createStudent =  (req, res ,next) =>  { 
    // make a hash password
   
    const salt = await bcrypt.genSalt(10);
    const has_pass = await bcrypt.hash(req.body.password, salt);
    try {
        const student = await Student.create(  );
        res.status(200).json(student)

    } catch (error) {
        console.log(error);
    }
    
   
}


/**
 * 
 * ? @access public
 * todo @route /api/student/:id
 *! * @method PUT/PATCH
 */
export const updateStudent = async(req, res, next)=> {
    const {id} = req.params
    // try {
    //     const student = await Student.findByIdAndUpdate(id, req.body, { new : true});
    //     res.status(200).json(student)
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(req.body);
    res.send("update student")
}
/**
 * 
 * ? @access public
 * todo @route /api/student/:id
 *! * @method DELETE
 */
export const deleteStudent = async(req, res, next)=> {
    const {id} = req.params
    try {
        const student = await Student.findByIdAndDelete(id);
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
    }
}

