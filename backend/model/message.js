import mongoose from "mongoose";
mongoose.connect("mongodb+srv://sbh123yadav:eEVcSiDjmoMP0BmZ@cluster0.4y5iy.mongodb.net/chat-app?retryWrites=true&w=majority&ssl=true")
 const messageschema=new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true,
    }
}) 
 const Message=mongoose.model("Message",messageschema);
 export default Message;