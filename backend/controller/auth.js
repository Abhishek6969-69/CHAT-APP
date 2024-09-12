import zod from 'zod'
import  User  from '../model/db.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();
export const signup=(async (req,res)=>{
    const {username,email,password,confirmpassword,gender}=req.body;
const formdata=zod.object({
username:zod.string(),
email:zod.string().email(),
password:zod.string().min(6),
confirmpassword:zod.string()

})
const Gender=gender.toLowerCase();
const result=formdata.safeParse(req.body);
// console.log(result);
if(!result.success){
   return res.status(400).json({"msg":"bad request try again"});
}
if((password)!=(confirmpassword)){
 return  res.status(400).json({"msg":"password and confirm password does not match"});
}
const user=await User.findOne({
  username,
email,
password,
confirmpassword


})
if(user){
    return  res.status(400).json({"msg":"user already exist"});
}
const profileboyurl="https://avatar.iran.liara.run/public/boy";
const profilegirlurl="https://avatar.iran.liara.run/public/girl";
let profileurl="";
if(Gender==='male'){
    profileurl=profileboyurl;
}
else{
    profileurl=profilegirlurl
}

const dbuser=await User.create({
username,
email,
password,
confirmpassword,
profileurl,
})

const userid=dbuser._id;
const token= jwt.sign({ userid },process.env.secret);


return res.send(token)
})
export const login=(async (req,res)=>{
const {email,password}=req.body;
const formdata=zod.object({
   
    email:zod.string().email(),
    password:zod.string().min(6),
    
    
    })
   const result= formdata.safeParse(req.body);
   if(!result.success){
   return  res.status(400).json("invalid credential");
   }
   const user=await User.findOne({
    email,password
   });
   if(!user){
    return  res.status(400).json("no such user exisit");
   }
   const userid=user._id;
   const token= jwt.sign({ userid },process.env.secret);
   
   if(!token){
    return res.status(400).json("invalid credential");
   }
   return res.send(token)

   
    })
    export const logout=(async (req,res)=>{
        res.send("logout page")
        })