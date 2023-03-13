const mongoose=require("mongoose");
const {User}=require("../model/blogs");
const jwt=require("jsonwebtoken")
const SECRET_KEY="MyKey";
const user=async (req,res)=>{
    const token= req.headers.token;
    jwt.verify(String(token),SECRET_KEY,async (err,data)=>{
        if(err){
            res.status(404).json({message:"Invalid Token"});
        }
        else{
            try{
            console.log(data.id)
           const userData=  await User.findById({_id:data.id});
           console.log(userData);
           res.status(200).json({message:userData.name})
            }
            catch(err){
                console.log(err)
                res.status(404).json({meassage:"Invalid Token"})
            }
        }
        res.end();
    })
    // res.send({message:"ajgsuykb"})
}
module.exports=user;