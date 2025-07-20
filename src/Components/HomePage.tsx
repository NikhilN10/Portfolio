import React, { useEffect, useState } from 'react'
import Header from './Header'
import Mail from './Mail'
import Social from './Social'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { Loader } from './Loader'
import { Toaster } from 'react-hot-toast'


const HomePage = () => {
  const[loading,setLoading]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[]) //The empty dependency array [] in useEffect tells React to only run the effect once
        //  - when the component mounts. Without it, the effect would run after every render. 
        // In this code, we only want the timer to start once when the component first appears,
        //  not every time it re-renders. This is why the empty array is used - to make the effect 
        // behave like a componentDidMount lifecycle method.
  return (
   <div className={`min-h-[100vh] ${loading?'flex':""} items-center justify-center overflow-hidden`}>
   {loading!==true?<>
   <Toaster/>
    <Header/>
  <About/>
  <Projects/>
  <Skills/>
  <Experience/>
  <Contact/>
  <Footer/>
   <Mail/>
   <Social/>
   </>:
   <Loader/>}
   </div>
  )
}

export default HomePage