const mongoose = require("mongoose")

const studentInfoSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        roll_number:{type:String, required:true},
        term:{type:String, required:true},
        current_year:{type:String, required:true},
        contact_number:{type:String, required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("student_info",studentInfoSchema)