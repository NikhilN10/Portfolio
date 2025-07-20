import React from 'react'

const Mail = () => {
  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
      <div className='flex' data-aos="fade-down-left" data-aos-duration="800" >
        <a href="mailto:nikhilbelgaokar2000@gmail.com" className='font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-out'>
            nikhilbelgaokar2000@gmail.com
        </a>
        </div>
        <hr className='border-[2px] w-40 text-textColor border-textColor rounded-full'/>
    </div>
  )
}

export default Mail;