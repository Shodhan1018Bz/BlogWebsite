const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:true
    },
    image:{
        type:String
    },
    myblogs:{
        type:[{
            blog_id:{
                type:String,
                unique:true
            },
            blog:String
        }]
    }

    
});

module.exports=mongoose.model("User",userSchema);