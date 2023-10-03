const express = require("express");
const router = new express.Router();
const Register = require("../models/registers")
const path=require("path")
const Scholarship = require("../models/scholarships")
const contactus = require("../models/contactus")
//CREATING NEW USER

// router.use(express.static("C:/Users/Shashank Patil/OneDrive/Desktop/HTML/backend/scholarscrate-frontend"));
//const rootPath="C:/Users/Shashank Patil/OneDrive/Desktop/HTML/backend/scholarscrate-backend/"

const rootPath = path.join(__dirname,"..","..")
console.log(rootPath)
router.get("/",(req,res)=>{
    res.sendFile("public/index.html",{root:rootPath})
})


router.get("/register",(req,res)=>{
    res.sendFile("public/register.html",{root:rootPath})
})

router.post("/register",async (req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;

        if(password===cpassword){
            const registerEmployee = new Register({ 
                firstname : req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword,
                religion:req.body.religion,
                caste:req.body.caste,
                income:req.body.income,
                district:req.body.district,
                state:req.body.state,
                levelOfEducation:req.body.mySelect
            })

           

            // const token=await registerEmployee.generateAuthToken();

            const registeredUser = await registerEmployee.save();
           res.send(registeredUser)
            // res.status(201).json(registeredUser);
        }else{
            res.status(400).json("Password not matching");
        }


    }catch(error){
        res.status(400).json(error)
    }
})

//LOGIN 

router.get("/login",(req,res)=>{
    res.sendFile("public/login.html",{root:rootPath})
})


router.post("/login",async(req,res)=>{
    try{
        
        const email=req.body.email
        const password=req.body.password
        const userEmail=await Register.findOne({email:email})

        //checking password
        // const isMatch=await bcrypt.compare(password,useremail.password);
        
        //console.log(isMatch)
        //const token=await useremail.generateAuthToken();
        if(password===userEmail.password){

            //userObject.jsonData=userEmail
            //console.log(userObject.jsonData.gender,userObject.jsonData.age,userObject.jsonData.religion)
            //console.log(userObject.jsonData.email)
            res.status(200).json({userEmail})
            // res.sendFile("pages/index.html",{root:rootPath})
           
            //res.redirect("/");
        }else{
            
            res.json({userEmail:null});
        }
      

    }catch(error){
        res.status(400).json("Invalid email or password")
    }
})


// FORGOT PASSWORD
router.get("/login/forgotpassword/:id",async(req,res)=>{
    res.sendFile("public/index.html",{root:rootPath})
})
router.patch("/login/forgotpassword/:id", async (req,res)=>{

    try {   
            
            const newPassword = req.body.password;
            const newConfirmPassword = req.body.confirmpassword;
            const _id = req.params.id;

            if(newPassword===newConfirmPassword){
                    const getUser = await Register.findByIdAndUpdate(_id, req.body,{
                        new : true
                    });
                    res.json(getUser)
            }
            else
            {
                res.json("Password don't match")
            }

    }
    catch (error) {

        console.log(error);

    }

})

//Scholarships
router.get("/scholarships",async(req,res)=>{
    res.sendFile("public/scholarships.html",{root:rootPath})
})
router.post("/scholarships/sort",async (req,res)=>{
    try  {

        if (!req.body) {
            // Handle case when userObject.jsonData is not set yet
            res.json("Empty"); // Redirect the user to the login page or handle as desired
            return;
        }
        // const scholarshipArray=await Scholarship.find({})
        const scholarshipArray=await Scholarship.find({
            gender:{ $in: [req.body.gender, "neutral"] },
            age:{$gte:req.body.age},
            religion:{ $in: [req.body.religion, "neutral"] },
            caste:{ $in: [req.body.caste, "neutral"] },
            district:{ $in: [req.body.district, "neutral"] },
            state:{ $in: [req.body.state, "neutral"] },
            levelofeducation:req.body.levelOfEducation,
            income:{$gte:req.body.income}
        })
        // console.log("Data : ")
        //console.log(scholarshipArray);
        // res.send(scholarshipArray)
        res.json({scholarshipArray});
    }catch(error){
        console.log(error);
    }
    
    //res.render("scholarships")
})

router.post("/scholarships",async (req,res)=>{
    try  {

        if (!req.body) {
            // Handle case when userObject.jsonData is not set yet
            res.json("Empty"); // Redirect the user to the login page or handle as desired
            return;
        }
        // const scholarshipArray=await Scholarship.find({})
        const scholarshipArray=await Scholarship.find({})
        
        //console.log(scholarshipArray);
        
        
        res.json({scholarshipArray});
    }catch(error){
        console.log(error);
    }
  
    // res.render("scholarships")
})


router.post("/scholarships/search",async (req,res)=>{
    try  {

        if (!req.body) {

            res.json("Empty"); 
            return;

        }

        const name = req.body.name;

        //console.log(name);
       
        const scholarshipArray=await Scholarship.find({name:name})


        //  console.log(scholarshipArray);

        res.status(200).json({scholarshipArray});
        // res.send({scholarshipArray })

    }catch(error){

        console.log(error);

    }
    //res.render("scholarships")
})

router.get("/aboutus",(req,res)=>{
    res.sendFile("public/aboutus.html",{root:rootPath})
})
router.get("/contactus",(req,res)=>{
    res.sendFile("public/contactus.html",{root:rootPath})
})

router.post("/contactus",async (req,res)=>{
    try{
            const contactusData =new contactus({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                subject:req.body.subject,
                message:req.body.message,
            })


            // const token=await registerEmployee.generateAuthToken();
            const contactusSaved = await contactusData.save();
           res.send(contactusSaved)
            // res.status(201).json(registeredUser);


    }catch(error){
        res.status(400).json(error)
    }
})







module.exports = router