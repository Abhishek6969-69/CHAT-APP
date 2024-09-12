import React from 'react'
import Gendercheckbox from './Gendercheckbox'
import Button from '../button'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Signup() {
  const [username,setusername]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [confirmpassword,setconfirmpassword]=useState("");
  const [gender, setGender] = useState("male");
async function handalesubmit(){
  
  const response = await axios.post("http://localhost:8000/api/v1/user/signup", {
    username,       
    email,          
    password,       
    confirmpassword, 
    gender
  });
  localStorage.setItem('token',response.data)
  console.log(response.data);
 
}
  return (
    <div className=' flex justify-center items-center p-2'>
    <div className=' w-96 bg-red-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100'>
<div>
  <h1 className=' py-1  text-[25px]'>Signup</h1>
  <form className='  ' onSubmit={(e)=>{
    e.preventDefault();
    handalesubmit()

  }}>
    <div className=' w-96  '>
    <label className="form-control w-72 mx-7 max-w-xs">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">Username</span>
    
  </div>
  <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setusername(e.target.value)
  }} />
 
</label>

<label className="form-control w-72 mx-7 max-w-xs">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">email</span>
    
  </div>
  <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs"  onChange={(e)=>{
    setemail(e.target.value)
  }}/>
 
</label>
<label className="form-control w-72 mx-7 max-w-xs">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">password</span>
    
  </div>
  <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"  onChange={(e)=>{
    setpassword(e.target.value)
  }}/>
 
</label>

<label className="form-control w-72 mx-7 max-w-xs">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">confirm password</span>
    
  </div>
  <input type="password" placeholder="confirm password" className="input input-bordered w-full max-w-xs"  onChange={(e)=>{
    setconfirmpassword(e.target.value)
  }} />
 
</label>
</div>
  <div>
  <Gendercheckbox setGender={setGender} />
  </div>
  <div className='mt-3 ml-[-30px]' >
    <Button value="submit"  />
  </div>
  <div>
  <h1 className=' text-black capitalize mb-2 mt-2'><Link to="/login">already have an account? Login</Link></h1>
  </div>
  </form>
</div>
    </div>
    </div>
  )
}

export default Signup