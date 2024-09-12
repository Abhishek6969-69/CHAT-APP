import React from 'react'
// import Gendercheckbox from './Gendercheckbox'
import Button from '../button'
import { Link } from 'react-router-dom'
function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  async function handalesubmit(){
  
    const response = await axios.post("http://localhost:8000/api/v1/user/login", {
             
      email,          
      password,       
    
      
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
   

<label className="form-control w-72 mx-7 max-w-xs ">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">email</span>
    
  </div>
  <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setemail(e.target.value);
  }}/>
 
</label>
<label className="form-control w-72 mx-7 max-w-xs mt-2">
  <div className="label">
    <span className="label-text mx-2 text-[20px]">password</span>
    
  </div>
  <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setpassword(e.target.value);
  }} />
 
</label>


</div>
 
  <div className=' mt-6 ml-[-30px]'>
    <Button value="submit" />
  </div>
  <div>
  <h1 className=' text-black capitalize mb-2 mt-4 ml-[-20px]'><Link to="/signup">Don't have account?signup </Link></h1>
  </div>
  </form>
</div>
    </div>
    </div>
  )
}

export default Login