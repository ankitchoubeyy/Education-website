import React from 'react'
import './Institute.css'
import Button from '../Utilities/Button'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

function Institute() {
  return (
    <div className='myInstitute text-center mx-auto my-[50px] md:my-[80px] w-[90%]'>
        <div className="myGallery flex flex-col md:flex-row items-center md:justify-between mb-10">
            <img src={gallery1} alt="" className='w-[100%] md:w-[23%] mb-6 rounded-lg' />
            <img src={gallery2} alt="" className='w-[100%] md:w-[23%] mb-6 rounded-lg' />
            <img src={gallery3} alt="" className='w-[100%] md:w-[23%] mb-6 rounded-lg' />
            <img src={gallery4} alt="" className='w-[100%] md:w-[23%] mb-6 rounded-lg' />
        </div>

        <Button btnTitle="See more here" btnUrl="#" bgColor='#212ea0' textColor='white' className="instituteBtn" >
            <img src="{white_arrow}" alt="" />
        </Button>
    </div>
  )
}

export default Institute