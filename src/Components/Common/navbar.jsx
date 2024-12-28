import React from 'react'
import Img1 from '../images/open-menu.png';
import railogo from '../images/railogo.jpeg';
import affiliate from '../images/affiliate.png'

function Navbar() {
  return (
    <div className='bg-[#B7302A] py-[3px] w-full lg:px-[20px] px-4 sticky'>
  <div className='flex justify-between items-center'>
   
    <div className='flex items-center space-x-[15px] ml-[20px]'>
      <img className='h-[25px] w-[25px]' src={affiliate} alt="Affiliate Logo" />
      <p className='text-white font-poppins  text-[12px]'>Affiliated with Ekal Abhiyan</p>
    </div>

    
    <div className=' items-center space-x-[40px] mr-[40px] hidden lg:flex'>
      <p className='text-white text-sm cursor-pointer'>Volunteer</p>
      <p className='text-white text-sm cursor-pointer'>Contact Us</p>
    </div>
  </div>
</div>

  )
}

export default Navbar
