import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignOutLinks'
import {connect} from 'react-redux'


 const Navbar = () => { 


     return(
  <>
        <nav className="nav-wrapper deep-purple darken-4">
            <div className="container">
                 <Link to='/' className="brand-logo">MY REACT PROJECT</Link>

                 <SignedInLink/>
                 <SignedOutLink/>
                
            </div>
        </nav>
        
    </>



     )

 }

 const mapStateToProps = (state) => {
     console.log(state)
    return({

    })

 }

export default connect(mapStateToProps)(Navbar)