import React from 'react'
import Header from '../component/Header'
import icon from "../assets/icon.png"

const Home = () => {
  return (
    <>
      <Header/>
      <div className='min-h-screen flex items-center justify-center px-6 py-12 lg:px-20'>
        <div className='flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-20 w-full max-w-7xl text-center lg:text-left'>
          
          <div className='space-y-6 lg:space-y-8'>
            <h1 className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight'>
              Xd Hospital
            </h1>
            <div className='text-gray-300 text-xl sm:text-2xl md:text-3xl space-y-2'>
              <p>if ur gonna die</p>
              <p>just dont</p>
              <p>nobody gives a shit</p>
            </div>
          </div>

          <img 
            src={icon} 
            alt="Xddddd" 
            className='w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl'
          />
        </div>
      </div>
    </>
  )
}

export default Home