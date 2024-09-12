import mongoose from "mongoose";
// import { Schema } from "zod";
mongoose.connect("mongodb+srv://sbh123yadav:eEVcSiDjmoMP0BmZ@cluster0.4y5iy.mongodb.net/chat-app?retryWrites=true&w=majority&ssl=true")
const conversationschema=new  mongoose.Schema({
    participant:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[],
    }]
},{timestamps:true})
export const Conversation=mongoose.model("Conversation",conversationschema);