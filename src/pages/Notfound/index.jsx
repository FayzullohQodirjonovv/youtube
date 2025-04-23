import React from 'react'
import { Link } from 'react-router-dom'
const Notfound  = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
        <h3 className='text-2xl text-[red] mb-[50px]'>Not Found Page 
        </h3>
        <Link className='text-[white]' to="/">back to home</Link>
    </div>
  )
}

export default Notfound 