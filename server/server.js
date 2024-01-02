import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config'


const server = express();
let PORT = 3000;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
server.use(express.json());
mongoose.connect(process.env.DB_LOCATION,{
    autoIndex: true
})

server.post("/signup", (req,res)=>{
    let {fullname , email , password}= req.body;
    if(fullname.length < 5){
        return res.status(403).json({"error": "Fullname must be at least 3 letters long"})
    }
    if(!email.length){
        return res.status(403).json({"error": "Enter Email"});
    }
    if(!emailRegex.test(email)){
        return res.status(403).json({"error": "Invalid email"})
    }
    return res.status(200).json({"status": "ok"})
})
server.listen(PORT , ()=> {
    console.log('listening on port --> '+ PORT)
});