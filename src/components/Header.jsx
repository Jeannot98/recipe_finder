import React from 'react'
import {Banner1, Banner2, Banner3, Banner4, Banner5} from '../assets/index'


const images = [Banner1, Banner2, Banner3, Banner4, Banner5]

const Header = ({title, image, type}) => {
  return (
    <div className='w-full h-screen'>
        <div className='relative w-full h-full'>
            <img src={image??images[Math.floor(Math.random()*images.length)]} alt="Recipes" className='w-full h-full object-cover' />
        </div>

        <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 flex flex-col items-center justify-center
        pt-40 xl:pt-20 px-4'>
            <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>

            {
                type&& (<p className='tesm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4
                rounded-full'>Welcome to LivingFood, your helper to find Recipes!
                    <br className='hidden md:block'/>
                    Discover different type of Recipes
                </p>)
            }
        </div>
    </div>
  )
}

export default Header