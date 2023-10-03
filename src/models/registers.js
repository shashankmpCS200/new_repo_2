const mongoose=require("mongoose")

// const bcrypt=require("bcryptjs");
// const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
    },
    age : {
        type : Number,
        required : true
    },
    income : { 
        type : Number,
        required : true
    },
    religion : {
        type : String,
        required : true,
        default: function() {
            return this.religion==="" ? this.religion : 'Neutral';
          }
    },
    caste : {
        type : String,
        required : true,
        default: function() {
            return this.caste==="" ? this.caste : 'Neutral';
          }
    },
    district : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    levelOfEducation : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    }
    // tokens:[{
    //     token:{
    //         type:String,
    //         required:true
    //     }
    // }]
})

/*
GENERATING TOKENS
userSchema.methods.generateAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id.toString()},"mynameisvinodbahadurthapayoutuber")
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
        res.send("The error part" +error)
    }
}
MIDDLEWARE FOR HASHING
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);  
        this.confirmpassword=await bcrypt.hash(this.password,10);  

        //this.confirmpassword=undefined;
    }
    next();
})*/

//now we need to create collection

const Register=new mongoose.model("Register",userSchema);

module.exports = Register;