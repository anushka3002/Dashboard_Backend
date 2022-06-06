const express= require("express")
const connect = require("./configs/db")
const app=express();
app.use(express.json())

app.listen(3332,async function(){
    try{
        await connect()
        console.log("listening on port 3332")
    }
    catch(e){
        console.log(e.message)
    }
})
