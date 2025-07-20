import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react'

import React from 'react'

const Social = () => {
  const socialLinks=[{link:'https://github.com/NikhilN10',icon:IconBrandGithub},{link:'https://www.linkedin.com/in/nikhil-belgaonkar/',icon:IconBrandLinkedin},
    {link:'https://leetcode.com/u/NikhilN10/',icon:IconBrandLeetcode},{link:'https://www.instagram.com/itz_nicky_nix/',icon:IconBrandInstagram}
  ]
  const socialIcons= socialLinks.map((socialLink)=>{
 return <a href={`${socialLink.link}`} target='blank' className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
<div data-aos="fade-up-left" data-aos-duration="800" ><socialLink.icon stroke={1.5} className='-rotate-90' size={30}/></div> 
</a>
  })
  return (
    <div className='flex md-mx:hidden  text-textColor items-center  gap-8 fixed bottom-40 -left-40 rotate-90'>
             {socialIcons}
        <hr className='border-[2px] w-40 text-textColor border-textColor rounded-full'/>
    </div>
  )
}

export default Social