import User from "../model/db";


export const getalluser=(async (req,res)=>{
const loggedinuser=req.userid;
const alluser=await User.find({
    _id:{
        $ne:{
            loggedinuser
        }
    }
}).select('-password');
return res.json({alluser});

})