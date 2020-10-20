import React from 'react'
import {NavLink} from 'react-router-dom'



const SignedInLink = () =>{

  return(
      <>
           <ul className="right ">
           
               <li><NavLink to="/create" >Add Project</NavLink></li> 
               <li><NavLink to="/" >Log Out</NavLink></li> 
               <li><NavLink className="btn btn-floating pink accent-2" to="/" >YK</NavLink></li> 
           </ul>
           

        </>   
  )

}


export default SignedInLink