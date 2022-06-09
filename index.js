const express= require("express")
const connect = require("./configs/db")
const app=express();
app.use(express.json())
const adminController = require("./controllers/admin.controller")
const student_infoController = require("./controllers/student_info.controller")
const eventController = require("./controllers/event.controller")
// const home=require("./index.html")

// app.use("/",home)
app.use("/admin",adminController)
app.use("/student",student_infoController)
app.use("/event",eventController)
const Port = process.env.port || 3332

app.listen(Port,async function(){
    try{
        await connect()
        console.log(`listening on port ${Port}`)
    }
    catch(e){
        console.log(e.message)
    }
})
