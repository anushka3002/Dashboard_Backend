const express= require("express")
const cors = require("cors")
const connect = require("./configs/db")
const dotenv = require("dotenv")
dotenv.config()
const app=express();
app.use(express.json())
const adminController = require("./controllers/admin.controller")
const student_infoController = require("./controllers/student_info.controller")
const eventController = require("./controllers/event.controller")
// const home=require("./index.html")
app.use(cors({origin:"*"}))
// app.use("/",home)
app.use("/admin",adminController)
app.use("/student",student_infoController)
app.use("/event",eventController)
const port = process.env.PORT
console.log(port)
app.listen(3332,async function(){
    try{
        await connect()
        console.log(`listening on port 3332`)
    }
    catch(e){
        console.log(e.message)
    }
})
