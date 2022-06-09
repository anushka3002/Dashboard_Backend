const mongoose = require("mongoose")

const eventInfoSchema = new mongoose.Schema(
    {
        event_name:{type:String, required:true},
        event_info_url:{type:String, required:true},
        start_date:{type:Date, required:true},
        end_date:{type:Date, required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("event_info",eventInfoSchema)