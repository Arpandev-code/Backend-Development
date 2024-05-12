import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
{
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,

    }

},
{
    timestamps:true
}
)

export const User=mongoose.model("User",userSchema)

//Model name convert into plural when it stores in mongo DB here 'user' will be 'users' in DB


