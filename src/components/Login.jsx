import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const[isSignInForm, setisSignInForm]=useState(true)
  const toggleSignInForm=()=>{
setisSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" alt="" />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
      <h1 className='font-bold text-xl py-4'>{ isSignInForm?"Sign in":"Sign Up"}</h1>
     {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{ isSignInForm?"Sign in":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Are You New to Netflix , Sign Up Now":"Already a User , Sign In"}</p>
      </form>
    </div>
  )
}

export default Login