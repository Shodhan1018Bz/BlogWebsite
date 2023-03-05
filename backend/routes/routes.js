const express= require("express");
const {login}=require("../controller/Login");
const Router=express.Router();

Router.post("/login",login);

module.exports=Router;
