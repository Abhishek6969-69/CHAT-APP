import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sbh123yadav:eEVcSiDjmoMP0BmZ@cluster0.4y5iy.mongodb.net/chat-app?retryWrites=true&w=majority&ssl=true")

const userschema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    trim:true,
},

email:{
    type:String,
    required:true,
    trim:true,
},
password:{
    type:String,
    required:true,

},
confirmpassword:{
    type:String,
    required:true,
    
},
profileurl: {
    type: String,
    required: false,
    default: "Not specified"
}
},{timestamps:true});
const User=new mongoose.model("User",userschema);
export default User ;
