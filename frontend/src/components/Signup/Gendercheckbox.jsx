import React, { useState } from 'react';

function Gendercheckbox({ setGender }) {
  const [gender, setLocalGender] = useState('male'); 

  const handleGenderChange = (e) => {
    setLocalGender(e.target.value);
    setGender(e.target.value); 
  };

  return (
    <div className='flex ml-7 mt-2'>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text text-[#121111]">Male</span>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={gender === 'male'} 
            onChange={handleGenderChange} 
            className="radio bg-slate-800" 
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text text-[#121111]">Female</span>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={gender === 'female'} 
            onChange={handleGenderChange} 
            className="radio bg-slate-800" 
          />
        </label>
      </div>
    </div>
  );
}

export default Gendercheckbox;
