const express = require("express")
const router = express.Router()

const Student_info = require("../models/student_info.model")

router.post("/",async (req,res)=>{
    try{
        const student = await Student_info.create(req.body)
        return res.status(200).send(student)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/studentInfo",async (req,res)=>{
    try{
        const student = await Student_info.find().lean().exec()
        return res.send(student)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/name",async(req,res)=>{
    try{
        const query= req.query.filter;
        const items = await Student_info.find({name:query}).populate().lean().exec()
        return res.send(items)
    } catch(err){
        res.status(500).send(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
      const student = await Student_info.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      return res.status(201).send(student);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

module.exports = router;