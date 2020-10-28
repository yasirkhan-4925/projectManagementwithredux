import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/reducers/actions/authAction'



const SignedInLink = (props) =>{

  return(
      <>
           <ul className="right ">
           
               <li><NavLink to="/create" >Add Project</NavLink></li> 
               <li><a onClick={props.signOut}>Log Out</a></li> 
               <li><NavLink to="/myprojects" >My Projects</NavLink></li> 
               
  <li><NavLink className="btn btn-floating pink accent-2" to="/" >{props.profile.initials}</NavLink></li> 
           </ul>
           

        </>   
  )

}

const mapDispatchToProps = (dispatch) => {
  return{
    
   signOut: ()=> dispatch(signOut()) 

  }
}

export default connect(null,mapDispatchToProps)(SignedInLink)