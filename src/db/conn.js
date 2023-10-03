//const dotenv = require("dotenv")
const mongoose = require("mongoose");
// dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("No connection")
})

