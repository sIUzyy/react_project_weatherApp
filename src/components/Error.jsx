import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='flex justify-center items-center text-center h-screen'>

        <div className='font-nav tracking-widest'>
          <h1 className='text-7xl'>ERROR 404</h1>
          <h1 className='text-lg'>PAGE NOT FOUND</h1>

            <div className='mt-5'>
            <Link className='bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-600' to=''>Go Back Home</Link>
            </div>

        </div>


      </div>

    </div>
  )
}

export default Error