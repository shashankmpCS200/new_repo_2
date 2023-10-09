//const dotenv = require("dotenv")
const mongoose = require("mongoose");
// dotenv.config({path:'./config.env'})

//const DB = process.env.DATABASE
const DB = "mongodb+srv://shashankmpcs21:Shanku%402002@cluster0.hltszt0.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("No connection")
})

