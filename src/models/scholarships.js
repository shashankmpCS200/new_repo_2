const mongoose=require("mongoose")
const scholarshipsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        // required:true
    },
    income:{
        type:Number,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    caste:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    levelofeducation:{
        type:Number,
        required:true
    },
    lastDate:{
        type:String,
        require:true
    },
    redirectingLink:{
        type:String,
        //required:true
    }
})

const Scholarship=new mongoose.model("Scholarship",scholarshipsSchema);

const createDocument=async()=>{  //call this function to insert
    try{    
        
        const scholarship_1=new Scholarship({
            name: "Legrand Empowering Scholarship Program",
            gender: "male",
            age: 18,
            income: 500000,
            religion: "neutral",
            caste: "neutral",
            district: "mumbai",
            state: "maharashtra",
            levelofeducation: 5,
            lastDate:"20-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23710_1685422881.jpg",
            redirectingLink:"https://www.buddy4study.com/page/legrand-empowering-scholarship"
        })
        const scholarship_2=new Scholarship({
            name: "Kotak Kanya Scholarship",
            gender: "female",
            age: 18,
            income: 500000,
            religion: "neutral",
            caste: "neutral",
            district: "mumbai",
            state: "maharashtra",
            levelofeducation: 5,
            lastDate:"15-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23756_1687249666.jpg",
            redirectingLink:"https://www.buddy4study.com/page/kotak-kanya-scholarship?ref=featuredBlocks"
        })
        const scholarship_3=new Scholarship({
            name: "Rolls-Royce Unnati Scholarship for Women Engineering Students",
            gender: "female",
            age: 18,
            income: 300000,
            religion: "neutral",
            caste: "neutral",
            district: "mumbai",
            state: "maharashtra",
            levelofeducation: 5,
            lastDate:"10-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23752_1687161026.png",
            redirectingLink:"https://www.buddy4study.com/page/rolls-royce-unnati-scholarships-for-women-engineering-students?ref=featuredBlocks"
        })
        const scholarship_4=new Scholarship({
            name: "HDFC Bank Parivartan's ECSS Programme",
            gender: "female",
            age: 17,
            income: 200000,
            religion: "neutral",
            caste: "neutral",
            district: "delhi",
            state: "delhi",
            levelofeducation: 6,
            lastDate:"24-10-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23726_1687508005.jpg",
            redirectingLink:"https://www.buddy4study.com/page/hdfc-bank-parivartans-ecss-programme?ref=featuredBlocks"
        })
        const scholarship_5=new Scholarship({
            name: "Kotak Junior Scholarship",
            gender: "neutral",
            age: 17,
            income: 200000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 6,
            lastDate:"18-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23689_1685622950.jpg",
            redirectingLink:"https://www.buddy4study.com/page/kotak-junior-scholarship?ref=featuredBlocks"
        })
        const scholarship_6=new Scholarship({
            name: "Raman Kant Munjal Scholarships",
            gender: "neutral",
            age: 17,
            income: 250000,
            religion: "Hindu",
            caste: "neutral",
            district: "delhi",
            state: "delhi",
            levelofeducation: 6,
            lastDate:"05-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23749_1686898433.png",
            redirectingLink:"https://www.buddy4study.com/page/raman-kant-munjal-scholarships?ref=featuredBlocks"
        })
        const scholarship_7=new Scholarship({
            name: "CNH-ITC Mentorship Program",
            gender: "neutral",
            age: 18,
            income: 400000,
            religion: "islam",
            caste: "neutral",
            district: "chennai",
            state: "tamil nadu",
            levelofeducation: 3,
            lastDate:"13-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/document_1681818175.jpg",
            redirectingLink:"https://www.buddy4study.com/page/cnh-itc-mentorship-program?ref=featuredBlocks"
        })
        const scholarship_8=new Scholarship({
            name: "Colgate Keep India Smiling Foundational Scholarship",
            gender: "neutral",
            age: 18,
            income: 100000,
            religion: "islam",
            caste: "neutral",
            district: "chennai",
            state: "tamil nadu",
            levelofeducation: 3,
            lastDate:"29-08-2023",
            images:"https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_logo/logo_17885_1586003938.png",
            redirectingLink:"https://www.buddy4study.com/page/keep-india-smiling-foundational-scholarship-and-mentorship-programme-for-sportsperson-and-individuals?ref=featuredBlocks"
        })
        const scholarship_9=new Scholarship({
            name: "DRDO - CFEES ITI Apprenticeship Training",
            gender: "neutral",
            age: 18,
            income: 100000,
            religion: "islam",
            caste: "neutral",
            district: "chennai",
            state: "tamil nadu",
            levelofeducation: 3,
            lastDate:"16-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23783_1689057493.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/drdo-cfees-iti-apprenticeship-training"
        })
        const scholarship_10=new Scholarship({
            name: "The Himalayan Fellowship for Creative Practitioners",
            gender: "neutral",
            age: 14,
            income: 10000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 1,
            lastDate:"01-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23757_1688358021.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/the-himalayan-fellowship-for-creative-practitioners"
        })
        const scholarship_11=new Scholarship({
            name: "Dr. Shamanur Shivashankarappa Janakalyan Trust (SSJKT) Scholarship",
            gender: "neutral",
            age: 14,
            income: 100000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 1,
            lastDate:"16-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23785_1688203754.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/dr-shamanur-shivashankarappa-janakalyan-trust-ssjkt-scholarship"
        })
        const scholarship_12=new Scholarship({
            name: "Vidyadhan Goa 11 and 12 Program 2023",
            gender: "neutral",
            age: 14,
            income: 10000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 1,
            lastDate:"27-11-2023",
            images:"https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_logo/logo_10599_000.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/vidyadhan-goa-11-and-12-program"
        })
        const scholarship_13=new Scholarship({
            name: "Fulbright-Nehru Doctoral Research Fellowships",
            gender: "neutral",
            age: 14,
            income: 10000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 1,
            lastDate:"03-09-2023",
            images:"https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_logo/logo_17554_1580800108.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/fulbright-nehru-doctoral-research-fellowships-2024-25?ref=AllScholarship"
        })
        const scholarship_14=new Scholarship({
            name: "Fulbright Nehru Academic and Professional Excellence Fellowships",
            gender: "neutral",
            age: 15,
            income: 100000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 4,
            lastDate:"20-08-2023",
            images:"https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_logo/logo_f8e12689-f7a1-4e25-b6df-82f28691d2a8_logo_9465_United-States-India-Educational-Foundation-(USIEF).png",
            redirectingLink:"https://www.buddy4study.com/scholarship/fulbright-nehru-academic-and-professional-excellence-fellowships"
        })
        const scholarship_15=new Scholarship({
            name: "Bihar Mukhyamantri Atyant Pichhda Varg Civil Seva Protsahan Yojana",
            gender: "neutral",
            age: 15,
            income: 150000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "Bihar",
            levelofeducation: 4,
            lastDate:"20-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_22863_1657616126.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/bihar-mukhyamantri-atyant-pichhda-varg-civil-seva-protsahan-yojana"
        })
        const scholarship_16=new Scholarship({
            name: "IIT Ropar International Relationship Internship",
            gender: "neutral",
            age: 15,
            income: 100000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 5,
            lastDate:"28-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23811_1689084507.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/iit-ropar-international-relationship-internship"
        })
        const scholarship_17=new Scholarship({
            name: "KSCSTE Emeritus Scientist Scheme (KESS)",
            gender: "neutral",
            age: 15,
            income: 200000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 4,
            lastDate:"09-09-2023",
            images:"https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/smp/scholarship/logo/KSCSTE-logo-4595.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/kscste-emeritus-scientist-scheme-kess"
        })
        const scholarship_18=new Scholarship({
            name: "SRM University Post-Doctoral Fellowship (UPDF)",
            gender: "neutral",
            age: 15,
            income: 100000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 2,
            lastDate:"21-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23812_1689245082.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/srm-university-post-doctoral-fellowship-updf"
        })
        const scholarship_19=new Scholarship({
            name: "NIELIT Bhubaneswar Internship",
            gender: "neutral",
            age: 14,
            income: 22000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 7,
            lastDate:"20-08-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23792_1688455613.jpg",
            redirectingLink:"https://www.buddy4study.com/scholarship/nielit-bhubaneswar-internship"
        })
        const scholarship_20=new Scholarship({
            name: "Vidyadhan Bihar Plus 2 (1st year) Program ",
            gender: "neutral",
            age: 15,
            income: 100000,
            religion: "neutral",
            caste: "neutral",
            district: "neutral",
            state: "neutral",
            levelofeducation: 4,
            lastDate:"23-09-2023",
            images:"https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_22773_1655792838.png",
            redirectingLink:"https://www.buddy4study.com/scholarship/vidyadhan-bihar-plus--st-year-program"
        })
       
        
        
        const result=await Scholarship.insertMany([
            scholarship_1,
            scholarship_2,
            scholarship_3,
            scholarship_4,
            scholarship_5,
            scholarship_6,
            scholarship_7,
            scholarship_8,
            scholarship_9,
            scholarship_10,
            scholarship_11,
            scholarship_12,
            scholarship_13,
            scholarship_14,
            scholarship_15,
            scholarship_16,
            scholarship_17,
            scholarship_18,
            scholarship_19,
            scholarship_20
        ]);  //sending items as array  
        console.log("Scholarships added successfully!!")
    }catch(error){
        console.log(error)
    }  
}
//createDocument();


module.exports=Scholarship;
//module.exports=Scholarship;