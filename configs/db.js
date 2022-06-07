const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect(
        `mongodb+srv://anushka:anushka_123@cluster0.hyoha.mongodb.net/?retryWrites=true&w=majority`
    )
}