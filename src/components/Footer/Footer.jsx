import React from 'react'

function Footer() {
  return (
    <div className='myFooter my-3 flex-col md:flex-row mx-auto flex items-center justify-between py-[15px] border-t-[1px] border-[#212ea0]'>
        <p className='ml-8'>© 2022. All rights reserved</p>
        <ul className='flex list-none mt-2 gap-4 md:gap-0'>
            <li className='md:inline-block  md:mr-8'><a href="#">Privacy Policy</a></li>
            <li className='md:inline-block  md:mr-8'><a href="#">Terms & Conditions</a></li>
        </ul>
    </div>
  )
}

export default Footer