
import React, {useContext} from 'react'
import logo from '../assets/skylogo.png'
import { InfoContext } from '../context/dataContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { location,setLocation, findLocation }  = useContext(InfoContext)


  return (
    <div id='top' className='bg-black'>
        
        <div className='max-w-7xl mx-auto py-5 text-white px-5'>

            <div className='flex justify-between items-center'>

                <div className='flex items-center'>
                    <img className='w-8 h-8 mr-2' src={logo} alt='' />
                    <Link to='/' className='text-lg font-nav uppercase tracking-widest'>SkyCast</Link>
                    
                </div>    

            <div>
                <input 
                value={location}
                className={` rounded-full bg-transparent font-main border border-gray-500 p-1 outline-none pl-4 placeholder:pl-1 placeholder:text-sm`}
                onChange={event => setLocation(event.target.value)}
                onKeyDown={findLocation}
                placeholder='Search Location' 
                type='text' 
                />
            </div>

            </div>

        </div>
        
        
    </div>
  )
}

export default Navbar