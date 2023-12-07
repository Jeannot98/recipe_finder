import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <header className='w-full fixed z-10 bg-black opacity-90'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <Link to={"/"} className='flex items-center justify-center text-lg text-white cursor-pointer'>
                    Living <span className='text-green-500'>Food</span>
                </Link>

                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>

                    <li>
                        <Link to={"/recipes"}>Explore</Link>
                    </li>

                    <li>
                        <Link to={"/favorites"}>Favorite</Link>
                    </li>
                </ul>

                <Button title={'Sign In'} containerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white
            hover:text-slate-700 rounded-full min-w-[130px]'/>

                <button className='block md:hidden text-white text-xl' onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineClose /> : <HiMenuAlt3 />
                    }
                </button>
            </nav>

            <div className={`${open ? 'block' : 'hidden'} bg-black  w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                    <ul className='flex flex-col text-white gap-6'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link to={"/recipes"}>Explore</Link>
                        </li>

                        <li>
                            <Link to={"/favorites"}>Favorite</Link>
                        </li>
                    </ul>
                </div>
        </header>
    )
}

export default Navbar