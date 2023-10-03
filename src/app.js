const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const express = require("express");
require("../src/db/conn");
const router = require("../src/routers/router")
const Register = require("../src/models/registers")
const Scholarship = require("../src/models/scholarships")
const bodyParser = require('body-parser');
const cors = require("cors")
const mime=require("mime")
const path=require("path")
const app = express();

const port = process.env.PORT;
// console.log("C:/Users/Shashank Patil/OneDrive/Desktop/HTML/backend/scholarscrate-frontend")
// app.use(express.static("C:/Users/Shashank Patil/OneDrive/Desktop/HTML/backend/scholarscrate-frontend"));
mime.types['js'] = 'application/javascript';
// app.use(express.static('C:\Users\Shashank Patil\OneDrive\Desktop\HTML\backend\scholarscrate-backend\pages\index.js'));
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static("C:/Users/Shashank Patil/OneDrive/Desktop/HTML/backend/scholarscrate-backend"));
const staticpath =path.join(__dirname,"../public")
app.use(express.static(staticpath));
//console.log(staticpath)

app.use(router)


app.listen(port,()=>{
    console.log(`Connection is live at port no ${port}`)
})