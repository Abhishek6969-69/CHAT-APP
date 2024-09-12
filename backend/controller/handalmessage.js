import { Conversation } from "../model/conversation.js";
import  Message  from "../model/message.js";

export const handlemessage=(async (req,res)=>{
    console.log(req.userid)
const {id:receiverid}=req.params;
const {message}=req.body;
const senderid=req.userid;
let conversation=await Conversation.findOne({
    participant:{
        $all:[receiverid,senderid],
    }
})
if(!conversation){
  conversation=  await Conversation.create({
        participant:
            [receiverid,senderid],
        
    })
}
const newmessages=await Message.create({
    receiverid,
    senderid,
    message
});
if(newmessages){
    conversation.messages.push(newmessages._id);
    await conversation.save();
}
return res.json({newmessages});

})
export const handlegetmessage=(async(req,res)=>{
const {id:otherperson}=req.params;
const senderid=req.userid;
const conversation1= await Conversation.findOne({
    participant:{
        $all:[otherperson,senderid],
    }
}).populate('messages');
const mess=conversation1.messages
return res.json({mess});
})