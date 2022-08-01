const mongoose = require("mongoose");

require("dotenv").config();

module.exports= ()=>{

    return mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connection Successful")
    }).catch((err)=>{
        console.log(err.message)
    })
}