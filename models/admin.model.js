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

adminSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
    var hash = bcrypt.hashSync(this.password,10)
    this.password=hash;
    return next()
})

adminSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model("admin",adminSchema)
