import React from 'react'
import errorPict from '../assets/errorPict.png'

const ErrorPage = () => {
  return (
    <div className='h-svh w-svw flex items-center justify-center'>
      <div className='flex flex-col items-center gap-8'>
        <img src={errorPict} alt="error" className='h-64' />
        <span className='text-3xl font-semibold'>PAGE NOT FOUND</span>
        <span className='text-xl w-[40rem] text-center'>Sorry, looks like you're lost! The page you are looking for cannot be found. Maybe the page was moved, removed, or something else. </span>
        <div className='flex flex-row gap-10'>
          <button className='px-8 py-2 rounded-full hover:bg-[#FF8526] hover:text-white text-lg border-2 border-zinc-200 text-black transition-all duration-300'>Go Home</button>
          <button className='px-8 py-2 rounded-full hover:bg-[#FF8526] hover:text-white text-lg border-2 border-zinc-200 text-black transition-all duration-300'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage