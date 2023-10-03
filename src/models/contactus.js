const mongoose=require("mongoose")

// const bcrypt=require("bcryptjs");
// const jwt=require("jsonwebtoken");

const contactUsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
    
})

const contactUs=new mongoose.model("contactUs",contactUsSchema);

module.exports = contactUs;