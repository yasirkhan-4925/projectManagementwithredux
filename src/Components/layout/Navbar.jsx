import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <SignedInLink profile={profile}/> : <SignedOutLink/>
  return (
      <div>
        <nav className="nav-extended">
      <div className="nav-wrapper deep-purple darken-4">
        <div> 
      <Link style={{marginLeft:"12px"}} to="/" className=" left brand-logo">
            React Project
          </Link>
          </div>
        <div className="container ">
          
          

         {links}
        </div>
      </div>
      </nav>
     
      </div>
      
  
  );
};


const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
