const express= require("express")
const connect = require("./configs/db")
const app=express();
app.use(express.json())
const adminController = require("./controllers/admin.controller")

app.use("/admin",adminController)

app.listen(3332,async function(){
    try{
        await connect()
        console.log("listening on port 3332")
    }
    catch(e){
        console.log(e.message)
    }
})
