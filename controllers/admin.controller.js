const express= require("express")
const router = express.Router()
const Admin = require("../models/admin.model")
const {body,validationResult} = require("express-validator")
// require("dotenv").config();
const jwt=require("jsonwebtoken")

const newToken=(item)=>{
    return jwt.sign({item},"AnushkaPriya")
}


router.post(
    "/register",
    body("email")
    .isEmail()
    .custom(async(value)=>{
        const item = await Admin.findOne({email:value});
        if(item){
            throw new Error("Email already in use")
        }
        return true;
    }),
    async (req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({data:errors.array()})
        }
        try{
            const item= await Admin.create(req.body)
            const token = newToken(item)
            return res.send({item,token})
        }catch(error){
            return res.send(error)
        }
    }
)

router.get("/",async(req,res)=>{
    try{
        const items = await Admin.find().lean().exec()
        return res.send(items)
    }catch(err){
        return res.status(504).send("Error:"+err)
    }
})

// router.get("/:id",async(req,res)=>{
//     try{
//         const it = await Admin.findById(req.param.id)
//         console.log(it)
//         return res.send(it)
//     }
//     catch(err){
//         return res.status(504).send("Error:"+err)
//     }
// })


router.delete("/:id",async(req,res)=>{
    try{
        const items = await Admin.findByIdAndDelete(req.params.id)
        console.log(items)
        return res.send(items)
    }
    catch(err){
        console.log("error")
        return res.status(504).send("Error:"+err)
    }
})

router.post("/login",async(req,res)=>{
    try{
        console.log(req.body)
        const item = await Admin.findOne({email:req.body.email})

        if(!item){
            return res.status(400).send({message:"Invalid username or password"})
        }
        const match = item.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"Invalid username or password"})
        }

        const token = newToken(item)
        console.log(token,item)
        return res.status(200).send({token,item})
    }   catch(err){
        return res.status(504).send("Error:"+err)
    }
})


module.exports = router;

