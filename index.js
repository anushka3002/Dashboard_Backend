const express= require("express")
const connect = require("./configs/db")
const app=express();
app.use(express.json())
const adminController = require("./controllers/admin.controller")
const student_infoController = require("./controllers/student_info.controller")
const eventController = require("./controllers/event.controller")

app.use("/admin",adminController)
app.use("/student",student_infoController)
app.use("/event",eventController)

app.listen(3332,async function(){
    try{
        await connect()
        console.log("listening on port 3332")
    }
    catch(e){
        console.log(e.message)
    }
})
