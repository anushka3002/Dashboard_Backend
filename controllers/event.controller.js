const express = require("express")
const router = express.Router()

const Event_info = require("../models/event.model")

router.post("/",async (req,res)=>{
    try{
        const event = await Event_info.create(req.body)
        return res.status(200).send(event)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/eventInfo",async (req,res)=>{
    try{
        const event = await Event_info.find().lean().exec()
        return res.send(event)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
      const event = await Event_info.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      return res.status(201).send(event);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
// router.get("/name",async(req,res)=>{
//     try{
//         const query= req.query.filter;
//         const items = await Event_info.find({name:query}).populate().lean().exec()
//         return res.send(items)
//     } catch(err){
//         res.status(500).send(err.message)
//     }
// })

module.exports = router;