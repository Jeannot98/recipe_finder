import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import Button from './Button'
const Footer = () => {
  return (
    <footer className='text-white py-20 bg_gradient'>
      <div className='container mx-auto px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800'>
        <div className='flex '>
          <p className='font-bold text-center'>
            Living <span className='text-green-500 text-xl'>Food</span>
          </p>
        </div>

        <div className=''>
          <p className='text-green-500'>Quick Links</p>
          <div className='flex flex-col text-start mb-4 md:mb-0'>
            <ul className='flex flex-col text-white gap-1'>
              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Home
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                About
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Services
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Contact
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Chiefs
              </li>
            </ul>
          </div>
        </div>

        <div className=''>
          <p className='text-green-500'>LEGAL</p>
          <div className='flex flex-col text-start mb-4 md:mb-0'>
            <ul className='flex flex-col text-white gap-1'>
              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Terms and Conditions
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                License Agreement
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Privacy Policy
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Copyright Information
              </li>

              <li className='block md:inline-block py-2 hover:text-gray-500 cursor-pointer'>
                Cookies Policy
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col'>
          <p className='text-green-500'>SOCIAL MEDIA</p>
          <div className='flex mt-4 gap-3'>
            <a href="#" className='bg-blue-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110
            transition-all duration-500'>
              <FaFacebook size={18}/>
            </a>

            <a href="#" className='bg-pink-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110
            transition-all duration-500'>
              <FaInstagram size={18}/>
            </a>

            <a href="#" className='bg-blue-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110
            transition-all duration-500'>
              <FaTwitter size={18}/>
            </a>

            <a href="#" className='bg-red-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110
            transition-all duration-500'>
              <FaYoutube size={18}/>
            </a>
          </div>

          <Button title={'Sign Up'} btnType={'button'}
          containerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black
          rounded-md min-w-[130px]'
          />
        </div>
      </div>

      <div className='flex items-center justify-center py-10'>
        <span className='text-gray-500 leading-10'>INFINITY &copy; 2023</span>
      </div>
    </footer>
  )
}

export default Footer