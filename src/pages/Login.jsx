import React from 'react'
import Header from '../component/Header'

const Login = () => {
  return (
    <>
      <Header/>
      <div className="flex items-center justify-center min-h-screen px-4 py-10">
        <div className='bg-gray-500 rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-7 w-full max-w-md sm:max-w-lg md:max-w-xl'>
          <h1 className='text-white text-4xl sm:text-5xl font-bold text-center'>Login!</h1>
          
          <div className='flex flex-col gap-4 w-full'>
            <input 
              type="text" 
              placeholder='First Name' 
              className='px-5 py-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg' 
            />
            <input 
              type="text" 
              placeholder='Last Name' 
              className='px-5 py-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg' 
            />
            <input 
              type="text" 
              placeholder='Number' 
              className='px-5 py-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg' 
            />
            <div>
              <p className='text-sm text-white mb-1'>Date of Birth</p>
              <input 
                type="date" 
                className='w-full cursor-pointer px-5 py-4 rounded-xl bg-gray-700 text-white focus:outline-none' 
              />
            </div>
            <input 
              type="password" 
              placeholder='Password' 
              className='px-5 py-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg' 
            />
            <button className='bg-blue-600 py-4 rounded-xl text-white cursor-pointer font-medium hover:bg-blue-700 transition text-lg sm:text-xl'>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login