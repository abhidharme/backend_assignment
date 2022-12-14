const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./config/db");

const PORT = process.env.PORT || 3000;

const groceryController = require("./controller/data.control");

app.use("/", groceryController);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log("Err", err)
    }
})

//https://mymart-backen.herokuapp.com/

