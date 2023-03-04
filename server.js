const express=require("express");

const app=express();


app.get("/",(req,res)=>{
    res.send("Blog website")
})

app.listen(3000,()=>{
    console.log("Server is connected...")
})