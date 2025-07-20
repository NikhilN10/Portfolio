import React, { useEffect, useState } from 'react'
import {IconHexagonLetterN} from '@tabler/icons-react'
import Sidebar from './Sidebar'

const links=["About","Work","Experience","Skills","Contact"]
const navlinks=(col:boolean ,clicked:any)=>{
  const handleClick=()=>{
    if(clicked)clicked();
  }
  return links.map((link,index)=>{
   return <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-lg font-mono text-textColor hover:text-primaryColor`} href={`#${link}`}><span className='text-primaryColor'>0{index+1}. </span>{link}</a>
  })
}

const Header = () => {  
  const[show,setShow]=useState(true);
  const[lastScrollY,setLastScrollY]=useState(0);
  const[shadow,setShadow]=useState(false);
  const controlNavbar=()=>{
    if(window.scrollY>lastScrollY && window.scrollY>70) setShow(false);
    else setShow(true);
    if(window.scrollY>70) setShadow(true)
      else setShadow(false);
    setLastScrollY(window.scrollY) 
  }
  useEffect(()=>{
    window.addEventListener('scroll',controlNavbar);
    return ()=> window.removeEventListener('scroll',controlNavbar);
  })
  return (
   
      <nav className={`flex ${show?"translate-y-0":'-translate-y-28'} ${shadow?'shadow-[0px_10px_30px_-10px_#020c1b]':''} 
      transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-[18vh] px-10 dm-mono-regular justify-between items-center`}>
         <IconHexagonLetterN className='z-10' size={60} color='#64FFDA' stroke={1.25}/>
           <div className='md:flex gap-8 hidden'>
        {navlinks(false,null)}
    </div>
    <Sidebar/>
    
    </nav>
    
    
  )
}

export default Header;
export {navlinks};