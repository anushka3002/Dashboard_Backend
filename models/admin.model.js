const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const adminSchema= new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        mobile:{type:String,required:true,length:10},
        password:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

