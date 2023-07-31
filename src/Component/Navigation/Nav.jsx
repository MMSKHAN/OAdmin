import React,{useState} from 'react'
import logo from "../Asserts/Logo.png"
import "./Nav.css"
import NavArray from './NavArray'

import {List, XCircle} from "react-bootstrap-icons"
import { NavLink } from 'react-router-dom';
function Nav() {
  const [state,setstate]=useState(false)
  const clicked =()=>{
if(state===false){
  setstate(true)
}else{
  setstate(false)
}
  }
  return (
    <>
    <div className="nav_bar">
        <div className="logo">
            <div className="logo_img"><img src={logo} alt="logo" /></div>
        </div>
        <div className="Close_buttons">
        <div className="button" onClick={clicked} ><span>{state? <XCircle style={{fontSize:"2rem"}} /> :<List style={{fontSize:"2rem"}} />}</span></div>
        <div className={state?"nav2":"nav"}> 
        <ul>
          {
            NavArray.map((items)=>{
              return(
                <>
                <li>
             
                    <NavLink activeClassName="active"  id='Nav_links' to={items.to}> <span className='nav_icons' > {items.icon}</span> <span className='nav_space'  >{items.name}</span> </NavLink>
    
                </li>
                
                </>
              )
            })
          }
        </ul>
        
        
         </div>
         </div>
    </div>
    
    </>
  )
}

export default Nav