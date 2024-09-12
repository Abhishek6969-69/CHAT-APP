
import Signup from './components/Signup/signup';
import Login from './components/pages/login';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
     <div className='h-screen bg-cover'>
      <div className=' mt-20'>
      <Routes >
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </div>
     </div>
    </>
  )
}

export default App
