import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show,setShow] = useState(false)
  // side effects
  useEffect(()=>{
    window.addEventListener('scroll',()=>{ //first arg shuld the event and sec arg should be function to execute
     
      if(window.scrollY>600){
       setShow(true)
      }else{
        setShow(false)
      }
    })// dependency null
  })
  return (
    <div className={` ${show && 'nav-black'} nav`}>
      <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Nav