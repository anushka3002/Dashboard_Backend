const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect(
        `mongodb+srv://anushka:anushka_123@cluster0.vjoym.mongodb.net/?retryWrites=true&w=majority`
    )
}