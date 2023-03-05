const express=require("express");
const dotenv=require("dotenv")
const app=express();
const mongoose=require("mongoose")
dotenv.config();
const str=process.env.MONGO_CONNECTION_STRING;



app.get("/",(req,res)=>{
    res.send("Blog website")
})

mongoose.connect(str)
.then(()=>{
    console.log("Connected to Database");
    app.listen(3000,()=>{
        console.log("Server is connected...")
    })
})
.catch((err)=>console.log(err));

